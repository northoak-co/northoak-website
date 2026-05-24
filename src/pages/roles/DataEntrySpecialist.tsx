import { FileText } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What types of data do your specialists handle?",
    answer:
      "Product catalog data, customer contact records, order data, financial transaction records, inventory data, form submissions, survey results, and any structured data that needs to be entered, migrated, or maintained. If you have a specific use case, describe it during intake.",
  },
  {
    question: "How do they ensure accuracy?",
    answer:
      "Our specialists use double-entry verification for high-stakes data, cross-reference source documents, and follow your quality standards. Error rates are tracked and reported — our benchmark is under 0.5% error rate.",
  },
  {
    question: "Can they handle high-volume data entry?",
    answer:
      "Yes — we can scale the team for high-volume projects. For large one-time migrations, we'll scope the timeline and staffing requirements during intake.",
  },
  {
    question: "What data formats and systems do they work in?",
    answer:
      "Excel, Google Sheets, CRM systems, ERPs, custom databases, and web-based forms. They can work in virtually any system you provide access to.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Data Entry Specialist | NorthOak",
    description:
      "Dedicated data entry specialists for high-volume, high-accuracy data processing — CRM records, product catalogs, financial data, and custom databases.",
    path: "/roles/data-entry-specialist",
  }),
  serviceSchema({
    name: "Data Entry Specialist",
    description:
      "Dedicated data entry specialists for accurate, high-volume data processing — contact records, product data, financial transactions, inventory, and database management.",
    path: "/roles/data-entry-specialist",
    serviceType: "Data Entry",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Data Entry Specialist", path: "/roles/data-entry-specialist" },
  ]),
  faqSchema(faqs),
];

const DataEntrySpecialist = () => {
  return (
    <RolePageLayout
      icon={FileText}
      title="Data Entry Specialist"
      subtitle="Back Office Administration"
      description="Keep your databases clean, current, and reliable with a dedicated data entry specialist who handles high-volume processing with documented accuracy standards."
      benefits={[
        "Under 0.5% error rate on all data entry work",
        "High-volume processing that doesn't bottleneck your team",
        "Database records kept current without internal effort",
        "Data migrations completed accurately and on schedule",
        "60%+ cost savings vs. a domestic data entry coordinator",
      ]}
      tasks={[
        {
          title: "Database Record Entry and Maintenance",
          description:
            "Enter new records and update existing ones in CRMs, ERPs, and custom databases — maintaining completeness and accuracy standards across all fields.",
        },
        {
          title: "Data Migration and Transfer",
          description:
            "Migrate data between systems accurately — mapping fields, validating records, and resolving errors to ensure clean data in the destination system.",
        },
        {
          title: "Product Catalog Management",
          description:
            "Enter and maintain product listings — titles, descriptions, SKUs, pricing, attributes, and images — across your ecommerce platform or PIM system.",
        },
        {
          title: "Contact Record Management",
          description:
            "Build and maintain customer, vendor, and prospect contact records — verifying accuracy, standardizing formats, and removing duplicates.",
        },
        {
          title: "Document Digitization",
          description:
            "Convert paper forms, scanned documents, and PDFs into structured digital records — accurately transcribing data into your required format.",
        },
        {
          title: "Quality Audits and Reporting",
          description:
            "Run periodic audits on data quality, identify and correct errors, and report on data completeness and accuracy metrics.",
        },
      ]}
      stats={[
        { value: "<0.5%", label: "Error rate" },
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "3×", label: "Processing capacity" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Data Entry Specialists handle high-volume processing of CRM records, product data, financial transactions, and custom databases — with documented accuracy standards and fast turnaround. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Excel",
        "Google Sheets",
        "Salesforce",
        "HubSpot",
        "Airtable",
        "Shopify",
        "QuickBooks",
        "NetSuite",
        "Notion",
        "Google Workspace",
        "Slack",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$4,000 – $6,000",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$5,000 – $9,000 one-time",
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

export default DataEntrySpecialist;
