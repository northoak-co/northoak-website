import { TrendingUp } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What CRM platforms do your specialists work in?",
    answer:
      "Salesforce, HubSpot, Pipedrive, Zoho CRM, and Monday CRM are the most common. If you use a different platform, tell us during intake — we'll confirm compatibility and provide tooling-specific vetting.",
  },
  {
    question: "Can a NorthOak CRM Manager build automations and workflows?",
    answer:
      "Yes — our CRM Managers can build lead routing rules, lifecycle stage automations, email sequences, deal stage triggers, and report dashboards. For advanced API integrations, we'll scope that separately.",
  },
  {
    question: "Will they own CRM strategy or just execute?",
    answer:
      "Both, depending on what you need. Many clients start with execution — cleanup, data entry, workflow builds — and over time the specialist contributes to segmentation strategy, lead scoring, and funnel optimization.",
  },
  {
    question: "How do you ensure data quality in my CRM?",
    answer:
      "Our CRM Managers run regular deduplication audits, enforce data entry standards across the sales team, and set up validation rules to prevent bad data at the source. You'll get a data health report monthly.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a CRM Manager | NorthOak",
    description:
      "Dedicated CRM managers to keep your pipeline clean, automate workflows, and turn your CRM data into actionable revenue insights.",
    path: "/roles/crm-manager",
  }),
  serviceSchema({
    name: "CRM Manager",
    description:
      "Dedicated CRM managers handling data hygiene, workflow automation, pipeline management, reporting, and CRM administration in Salesforce, HubSpot, and more.",
    path: "/roles/crm-manager",
    serviceType: "CRM Management",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "CRM Manager", path: "/roles/crm-manager" },
  ]),
  faqSchema(faqs),
];

const CRMManager = () => {
  return (
    <RolePageLayout
      icon={TrendingUp}
      title="CRM Manager"
      subtitle="Sales and Go-to-Market"
      description="Turn your CRM from a data graveyard into a revenue engine with a dedicated specialist who owns hygiene, automation, and pipeline visibility."
      benefits={[
        "Clean pipeline data that your reps actually trust",
        "Automated workflows that eliminate manual follow-up",
        "Accurate forecasting and funnel reporting",
        "Faster lead response with smart routing rules",
        "CRM expertise at 60% of the cost of a domestic hire",
      ]}
      tasks={[
        {
          title: "CRM Data Hygiene",
          description:
            "Audit, deduplicate, and standardize contact and company records — so your team makes decisions on clean, reliable data.",
        },
        {
          title: "Workflow and Automation Builds",
          description:
            "Build lead routing, deal stage triggers, task creation, and email sequence automations to eliminate manual repetition across the sales cycle.",
        },
        {
          title: "Pipeline Management",
          description:
            "Maintain accurate deal stages, ensure reps log activity consistently, and flag stalled opportunities before they go cold.",
        },
        {
          title: "Reporting and Dashboards",
          description:
            "Build sales dashboards showing pipeline velocity, conversion rates, rep activity, and forecast accuracy — updated in real time.",
        },
        {
          title: "Lead Scoring and Segmentation",
          description:
            "Configure lead scoring models based on firmographic and behavioral signals to prioritize the opportunities most likely to close.",
        },
        {
          title: "CRM Administration",
          description:
            "Manage user access, field configurations, integration health, and platform updates — keeping your CRM running without IT involvement.",
        },
      ]}
      stats={[
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "3×", label: "Better pipeline visibility" },
        { value: "40%", label: "Less manual data entry" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak CRM Managers own data hygiene, workflow automation, pipeline reporting, and CRM administration — turning messy CRM setups into reliable revenue infrastructure. Dedicated to your account. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Salesforce",
        "HubSpot",
        "Pipedrive",
        "Zoho CRM",
        "Outreach",
        "Salesloft",
        "ZoomInfo",
        "Clearbit",
        "Zapier",
        "Google Sheets",
        "Slack",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$6,000 – $9,000",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$9,000 – $15,000 one-time",
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

export default CRMManager;
