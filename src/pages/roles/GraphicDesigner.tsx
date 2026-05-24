import { Megaphone } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What types of design work can a NorthOak Graphic Designer handle?",
    answer:
      "Marketing collateral, social media graphics, email templates, presentation decks, landing page mockups, ad creatives, brand asset updates, infographics, and eBook or white paper layouts. For web development or motion graphics, those are separate roles.",
  },
  {
    question: "What design tools do they use?",
    answer:
      "Adobe Illustrator, Photoshop, InDesign, Figma, and Canva. Most work is delivered as editable source files in your preferred format.",
  },
  {
    question: "Can they work from our existing brand guidelines?",
    answer:
      "Yes — in fact that's ideal. They'll follow your brand style guide, use your color palette and typography, and ensure every asset maintains visual consistency with your established brand identity.",
  },
  {
    question: "How many design requests can they handle per month?",
    answer:
      "Output depends on complexity. Social graphics and minor edits are completed same-day or next-day. Presentations and complex layouts take 2–5 business days. Volume varies by project mix — we'll discuss realistic expectations during intake.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Graphic Designer | NorthOak",
    description:
      "Dedicated graphic designers for marketing collateral, social graphics, presentations, ad creatives, and brand assets — working in Figma, Adobe Suite, and Canva.",
    path: "/roles/graphic-designer",
  }),
  serviceSchema({
    name: "Graphic Designer",
    description:
      "Dedicated graphic designers producing marketing collateral, social media graphics, presentations, email templates, ad creatives, and brand asset updates.",
    path: "/roles/graphic-designer",
    serviceType: "Graphic Design",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Graphic Designer", path: "/roles/graphic-designer" },
  ]),
  faqSchema(faqs),
];

const GraphicDesigner = () => {
  return (
    <RolePageLayout
      icon={Megaphone}
      title="Graphic Designer"
      subtitle="Marketing"
      description="Keep your brand looking sharp across every channel with a dedicated designer who turns briefs into polished, on-brand assets — without agency timelines or overhead."
      benefits={[
        "On-brand assets delivered on schedule without agency markups",
        "Design backlog cleared so campaigns launch on time",
        "Visual consistency maintained across all marketing channels",
        "Fast turnaround on social and ad creatives without sacrificing quality",
        "65%+ cost savings vs. a domestic in-house designer",
      ]}
      tasks={[
        {
          title: "Marketing Collateral",
          description:
            "Design brochures, one-pagers, sales decks, and print materials — polished, on-brand, and print-ready when your team needs them.",
        },
        {
          title: "Social Media Graphics",
          description:
            "Create scroll-stopping social graphics for LinkedIn, Instagram, and other platforms — formatted for each channel's specifications and optimized for engagement.",
        },
        {
          title: "Presentation Design",
          description:
            "Design and format pitch decks, board presentations, and internal decks that communicate ideas clearly with compelling visual hierarchy.",
        },
        {
          title: "Ad Creatives",
          description:
            "Design digital ad creatives across formats — display ads, social ads, retargeting assets — in multiple sizes for rapid testing and deployment.",
        },
        {
          title: "Email Template Design",
          description:
            "Design HTML email templates and campaign layouts in your ESP — visually compelling, mobile-optimized, and consistent with your brand.",
        },
        {
          title: "Brand Asset Management",
          description:
            "Maintain and update brand assets, create variations within style guidelines, and build out template libraries that speed up future design work.",
        },
      ]}
      stats={[
        { value: "65%", label: "Cost savings vs. domestic" },
        { value: "24hr", label: "Turnaround on social assets" },
        { value: "100%", label: "Brand-consistent output" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Graphic Designers produce marketing collateral, social graphics, ad creatives, presentations, and email templates — on-brand, on time, without agency overhead. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Figma",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
        "Canva",
        "Adobe Express",
        "Google Slides",
        "PowerPoint",
        "Sketch",
        "Notion",
        "Slack",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$6,000 – $9,500",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$8,000 – $15,000 one-time",
          northoak: "None",
        },
        {
          label: "Time to first day",
          domestic: "4 – 8 weeks",
          northoak: "5 business days",
        },
        {
          label: "Replacement",
          domestic: "Restart full cycle",
          northoak: "Free, any time",
        },
      ]}
      timeToHire="5 business days"
      faqs={faqs}
    />
  );
};

export default GraphicDesigner;
