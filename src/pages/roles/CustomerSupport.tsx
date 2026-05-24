import { HeadphonesIcon } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What support channels do your specialists cover?",
    answer:
      "Email, live chat, and phone. Most clients start with email and chat via Zendesk, Gorgias, or Intercom. Phone support is available on request.",
  },
  {
    question: "Can your specialists match our brand voice?",
    answer:
      "Yes. We run a brand onboarding session where you share tone guidelines, response templates, and common scenarios. Specialists are reviewed for voice consistency during the first 30 days, and you can provide feedback at any time.",
  },
  {
    question: "Do you offer 24/7 coverage?",
    answer:
      "Yes. We staff across multiple time zones to cover your hours — including nights and weekends for e-commerce clients who need continuous coverage.",
  },
  {
    question: "How do you handle escalations?",
    answer:
      "We define your escalation matrix during onboarding. Any ticket requiring authority above your specialist's scope is flagged immediately via your preferred channel — Slack, email, or a ticketing tag.",
  },
  {
    question: "What if the specialist isn't working out?",
    answer:
      "Guaranteed service. We'll find a better match at no cost, typically within 5 business days.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Customer Support Specialist | NorthOak",
    description:
      "Trained customer support specialists who handle email, chat, and phone tickets in Zendesk, Gorgias, Intercom, and Help Scout — 24/7 coverage at a fraction of domestic cost.",
    path: "/roles/customer-support",
  }),
  serviceSchema({
    name: "Customer Support",
    description:
      "Dedicated customer support specialists handling email, live chat, phone, ticket management, and knowledge base maintenance.",
    path: "/roles/customer-support",
    serviceType: "Customer Support",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Customer Support", path: "/roles/customer-support" },
  ]),
  faqSchema(faqs),
];

const CustomerSupport = () => {
  return (
    <RolePageLayout
      icon={HeadphonesIcon}
      title="Customer Support"
      subtitle="World-Class Service"
      description="Provide excellent service over email, chat, and phone at every step in the customer journey with our trained support specialists."
      benefits={[
        "24/7 customer support coverage",
        "Multichannel support (email, chat, phone, social)",
        "Reduce average response time by 70%",
        "Improve customer satisfaction scores",
        "Scale support during peak seasons effortlessly",
      ]}
      tasks={[
        {
          title: "Email Support",
          description:
            "Respond to customer inquiries, resolve issues, and maintain your brand voice across all email communications.",
        },
        {
          title: "Live Chat",
          description:
            "Provide real-time assistance to website visitors and customers through chat platforms.",
        },
        {
          title: "Phone Support",
          description:
            "Handle inbound calls, resolve complex issues, and provide personalized customer service.",
        },
        {
          title: "Ticket Management",
          description:
            "Organize, prioritize, and track support tickets to ensure timely resolution.",
        },
        {
          title: "Knowledge Base",
          description:
            "Create and maintain help articles, FAQs, and self-service resources for customers.",
        },
        {
          title: "Escalation Handling",
          description:
            "Manage escalated issues with care, coordinate with internal teams, and ensure customer satisfaction.",
        },
      ]}
      stats={[
        { value: "4.8/5", label: "Average CSAT score" },
        { value: "<2min", label: "First response time" },
        { value: "95%", label: "First contact resolution" },
        { value: "60%", label: "Cost savings" },
      ]}
      tldr="NorthOak customer support specialists handle email, live chat, and phone tickets in Zendesk, Gorgias, or Intercom — with sub-2-minute first response times and 24/7 availability. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Zendesk",
        "Gorgias",
        "Intercom",
        "Freshdesk",
        "Help Scout",
        "Front",
        "Shopify",
        "Klaviyo",
        "Slack",
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
          domestic: "$6,000 – $12,000 one-time",
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

export default CustomerSupport;
