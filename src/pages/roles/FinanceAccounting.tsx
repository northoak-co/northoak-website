import { PiggyBank } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import financeAccountingImg from "@/assets/characters/finance-accounting.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What accounting platforms do your specialists support?",
    answer:
      "QuickBooks Online, Xero, NetSuite, and FreshBooks. Our specialists are also proficient in Bill.com, Expensify, and Stripe for AP/AR and payments workflows.",
  },
  {
    question: "Can a NorthOak bookkeeper handle my month-end close?",
    answer:
      "Yes — our finance specialists can own the full bookkeeping cycle: transaction categorization, bank and credit card reconciliation, AP/AR management, and generating monthly financial statements for your review.",
  },
  {
    question: "Do your specialists replace my accountant or CPA?",
    answer:
      "No — they complement them. NorthOak handles day-to-day bookkeeping and data organization so your CPA can focus on advisory, tax planning, and filings rather than cleanup.",
  },
  {
    question: "How do you handle access to our financial accounts?",
    answer:
      "Specialists are given the minimum access required for their scope — typically read/write in your accounting software and view access in your bank for reconciliation. All specialists sign NDAs and a data security agreement before starting.",
  },
  {
    question: "What if the match isn't right?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Bookkeeper or Finance Specialist | NorthOak",
    description:
      "Vetted bookkeepers and finance specialists for QuickBooks, Xero, and NetSuite — bookkeeping, AP/AR, financial reporting, and expense management.",
    path: "/roles/finance-accounting",
  }),
  serviceSchema({
    name: "Finance & Accounting",
    description:
      "Dedicated finance and accounting specialists for bookkeeping, accounts payable, accounts receivable, financial reporting, expense management, and tax prep support.",
    path: "/roles/finance-accounting",
    serviceType: "Bookkeeping and Accounting",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Finance & Accounting", path: "/roles/finance-accounting" },
  ]),
  faqSchema(faqs),
];

const FinanceAccounting = () => {
  return (
    <RolePageLayout
      icon={PiggyBank}
      image={financeAccountingImg}
      title="Finance & Accounting"
      subtitle="Financial Operations"
      description="Feel confident in your financial operations with expert bookkeeping and accounting services that keep your books accurate."
      benefits={[
        "Accurate and timely financial reporting",
        "Reduce bookkeeping costs by up to 60%",
        "Stay compliant with financial regulations",
        "Real-time visibility into cash flow",
        "Scale financial operations as you grow",
      ]}
      tasks={[
        {
          title: "Bookkeeping",
          description:
            "Record transactions, reconcile accounts, and maintain accurate financial records.",
        },
        {
          title: "Accounts Payable",
          description:
            "Process invoices, manage vendor payments, and track outstanding payables.",
        },
        {
          title: "Accounts Receivable",
          description:
            "Send invoices, track payments, and manage collections for outstanding receivables.",
        },
        {
          title: "Financial Reporting",
          description:
            "Prepare monthly, quarterly, and annual financial statements and reports.",
        },
        {
          title: "Expense Management",
          description:
            "Track expenses, categorize spending, and prepare expense reports for the team.",
        },
        {
          title: "Tax Preparation Support",
          description:
            "Organize documents, prepare schedules, and assist with tax filing requirements.",
        },
      ]}
      stats={[
        { value: "99.9%", label: "Accuracy rate" },
        { value: "60%", label: "Cost reduction" },
        { value: "5 days", label: "Faster close" },
        { value: "100%", label: "Audit ready" },
      ]}
      tldr="NorthOak finance specialists handle bookkeeping, accounts payable, accounts receivable, monthly close support, and expense management in QuickBooks, Xero, or NetSuite — keeping your books accurate and audit-ready. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "QuickBooks",
        "Xero",
        "NetSuite",
        "FreshBooks",
        "Bill.com",
        "Expensify",
        "Stripe",
        "Shopify",
        "Excel",
        "Google Sheets",
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
          domestic: "$7,000 – $14,000 one-time",
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

export default FinanceAccounting;
