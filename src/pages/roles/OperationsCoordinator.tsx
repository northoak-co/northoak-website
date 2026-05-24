import { FileText } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import processAutomationImg from "@/assets/characters/process-automation.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What does an Operations Coordinator own day-to-day?",
    answer:
      "Process execution, cross-functional coordination, project tracking, vendor and supplier communication, operations reporting, and SOP documentation. They keep the operational machinery running so your ops lead can focus on strategy.",
  },
  {
    question: "Can they manage multiple workflows simultaneously?",
    answer:
      "Yes — our Operations Coordinators are experienced multitaskers who manage competing priorities across processes. They use project management tools to track everything and flag conflicts or blockers proactively.",
  },
  {
    question: "Can they write and document SOPs?",
    answer:
      "Yes — documenting processes is often one of the most impactful things they do. They can interview internal SMEs, observe workflows, and produce clear, usable SOPs in Notion, Confluence, or your preferred documentation tool.",
  },
  {
    question: "What industries do your Operations Coordinators have experience in?",
    answer:
      "Our specialists have backgrounds across SaaS, ecommerce, professional services, healthcare admin, logistics, and financial services. Tell us your industry during intake and we'll match accordingly.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire an Operations Coordinator | NorthOak",
    description:
      "Dedicated operations coordinators to keep your business running — process execution, cross-functional coordination, SOP documentation, and ops reporting.",
    path: "/roles/operations-coordinator",
  }),
  serviceSchema({
    name: "Operations Coordinator",
    description:
      "Dedicated operations coordinators handling process execution, cross-functional coordination, project tracking, SOP documentation, vendor management, and operations reporting.",
    path: "/roles/operations-coordinator",
    serviceType: "Operations Coordination",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Operations Coordinator", path: "/roles/operations-coordinator" },
  ]),
  faqSchema(faqs),
];

const OperationsCoordinator = () => {
  return (
    <RolePageLayout
      icon={FileText}
      image={processAutomationImg}
      title="Operations Coordinator"
      subtitle="Back Office Administration"
      description="Keep your operations running on time and on process with a dedicated coordinator who handles execution, documentation, and cross-functional coordination so nothing falls through the cracks."
      benefits={[
        "Operational processes that run without constant management oversight",
        "SOP library built and maintained so teams follow consistent workflows",
        "Cross-functional dependencies tracked and resolved proactively",
        "Vendor and supplier relationships managed without distracting leadership",
        "60%+ cost savings vs. a domestic ops coordinator",
      ]}
      tasks={[
        {
          title: "Process Execution and Management",
          description:
            "Own the day-to-day execution of defined operational workflows — ensuring steps are completed on schedule, quality standards are met, and exceptions are escalated promptly.",
        },
        {
          title: "Cross-Functional Coordination",
          description:
            "Coordinate across sales, finance, HR, and customer success to keep handoffs smooth, dependencies tracked, and projects moving without bottlenecks.",
        },
        {
          title: "SOP Documentation",
          description:
            "Write, maintain, and improve standard operating procedures for repeatable processes — making institutional knowledge accessible and ensuring consistent execution.",
        },
        {
          title: "Vendor and Supplier Management",
          description:
            "Manage vendor relationships, coordinate orders and deliveries, track service agreements, and escalate performance issues when SLAs are not met.",
        },
        {
          title: "Project and Task Tracking",
          description:
            "Maintain project plans and task trackers, follow up on open action items, flag overdue work, and prepare status updates for leadership.",
        },
        {
          title: "Operations Reporting",
          description:
            "Build and distribute regular operations dashboards covering process throughput, exceptions, vendor performance, and key operational KPIs.",
        },
      ]}
      stats={[
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "40%", label: "Fewer process exceptions" },
        { value: "100%", label: "SOP coverage of key processes" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Operations Coordinators handle process execution, SOP documentation, vendor management, and cross-functional coordination — the operational backbone that keeps your business moving. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Notion",
        "Airtable",
        "Asana",
        "Monday.com",
        "ClickUp",
        "Slack",
        "Google Workspace",
        "Zapier",
        "Excel",
        "Loom",
        "Confluence",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$5,500 – $8,000",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$7,000 – $13,000 one-time",
          northoak: "None",
        },
        {
          label: "Time to first day",
          domestic: "4 – 7 weeks",
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

export default OperationsCoordinator;
