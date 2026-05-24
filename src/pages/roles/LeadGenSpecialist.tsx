import { TrendingUp } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What does a Lead Generation Specialist do differently from an SDR?",
    answer:
      "A Lead Gen Specialist focuses on the top of the funnel: building prospect lists, researching target accounts, enriching contact data, and setting up outreach infrastructure. An SDR executes the outreach and books meetings. Many clients use both — or start with a Lead Gen Specialist to build pipeline capacity.",
  },
  {
    question: "How do they source leads — do they buy lists?",
    answer:
      "No bulk list purchases. Our specialists use LinkedIn Sales Navigator, Apollo, ZoomInfo, and similar tools to build targeted, verified contact lists matched to your ICP. All contacts are validated for accuracy before being loaded into your CRM.",
  },
  {
    question: "Can they run LinkedIn outreach campaigns?",
    answer:
      "Yes — including Sales Navigator searches, connection request campaigns, and InMail outreach. They follow LinkedIn's terms of service and best practices to protect your account health.",
  },
  {
    question: "How many leads can they generate per month?",
    answer:
      "Output depends on your ICP complexity and the tools available, but a typical Lead Gen Specialist delivers 300–600 qualified, verified contacts per month alongside enriched data and campaign setup.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Lead Generation Specialist | NorthOak",
    description:
      "Dedicated lead generation specialists who build prospect lists, enrich contact data, and keep your outbound pipeline stocked with qualified leads.",
    path: "/roles/lead-generation-specialist",
  }),
  serviceSchema({
    name: "Lead Generation Specialist",
    description:
      "Dedicated lead generation specialists for prospect research, contact list building, data enrichment, ICP targeting, and outbound campaign setup.",
    path: "/roles/lead-generation-specialist",
    serviceType: "Lead Generation",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Lead Generation Specialist", path: "/roles/lead-generation-specialist" },
  ]),
  faqSchema(faqs),
];

const LeadGenSpecialist = () => {
  return (
    <RolePageLayout
      icon={TrendingUp}
      title="Lead Generation Specialist"
      subtitle="Sales and Go-to-Market"
      description="Keep your outbound pipeline stocked with a dedicated specialist who researches, builds, and enriches targeted prospect lists matched to your ICP."
      benefits={[
        "300–600 verified contacts delivered every month",
        "ICP-matched lists your sales team actually wants to call",
        "CRM loaded with clean, enriched, deduplicated records",
        "LinkedIn and email outreach campaigns set up and ready",
        "60%+ cost savings vs. a domestic demand gen coordinator",
      ]}
      tasks={[
        {
          title: "Prospect List Building",
          description:
            "Research and compile targeted contact lists using LinkedIn Sales Navigator, Apollo, and ZoomInfo — filtered by industry, company size, title, and geography to match your ICP.",
        },
        {
          title: "Contact Data Enrichment",
          description:
            "Verify and enrich existing contacts with accurate emails, phone numbers, job titles, and firmographic data to improve deliverability and personalization.",
        },
        {
          title: "ICP and TAM Research",
          description:
            "Map your total addressable market, segment it by priority tier, and build account-level research to guide targeting strategy.",
        },
        {
          title: "LinkedIn Outreach Campaigns",
          description:
            "Set up and manage LinkedIn connection and InMail campaigns — personalized, sequenced, and tracked against reply and acceptance rate goals.",
        },
        {
          title: "CRM Data Loading",
          description:
            "Import and deduplicate prospect records into Salesforce or HubSpot with complete, properly formatted fields and appropriate lead source tagging.",
        },
        {
          title: "Campaign Performance Tracking",
          description:
            "Track open rates, reply rates, and conversion metrics across outbound campaigns and report weekly on what's working and what needs adjustment.",
        },
      ]}
      stats={[
        { value: "500+", label: "Verified leads/month" },
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "98%", label: "Data accuracy rate" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Lead Gen Specialists build ICP-matched prospect lists, enrich contact data, run LinkedIn campaigns, and load clean records into your CRM — giving your SDRs a full, qualified pipeline to work from. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "LinkedIn Sales Navigator",
        "Apollo",
        "ZoomInfo",
        "Hunter.io",
        "Clearbit",
        "Salesforce",
        "HubSpot",
        "Lusha",
        "Phantombuster",
        "Google Sheets",
        "Slack",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$5,000 – $7,500",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$7,000 – $12,000 one-time",
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

export default LeadGenSpecialist;
