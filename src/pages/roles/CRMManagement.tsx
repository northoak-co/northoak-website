import { Users } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import crmManagementImg from "@/assets/characters/crm-management.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What CRM platforms do your specialists support?",
    answer:
      "Our specialists are proficient in HubSpot, Salesforce, Pipedrive, Zoho CRM, Copper, and Monday.com CRM. If your platform isn't listed, tell us — we vet for adaptability and can onboard to proprietary setups.",
  },
  {
    question:
      "How is a NorthOak CRM specialist different from a freelancer on Upwork?",
    answer:
      "Freelancers are project-based and rarely available for ongoing daily operations. NorthOak specialists are fully dedicated to your account — working your hours, embedded in your tools, and accountable to your SOPs. We also handle payroll, compliance, and replacement if the fit isn't right.",
  },
  {
    question: "Do I need to train the specialist?",
    answer:
      "We run a structured onboarding covering your CRM configuration, naming conventions, lead definitions, and SOPs. Most clients are fully operational within 5–7 days. You provide access and context; we handle onboarding execution.",
  },
  {
    question: "What time zones do your CRM specialists work in?",
    answer:
      "We match your business hours. Most North American clients are covered 9am–6pm in their local time zone. Extended and overlap coverage is available for global operations.",
  },
  {
    question: "What if the match isn't right?",
    answer:
      "Guaranteed service. We'll rematch you with a new specialist at no additional cost, typically within 5 business days.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a CRM Specialist | NorthOak",
    description:
      "Vetted CRM administrators who maintain your customer data, route leads, manage pipeline, and automate workflows in HubSpot, Salesforce, Pipedrive, and more.",
    path: "/roles/crm-management",
  }),
  serviceSchema({
    name: "CRM Management",
    description:
      "Dedicated CRM specialists for data entry, lead management, pipeline hygiene, reporting, and workflow automation.",
    path: "/roles/crm-management",
    serviceType: "CRM Administration",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "CRM Management", path: "/roles/crm-management" },
  ]),
  faqSchema(faqs),
];

const CRMManagement = () => {
  return (
    <RolePageLayout
      icon={Users}
      image={crmManagementImg}
      title="CRM Management"
      subtitle="Customer Relationship Management"
      description="Keep your customer information up-to-date and manage ongoing sales and marketing workflows with dedicated CRM specialists."
      benefits={[
        "Reduce data entry errors by up to 90%",
        "Free your sales team to focus on closing deals",
        "Maintain consistent customer communication",
        "Scale your CRM operations without additional headcount",
        "24/7 coverage for global customer databases",
      ]}
      tasks={[
        {
          title: "Data Entry & Cleanup",
          description:
            "Maintain accurate customer records, deduplicate entries, and ensure data hygiene across your CRM platform.",
        },
        {
          title: "Lead Management",
          description:
            "Qualify, score, and route leads to the right sales reps. Track lead sources and conversion metrics.",
        },
        {
          title: "Pipeline Management",
          description:
            "Update deal stages, track activities, and ensure your pipeline reflects reality in real-time.",
        },
        {
          title: "Reporting & Analytics",
          description:
            "Generate custom reports, dashboards, and insights to drive data-informed decisions.",
        },
        {
          title: "Integration Management",
          description:
            "Sync your CRM with email, calendar, marketing tools, and other business applications.",
        },
        {
          title: "Workflow Automation",
          description:
            "Set up and maintain automated sequences for follow-ups, reminders, and customer touchpoints.",
        },
      ]}
      stats={[
        { value: "90%", label: "Data accuracy improvement" },
        { value: "40+", label: "Hours saved weekly" },
        { value: "3x", label: "Faster lead response" },
        { value: "50%", label: "Cost reduction" },
      ]}
      tldr="NorthOak CRM specialists keep your HubSpot, Salesforce, or Pipedrive pipeline clean and current — from daily data entry and lead routing to workflow automation. Dedicated to your account, embedded in your tools. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Zoho CRM",
        "Copper",
        "Monday.com",
        "Zapier",
        "Make",
        "Airtable",
        "Notion",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$6,500 – $9,000",
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

export default CRMManagement;
