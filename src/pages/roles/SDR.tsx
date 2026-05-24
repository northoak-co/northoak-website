import { TrendingUp } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import crmManagementImg from "@/assets/characters/crm-management.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What does a NorthOak SDR do each day?",
    answer:
      "They prospect new accounts via LinkedIn and email, qualify inbound leads against your ICP, execute outbound sequences in your sales engagement tool, log all activity in your CRM, and hand off qualified opportunities to your AEs with detailed call notes and context.",
  },
  {
    question: "Will they sound native-English on cold calls?",
    answer:
      "Yes — all our SDRs are selected for strong written and spoken English. We match communication style to your brand voice during onboarding, and you can listen to recorded discovery calls before they go live.",
  },
  {
    question: "How long does ramp-up take?",
    answer:
      "Most SDRs are fully productive within 2–3 weeks. Week one is onboarding your product, ICP, and messaging. Week two they're executing sequences. By week three they're booking qualified meetings.",
  },
  {
    question: "What tools do they work in?",
    answer:
      "Salesforce, HubSpot, or your existing CRM — plus Outreach, Apollo, Salesloft, ZoomInfo, and LinkedIn Sales Navigator. If you use something else, tell us during intake and we'll confirm compatibility.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Sales Development Representative (SDR) | NorthOak",
    description:
      "Dedicated SDRs for outbound prospecting, lead qualification, and meeting booking. Fill your pipeline at a fraction of the cost of a domestic hire.",
    path: "/roles/sdr",
  }),
  serviceSchema({
    name: "Sales Development Representative",
    description:
      "Dedicated SDRs handling outbound prospecting, cold outreach, lead qualification, and meeting booking to fill your sales pipeline.",
    path: "/roles/sdr",
    serviceType: "Sales Development",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Sales Development Representative", path: "/roles/sdr" },
  ]),
  faqSchema(faqs),
];

const SDR = () => {
  return (
    <RolePageLayout
      icon={TrendingUp}
      image={crmManagementImg}
      title="Sales Development Representative"
      subtitle="Sales and Go-to-Market"
      description="Keep your pipeline full with a dedicated SDR who prospects, qualifies leads, and books meetings for your account executives — without the domestic hiring overhead."
      benefits={[
        "Fill your pipeline with qualified meetings consistently",
        "Cut SDR cost by up to 65% vs. a domestic hire",
        "Ramp in 2–3 weeks, not 2–3 months",
        "Expand outreach capacity without adding headcount risk",
        "Keep CRM records clean and activity logged daily",
      ]}
      tasks={[
        {
          title: "Outbound Prospecting",
          description:
            "Research and build targeted prospect lists using LinkedIn Sales Navigator, ZoomInfo, and Apollo — matched to your ideal customer profile.",
        },
        {
          title: "Cold Outreach Sequences",
          description:
            "Execute multi-touch email and LinkedIn sequences in Outreach or Salesloft, personalizing messaging at scale to maximize reply rates.",
        },
        {
          title: "Inbound Lead Qualification",
          description:
            "Follow up with inbound leads within minutes, qualify against your BANT or MEDDIC criteria, and prioritize high-fit opportunities for AEs.",
        },
        {
          title: "Discovery Calls",
          description:
            "Conduct first-touch discovery calls to surface pain points, confirm budget and timeline, and deliver warm handoffs to your closing team.",
        },
        {
          title: "CRM Hygiene",
          description:
            "Log all activity, update contact and deal records, and ensure your pipeline data stays accurate and actionable in Salesforce or HubSpot.",
        },
        {
          title: "Meeting Booking and Coordination",
          description:
            "Schedule qualified meetings directly onto AE calendars, send confirmation emails, and brief reps with call prep notes before every meeting.",
        },
      ]}
      stats={[
        { value: "65%", label: "Cost savings vs. domestic" },
        { value: "2–3 wks", label: "Average ramp time" },
        { value: "3×", label: "More outreach capacity" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak SDRs handle outbound prospecting, email and LinkedIn sequences, inbound qualification, and meeting booking — so your AEs spend time closing, not hunting. Dedicated to your account. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Salesforce",
        "HubSpot",
        "Outreach",
        "Salesloft",
        "Apollo",
        "ZoomInfo",
        "LinkedIn Sales Navigator",
        "Gong",
        "Calendly",
        "Slack",
        "Google Workspace",
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
          domestic: "$8,000 – $14,000 one-time",
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

export default SDR;
