import { Headphones } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What level of technical complexity can a NorthOak specialist handle?",
    answer:
      "Our Technical Support Specialists handle L1 and L2 issues: account setup, integrations, API troubleshooting, bug reproduction, basic configuration, and escalation routing. For L3 engineering-level issues, they gather full context and escalate to your dev team with detailed reproduction steps.",
  },
  {
    question: "Can they do live troubleshooting via screen share?",
    answer:
      "Yes — our specialists are comfortable running Zoom or Google Meet sessions to walk customers through setup, diagnose issues in real time, and resolve configuration problems live.",
  },
  {
    question: "Do they need access to our internal systems?",
    answer:
      "Typically yes — read access to your product's admin panel and logging tools is helpful. All specialists sign NDAs and follow least-privilege access policies before starting.",
  },
  {
    question: "Can they write help center articles and documentation?",
    answer:
      "Yes — many of our Tech Support Specialists also own knowledge base maintenance: updating articles, flagging gaps, and writing new content based on recurring support themes.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Technical Support Specialist | NorthOak",
    description:
      "Dedicated technical support specialists for L1/L2 troubleshooting, API support, integration help, and knowledge base management.",
    path: "/roles/technical-support-specialist",
  }),
  serviceSchema({
    name: "Technical Support Specialist",
    description:
      "Dedicated technical support specialists handling L1/L2 troubleshooting, API and integration support, bug reproduction, escalation routing, and knowledge base management.",
    path: "/roles/technical-support-specialist",
    serviceType: "Technical Support",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Technical Support Specialist", path: "/roles/technical-support-specialist" },
  ]),
  faqSchema(faqs),
];

const TechSupportSpecialist = () => {
  return (
    <RolePageLayout
      icon={Headphones}
      title="Technical Support Specialist"
      subtitle="Customer Support and Client Success"
      description="Resolve technical issues faster and protect your engineering team's focus with a dedicated specialist who handles L1/L2 troubleshooting, API questions, and integration support."
      benefits={[
        "Engineering team freed from L1/L2 support tickets",
        "Technical issues resolved without customer frustration",
        "Knowledge base kept current and actually useful",
        "Detailed bug reports that help your dev team ship faster",
        "60%+ cost savings vs. a domestic technical support hire",
      ]}
      tasks={[
        {
          title: "L1/L2 Troubleshooting",
          description:
            "Diagnose and resolve common product issues — account configuration, billing problems, integration errors, and feature setup — without escalating to engineering.",
        },
        {
          title: "API and Integration Support",
          description:
            "Help customers troubleshoot API calls, webhook configurations, and third-party integrations — reviewing logs and guiding technical users through setup.",
        },
        {
          title: "Bug Reproduction and Escalation",
          description:
            "Reproduce reported bugs with detailed steps, document environment details and expected vs. actual behavior, and file structured tickets for your engineering team.",
        },
        {
          title: "Screen Share Troubleshooting",
          description:
            "Run live troubleshooting sessions via Zoom or Google Meet to diagnose configuration issues and guide customers through complex setup workflows in real time.",
        },
        {
          title: "Knowledge Base Management",
          description:
            "Write, update, and maintain help center articles based on recurring support themes — reducing ticket volume and improving customer self-service.",
        },
        {
          title: "Technical Onboarding Support",
          description:
            "Support new customers during the integration and setup phase — answering technical questions, validating configurations, and accelerating time-to-value.",
        },
      ]}
      stats={[
        { value: "70%", label: "L1/L2 tickets resolved" },
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "30%", label: "Ticket volume reduction" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Technical Support Specialists handle L1/L2 troubleshooting, API and integration support, bug reproduction, and knowledge base maintenance — protecting your engineering team's focus. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Zendesk",
        "Intercom",
        "Jira",
        "Linear",
        "GitHub",
        "Postman",
        "Confluence",
        "Notion",
        "Loom",
        "Zoom",
        "Slack",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$5,500 – $8,500",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$8,000 – $13,000 one-time",
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

export default TechSupportSpecialist;
