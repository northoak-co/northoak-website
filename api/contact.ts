import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormRequest {
  // Required
  email: string;
  company: string;
  // Optional — varies by which form (multi-step intake vs single-page BookingForm)
  firstName?: string;
  lastName?: string;
  phone?: string;
  url?: string;
  size?: string;
  source?: string;
  services?: string[];
  timeline?: string;
  teamSize?: string;
  journey?: string;
  notes?: string;
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const row = (label: string, value: string | undefined | null): string => {
  if (!value || value.trim() === "") return "";
  return `<li><strong>${label}:</strong> ${escapeHtml(value)}</li>`;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const formData = req.body as ContactFormRequest;

    if (!formData?.email || !formData?.company) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const fullName = [formData.firstName, formData.lastName]
      .filter((part) => part && part.trim())
      .join(" ")
      .trim();

    const contactRows = [
      row("Name", fullName),
      row("Work Email", formData.email),
      row("Phone", formData.phone),
      row("Company", formData.company),
      row("Company URL", formData.url),
      row("Company Size", formData.size),
    ]
      .filter(Boolean)
      .join("\n");

    const intakeRows = [
      row(
        "Services",
        formData.services && formData.services.length > 0
          ? formData.services.join(", ")
          : undefined,
      ),
      row("Timeline", formData.timeline),
      row("Team size needed", formData.teamSize),
      row("Outsourcing journey", formData.journey),
      row("Source", formData.source),
    ]
      .filter(Boolean)
      .join("\n");

    const notesBlock =
      formData.notes && formData.notes.trim()
        ? `<h2>Additional Notes</h2><p>${escapeHtml(formData.notes).replace(/\n/g, "<br>")}</p>`
        : "";

    const emailHtml = `
      <h1>New Contact Form Submission</h1>
      <p>A new inquiry has been submitted via the contact form:</p>

      <h2>Contact Details</h2>
      <ul>
        ${contactRows}
      </ul>

      ${intakeRows ? `<h2>Intake</h2><ul>${intakeRows}</ul>` : ""}

      ${notesBlock}

      <hr>
      <p style="color: #666; font-size: 12px;">This email was sent from the NorthOak contact form.</p>
    `;

    const fromLabel = fullName ? `${fullName} (${formData.company})` : formData.company;

    const emailResponse = await resend.emails.send({
      from: "NorthOak <no-reply@northoak.co>",
      to: ["vincent@northoak.co"],
      subject: `New Northoak.co Contact Form Submission from ${fromLabel}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Error in /api/contact:", error);
    return res.status(500).json({ error: error?.message ?? "Internal error" });
  }
}
