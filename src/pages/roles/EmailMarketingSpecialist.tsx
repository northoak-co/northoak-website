import { pageMeta } from "@/lib/seo";
import { Users } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import processAutomationImg from "@/assets/characters/process-automation.png";

export const meta = () => [
  ...pageMeta({ title: "Hire a Email Marketing Specialist - NorthOak", description: "Dedicated Email Marketing Specialist specialists for high-growth teams. Starts at $2,000/mo." }),
];

const faqs = [
  { question: "How quickly can I hire a Email Marketing Specialist?", answer: "NorthOak matches you with a vetted Email Marketing Specialist in 5 business days." },
  { question: "What does a Email Marketing Specialist cost with NorthOak?", answer: "Plans start at $2,000/mo, all-inclusive. No recruiting fees or benefits overhead." },
  { question: "What if it's not a good fit?", answer: "Guaranteed service — we'll rematch you at no cost." },
];

const Page = () => (
  <RolePageLayout
    icon={Users}
    category="Marketing"
    title="Email Marketing Specialist"
    description="Dedicated Email Marketing Specialist specialists embedded in your team, working your hours."
    benefits={[
      { title: "Dedicated to you", description: "Your specialist works exclusively on your account." },
      { title: "Fast onboarding", description: "Matched and onboarded in 5 business days." },
      { title: "All-inclusive pricing", description: "No recruiting fees, benefits, or hidden costs." },
      { title: "Guaranteed service", description: "Free rematch if it's not a perfect fit." },
    ]}
    tasks={[
      { title: "Core task 1", description: "Primary responsibility for this role." },
      { title: "Core task 2", description: "Secondary area of responsibility." },
      { title: "Core task 3", description: "Ongoing workflow management." },
      { title: "Core task 4", description: "Reporting and communication." },
      { title: "Core task 5", description: "Process improvement." },
      { title: "Core task 6", description: "Tool and system management." },
    ]}
    stats={[
      { value: "5 days", label: "Time to hire" },
      { value: "70%", label: "Cost savings" },
      { value: "100%", label: "Dedicated" },
    ]}
    tldr="NorthOak Email Marketing Specialists are dedicated to your account, embedded in your tools, and working your hours. Starts at $2,000/mo. Guaranteed service."
    tools={["Tool 1", "Tool 2", "Tool 3", "Tool 4", "Tool 5"]}
    costRows={[
      { label: "Monthly cost", domestic: "$5,000 – $8,000", northoak: "From $2,000" },
      { label: "Benefits & payroll taxes", domestic: "~30% overhead", northoak: "Included" },
      { label: "Recruiting fee", domestic: "$8,000 – $15,000", northoak: "None" },
      { label: "Equipment & software", domestic: "$200 – $500/mo", northoak: "Included" },
      { label: "Total annual cost", domestic: "$85,000 – $130,000", northoak: "From $24,000" },
    ]}
    timeToHire="5 business days"
    faqs={faqs}
  />
);

export default Page;
