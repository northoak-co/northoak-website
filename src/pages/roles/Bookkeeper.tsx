import { PiggyBank } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What accounting platforms do your bookkeepers work in?",
    answer:
      "QuickBooks Online, Xero, NetSuite, and FreshBooks are the most common. For clients on Wave or Sage, we can accommodate with a brief ramp period.",
  },
  {
    question: "Can a NorthOak bookkeeper handle month-end close?",
    answer:
      "Yes — our bookkeepers own the full bookkeeping close cycle: transaction categorization, bank and credit card reconciliation, AP/AR management, and generating financial statements for your review and approval.",
  },
  {
    question: "Do they replace my CPA or accountant?",
    answer:
      "No — they complement your CPA. Our bookkeepers handle the day-to-day transaction layer so your accountant receives organized, reconciled books at tax time rather than a year of cleanup.",
  },
  {
    question: "How do you handle access to our financial accounts?",
    answer:
      "Specialists receive the minimum access required — typically read/write in your accounting software and bank read access for reconciliation. All specialists sign NDAs and data security agreements before starting.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Bookkeeper | NorthOak",
    description:
      "Dedicated bookkeepers for QuickBooks, Xero, and NetSuite — transaction categorization, bank reconciliation, monthly close, and accurate financial records.",
    path: "/roles/bookkeeper",
  }),
  serviceSchema({
    name: "Bookkeeper",
    description:
      "Dedicated bookkeepers handling transaction categorization, bank reconciliation, accounts payable and receivable, month-end close, and financial statement preparation.",
    path: "/roles/bookkeeper",
    serviceType: "Bookkeeping",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Bookkeeper", path: "/roles/bookkeeper" },
  ]),
  faqSchema(faqs),
];

const Bookkeeper = () => {
  return (
    <RolePageLayout
      icon={PiggyBank}
      title="Bookkeeper"
      subtitle="Finance and Accounting"
      description="Keep your books accurate, current, and audit-ready with a dedicated bookkeeper who owns your financial records from daily transactions through monthly close."
      benefits={[
        "Books that are always current — not weeks behind",
        "Month-end close completed faster and with less firefighting",
        "CPA receives organized, reconciled records at tax time",
        "Real-time visibility into cash position and expenses",
        "60%+ cost savings vs. a domestic bookkeeper",
      ]}
      tasks={[
        {
          title: "Transaction Categorization",
          description:
            "Categorize all bank and credit card transactions daily or weekly, following your chart of accounts and ensuring consistent coding across periods.",
        },
        {
          title: "Bank and Credit Card Reconciliation",
          description:
            "Reconcile all accounts monthly, identify discrepancies, investigate outstanding items, and ensure balance sheet accounts match bank statements.",
        },
        {
          title: "Accounts Payable",
          description:
            "Process vendor invoices, track due dates, prepare payment runs, and maintain accurate vendor records and aging reports.",
        },
        {
          title: "Accounts Receivable",
          description:
            "Issue customer invoices, track outstanding receivables, send payment reminders, and reconcile payments received against open invoices.",
        },
        {
          title: "Month-End Close",
          description:
            "Execute the monthly close checklist — journal entries, depreciation, accruals, and reconciliations — delivering financial statements by your target close date.",
        },
        {
          title: "Financial Statement Preparation",
          description:
            "Generate P&L, balance sheet, and cash flow statements for management review — formatted to your preferences and ready for leadership reporting.",
        },
      ]}
      stats={[
        { value: "99.9%", label: "Reconciliation accuracy" },
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "5 days", label: "Faster monthly close" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Bookkeepers own daily transaction categorization, bank reconciliation, AP/AR management, and monthly close — keeping your books accurate so your CPA and leadership have numbers they can trust. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "QuickBooks Online",
        "Xero",
        "NetSuite",
        "FreshBooks",
        "Bill.com",
        "Expensify",
        "Stripe",
        "Ramp",
        "Excel",
        "Google Sheets",
        "Slack",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$5,000 – $8,000",
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

export default Bookkeeper;
