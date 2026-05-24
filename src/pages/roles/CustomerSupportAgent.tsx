import { Headphones } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What support channels can a NorthOak agent cover?",
    answer:
      "Email, live chat, and social media DMs are the most common. Phone support is available for clients with a VoIP setup. Most clients start with email and chat, then expand channels once the specialist is fully onboarded.",
  },
  {
    question: "How quickly do they respond to tickets?",
    answer:
      "We target first response within 1 hour during coverage hours. Average handle time and CSAT targets are agreed during onboarding and tracked weekly.",
  },
  {
    question: "What helpdesk platforms do they work in?",
    answer:
      "Zendesk, Gorgias, Freshdesk, Intercom, Help Scout, and Front are all supported. If you use a different platform, let us know during intake.",
  },
  {
    question: "Can they handle escalations and complex issues?",
    answer:
      "Yes — our agents are trained to use your escalation matrix. L1 issues they resolve independently. L2 and above get escalated to your internal team with full context and recommended resolution.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Customer Support Agent | NorthOak",
    description:
      "Dedicated customer support agents for email, live chat, and social — trained in your product, working your hours, with CSAT targets built in.",
    path: "/roles/customer-support-agent",
  }),
  serviceSchema({
    name: "Customer Support Agent",
    description:
      "Dedicated customer support agents handling ticket management, live chat, email support, escalation routing, and CSAT improvement.",
    path: "/roles/customer-support-agent",
    serviceType: "Customer Support",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Customer Support Agent", path: "/roles/customer-support-agent" },
  ]),
  faqSchema(faqs),
];

const CustomerSupportAgent = () => {
  return (
    <RolePageLayout
      icon={Headphones}
      title="Customer Support Agent"
      subtitle="Customer Support and Client Success"
      description="Deliver fast, high-quality customer support across email and chat with a dedicated agent trained in your product, policies, and brand voice."
      benefits={[
        "Sub-1-hour first response during coverage hours",
        "CSAT targets set and tracked from day one",
        "Product-trained agents who escalate intelligently",
        "Coverage expanded without adding headcount risk",
        "60%+ cost savings vs. a domestic support hire",
      ]}
      tasks={[
        {
          title: "Ticket Management",
          description:
            "Triage, categorize, and resolve inbound support tickets in Zendesk, Gorgias, or Freshdesk — maintaining SLA compliance and queue health.",
        },
        {
          title: "Live Chat Support",
          description:
            "Handle real-time chat conversations with customers, answer product questions, resolve issues, and route complex cases to the right team.",
        },
        {
          title: "Email Support",
          description:
            "Respond to customer emails with accurate, on-brand replies — using macros and templates where appropriate and personalizing where it matters.",
        },
        {
          title: "Order and Account Management",
          description:
            "Process order changes, refunds, cancellations, and account updates — coordinating with fulfillment or billing teams as needed.",
        },
        {
          title: "Escalation Handling",
          description:
            "Follow your escalation matrix to route complex, sensitive, or high-value customer issues to the right internal team with full context.",
        },
        {
          title: "CSAT and Quality Reporting",
          description:
            "Track satisfaction scores, identify recurring issue themes, and flag product and policy gaps based on ticket data.",
        },
      ]}
      stats={[
        { value: "<1hr", label: "First response target" },
        { value: "95%+", label: "CSAT scores achieved" },
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Customer Support Agents handle tickets, live chat, and email support — trained on your product and working your hours with clear CSAT targets. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Zendesk",
        "Gorgias",
        "Freshdesk",
        "Intercom",
        "Help Scout",
        "Front",
        "Shopify",
        "Stripe",
        "Slack",
        "Google Workspace",
        "Notion",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$4,500 – $7,000",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$6,000 – $11,000 one-time",
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

export default CustomerSupportAgent;
