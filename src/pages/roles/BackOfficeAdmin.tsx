import { FileText } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What kinds of workflows can back-office specialists handle?",
    answer:
      "Data entry and validation, document digitization and filing, order processing and fulfillment tracking, inventory updates, vendor coordination, quality checking, report generation, and any repeatable manual process your business runs. If you can document the steps, we can staff it.",
  },
  {
    question: "How do you handle custom or proprietary workflows?",
    answer:
      "During onboarding, we document your specific processes in an SOP. The specialist is trained on your workflow before going live. Most custom workflows are running within 5–7 days.",
  },
  {
    question: "What accuracy rates do you target?",
    answer:
      "Our back-office specialists target 99%+ accuracy on data entry and processing tasks. We build in QA checkpoints for high-volume workflows — typically a daily spot-check during the first 30 days, then weekly thereafter.",
  },
  {
    question: "Can back-office specialists work in our internal tools?",
    answer:
      "Yes — we can work in any web-based tool you use. We have staffed workflows in Shopify, Salesforce, custom ERPs, proprietary portals, and everything in between.",
  },
  {
    question: "What if the specialist isn't a fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Back-Office Admin | NorthOak",
    description:
      "Back-office specialists for data entry, document management, order processing, inventory, QA, and any custom workflow your business runs.",
    path: "/roles/back-office-admin",
  }),
  serviceSchema({
    name: "Back Office Admin",
    description:
      "Dedicated back-office specialists for data entry, document management, order processing, inventory, quality assurance, and custom workflow handling.",
    path: "/roles/back-office-admin",
    serviceType: "Back Office Administration",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Back Office Admin", path: "/roles/back-office-admin" },
  ]),
  faqSchema(faqs),
];

const BackOfficeAdmin = () => {
  return (
    <RolePageLayout
      icon={FileText}
      title="Back Office Admin"
      subtitle="Operations & Administration"
      description="Have other manual workflows and processes unique to your business? Our back office specialists will handle them for you."
      benefits={[
        "Automate repetitive manual processes",
        "Reduce operational overhead costs",
        "Maintain consistent quality standards",
        "Scale operations without growing headcount",
        "Focus your team on strategic initiatives",
      ]}
      tasks={[
        {
          title: "Data Entry & Processing",
          description:
            "Handle high-volume data entry, validation, and processing with speed and accuracy.",
        },
        {
          title: "Document Management",
          description:
            "Organize, digitize, and manage documents, contracts, and records.",
        },
        {
          title: "Order Processing",
          description:
            "Process orders, track shipments, and manage fulfillment workflows.",
        },
        {
          title: "Inventory Management",
          description:
            "Track inventory levels, manage stock, and coordinate with suppliers.",
        },
        {
          title: "Quality Assurance",
          description:
            "Review work, check for errors, and ensure quality standards are met.",
        },
        {
          title: "Custom Workflows",
          description:
            "Handle any unique business processes specific to your operations.",
        },
      ]}
      stats={[
        { value: "85%", label: "Faster processing" },
        { value: "99%", label: "Accuracy rate" },
        { value: "50%", label: "Cost savings" },
        { value: "24/7", label: "Operations coverage" },
      ]}
      tldr="NorthOak back-office specialists handle data entry, document management, order processing, inventory tracking, and any repeatable workflow your operations team runs — accurately and at scale. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Google Sheets",
        "Microsoft Excel",
        "Airtable",
        "Salesforce",
        "Shopify",
        "WooCommerce",
        "Notion",
        "Slack",
        "Zapier",
        "Make",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$4,500 – $6,500",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$5,000 – $10,000 one-time",
          northoak: "None",
        },
        {
          label: "Time to first day",
          domestic: "3 – 6 weeks",
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

export default BackOfficeAdmin;
