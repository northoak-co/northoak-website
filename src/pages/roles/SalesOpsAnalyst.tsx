import { TrendingUp } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What does a Sales Operations Analyst actually own?",
    answer:
      "They own the systems and data layer of your go-to-market motion: CRM reporting, quota tracking, territory and comp plan modeling, sales process documentation, and tool stack management. Think of them as the infrastructure layer that makes reps more effective.",
  },
  {
    question: "Do they replace my RevOps function?",
    answer:
      "For most early-to-mid-stage companies, a NorthOak Sales Ops Analyst can cover most RevOps needs — reporting, tooling, process design. For companies with complex multi-product GTM motions, they work alongside a head of RevOps to handle execution.",
  },
  {
    question: "Can they build compensation models and quota analysis?",
    answer:
      "Yes — they can model attainment scenarios, run quota-setting analysis, and build rep scorecards. Final comp plan decisions stay with your leadership, but they'll do the analytical heavy lifting.",
  },
  {
    question: "What tools do they work in?",
    answer:
      "Salesforce, HubSpot, Excel, Google Sheets, Tableau, Looker, and common sales engagement platforms. Tell us your stack during intake.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Sales Operations Analyst | NorthOak",
    description:
      "Dedicated sales operations analysts for pipeline reporting, CRM management, quota modeling, and GTM process optimization. Scale revenue operations without the overhead.",
    path: "/roles/sales-ops-analyst",
  }),
  serviceSchema({
    name: "Sales Operations Analyst",
    description:
      "Dedicated sales operations analysts handling pipeline reporting, CRM administration, quota tracking, territory planning, and GTM process design.",
    path: "/roles/sales-ops-analyst",
    serviceType: "Sales Operations",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Sales Operations Analyst", path: "/roles/sales-ops-analyst" },
  ]),
  faqSchema(faqs),
];

const SalesOpsAnalyst = () => {
  return (
    <RolePageLayout
      icon={TrendingUp}
      title="Sales Operations Analyst"
      subtitle="Sales and Go-to-Market"
      description="Give your revenue team the data, systems, and process backbone they need to hit quota — with a dedicated sales ops analyst at a fraction of the domestic cost."
      benefits={[
        "Accurate pipeline reporting leadership can rely on",
        "Sales process documentation that scales with the team",
        "Quota and territory modeling done in hours, not days",
        "Tool stack management without pulling in engineering",
        "60%+ cost savings vs. a domestic RevOps analyst",
      ]}
      tasks={[
        {
          title: "Pipeline Reporting",
          description:
            "Build and maintain weekly pipeline, forecast, and funnel conversion reports in Salesforce or HubSpot — keeping leadership visibility sharp.",
        },
        {
          title: "Quota and Attainment Tracking",
          description:
            "Track rep and team quota attainment in real time, model scenario analyses, and flag risk to your sales leadership before quarter-end.",
        },
        {
          title: "Territory and Segmentation Design",
          description:
            "Carve territories, assign accounts by segment and rep capacity, and maintain TAM analysis as your team scales.",
        },
        {
          title: "Sales Process Documentation",
          description:
            "Document playbooks, qualification frameworks, objection handling guides, and handoff SOPs so every rep follows a consistent, repeatable motion.",
        },
        {
          title: "Tool Stack Administration",
          description:
            "Manage licenses, integrations, and configurations across your sales tech stack — Salesforce, Outreach, ZoomInfo, Gong — without relying on engineering.",
        },
        {
          title: "Commission and Compensation Modeling",
          description:
            "Build compensation models, run attainment simulations, and prepare commission statements to support accurate and timely payouts.",
        },
      ]}
      stats={[
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "2×", label: "Faster reporting cycles" },
        { value: "100%", label: "Forecast accuracy lift" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Sales Ops Analysts own pipeline reporting, quota tracking, territory management, process documentation, and CRM administration — the infrastructure that makes your sales team run. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Salesforce",
        "HubSpot",
        "Outreach",
        "Gong",
        "ZoomInfo",
        "Tableau",
        "Looker",
        "Excel",
        "Google Sheets",
        "Notion",
        "Slack",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$7,000 – $10,500",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$10,000 – $18,000 one-time",
          northoak: "None",
        },
        {
          label: "Time to first day",
          domestic: "6 – 10 weeks",
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

export default SalesOpsAnalyst;
