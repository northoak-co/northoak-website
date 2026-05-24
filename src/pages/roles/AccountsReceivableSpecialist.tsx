import { PiggyBank } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import financeAccountingImg from "@/assets/characters/finance-accounting.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "Can a NorthOak AR Specialist handle customer collections?",
    answer:
      "Yes — they manage the full collections cycle: sending invoices, following up on outstanding balances, sending payment reminders at defined intervals, and escalating chronic non-payers to your internal team or collections agency as defined in your policy.",
  },
  {
    question: "What billing platforms do they work in?",
    answer:
      "QuickBooks Online, Xero, NetSuite, FreshBooks, Stripe Billing, and Chargebee are the most common. We'll confirm your platform during intake.",
  },
  {
    question: "Can they handle subscription and recurring billing?",
    answer:
      "Yes — including subscription upgrades, downgrades, proration calculations, failed payment recovery, and dunning management.",
  },
  {
    question: "How do they handle disputes from customers?",
    answer:
      "They investigate billing discrepancies, communicate professionally with customers to resolve disputes, issue credit memos when warranted, and escalate complex cases to your finance lead.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire an Accounts Receivable Specialist | NorthOak",
    description:
      "Dedicated accounts receivable specialists for invoicing, collections, cash application, and AR reporting. Reduce DSO and improve cash flow.",
    path: "/roles/accounts-receivable-specialist",
  }),
  serviceSchema({
    name: "Accounts Receivable Specialist",
    description:
      "Dedicated accounts receivable specialists handling invoicing, collections, cash application, dispute resolution, and AR reporting.",
    path: "/roles/accounts-receivable-specialist",
    serviceType: "Accounts Receivable",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Accounts Receivable Specialist", path: "/roles/accounts-receivable-specialist" },
  ]),
  faqSchema(faqs),
];

const AccountsReceivableSpecialist = () => {
  return (
    <RolePageLayout
      icon={PiggyBank}
      image={financeAccountingImg}
      title="Accounts Receivable Specialist"
      subtitle="Finance and Accounting"
      description="Reduce days sales outstanding and improve cash flow with a dedicated AR specialist who handles invoicing, collections, and cash application end-to-end."
      benefits={[
        "Faster collections that improve cash flow and reduce DSO",
        "Invoices sent accurately and on time, every billing cycle",
        "Customer disputes resolved professionally and promptly",
        "AR aging kept current so leadership always knows what's owed",
        "60%+ cost savings vs. a domestic AR specialist",
      ]}
      tasks={[
        {
          title: "Invoice Generation and Delivery",
          description:
            "Create and send accurate invoices on your billing schedule — per milestone, per project, or recurring — with correct terms and payment instructions.",
        },
        {
          title: "Collections and Follow-Up",
          description:
            "Execute a structured collections cadence — payment reminders at 7, 14, and 30 days past due — maintaining professional customer relationships while recovering outstanding balances.",
        },
        {
          title: "Cash Application",
          description:
            "Match incoming payments to open invoices accurately, resolve unapplied cash, and maintain a clean AR subledger that reflects actual outstanding balances.",
        },
        {
          title: "Dispute Resolution",
          description:
            "Investigate billing discrepancies, communicate with customers to resolve disputes, issue credit memos when appropriate, and escalate unresolved cases.",
        },
        {
          title: "AR Aging Reports",
          description:
            "Prepare and distribute weekly AR aging reports, flag accounts approaching collections thresholds, and provide commentary on material outstanding balances.",
        },
        {
          title: "Customer Account Maintenance",
          description:
            "Set up new customer billing records, update payment terms, manage credit holds, and maintain accurate billing contact information.",
        },
      ]}
      stats={[
        { value: "30%", label: "DSO reduction" },
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "99%", label: "Invoice accuracy rate" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak AR Specialists own invoicing, collections follow-up, cash application, and dispute resolution — reducing your DSO and improving cash flow without the domestic overhead. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "QuickBooks Online",
        "Xero",
        "NetSuite",
        "FreshBooks",
        "Stripe Billing",
        "Chargebee",
        "Bill.com",
        "Chaser",
        "Excel",
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

export default AccountsReceivableSpecialist;
