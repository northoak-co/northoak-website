import { Headphones } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import customerSupportImg from "@/assets/characters/customer-support.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What does a NorthOak CSM own?",
    answer:
      "Onboarding new customers, conducting regular health checks and QBRs, tracking product adoption and engagement, proactively flagging churn risk, and identifying expansion opportunities. Scope is adjusted to your customer segment and existing team structure.",
  },
  {
    question: "Can a NorthOak CSM own expansion revenue?",
    answer:
      "Yes — many of our CSMs are comfortable with expansion conversations and upsell motions. We'll scope this during intake and match you with a specialist who has proven expansion track records if that's a priority.",
  },
  {
    question: "What tools do they work in?",
    answer:
      "Gainsight, ChurnZero, Totango, HubSpot, Salesforce, Intercom, and Zoom are the most common. We'll confirm your stack during intake.",
  },
  {
    question: "How do they handle at-risk accounts?",
    answer:
      "They monitor health scores and engagement signals daily, trigger proactive outreach when accounts show early churn indicators, and escalate to your leadership when an account requires executive involvement.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Customer Success Manager | NorthOak",
    description:
      "Dedicated customer success managers to reduce churn, drive adoption, and expand revenue across your customer base.",
    path: "/roles/customer-success-manager",
  }),
  serviceSchema({
    name: "Customer Success Manager",
    description:
      "Dedicated customer success managers handling onboarding, health monitoring, QBRs, churn prevention, and expansion revenue.",
    path: "/roles/customer-success-manager",
    serviceType: "Customer Success Management",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Customer Success Manager", path: "/roles/customer-success-manager" },
  ]),
  faqSchema(faqs),
];

const CustomerSuccessManager = () => {
  return (
    <RolePageLayout
      icon={Headphones}
      image={customerSupportImg}
      title="Customer Success Manager"
      subtitle="Customer Support and Client Success"
      description="Reduce churn, drive product adoption, and grow existing accounts with a dedicated CSM who owns customer relationships from onboarding to renewal."
      benefits={[
        "Proactive churn prevention before accounts go dark",
        "Higher NRR through structured expansion motions",
        "Faster time-to-value for newly onboarded customers",
        "Health score monitoring across your entire book of business",
        "65%+ cost savings vs. a domestic CSM hire",
      ]}
      tasks={[
        {
          title: "Customer Onboarding",
          description:
            "Lead structured onboarding programs for new customers — kickoff calls, setup coordination, training delivery, and milestone tracking to drive time-to-value.",
        },
        {
          title: "Health Score Monitoring",
          description:
            "Track product usage, engagement signals, and support ticket trends to identify healthy accounts and flag at-risk customers before they churn.",
        },
        {
          title: "Quarterly Business Reviews",
          description:
            "Prepare and run QBRs with key stakeholders — covering ROI achieved, roadmap alignment, and next-quarter success plans.",
        },
        {
          title: "Churn Risk Management",
          description:
            "Execute early intervention playbooks for at-risk accounts — proactive outreach, executive escalation, and remediation plans to retain at-risk ARR.",
        },
        {
          title: "Expansion and Upsell",
          description:
            "Identify expansion opportunities within existing accounts, introduce upsell conversations at the right time, and coordinate handoffs to your AE team.",
        },
        {
          title: "Renewal Management",
          description:
            "Track renewal dates 90 days out, conduct value reviews ahead of renewal, and manage the renewal process to minimize contraction and churn.",
        },
      ]}
      stats={[
        { value: "65%", label: "Cost savings vs. domestic" },
        { value: "25%", label: "Churn reduction" },
        { value: "120%+", label: "NRR targets achieved" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak CSMs own customer onboarding, health monitoring, QBRs, churn prevention, and expansion — protecting your ARR and growing it. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Gainsight",
        "ChurnZero",
        "Totango",
        "HubSpot",
        "Salesforce",
        "Intercom",
        "Zoom",
        "Slack",
        "Notion",
        "Google Workspace",
        "Looker",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$7,000 – $11,000",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$10,000 – $17,000 one-time",
          northoak: "None",
        },
        {
          label: "Time to first day",
          domestic: "5 – 9 weeks",
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

export default CustomerSuccessManager;
