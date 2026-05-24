import { PiggyBank } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What AP platforms do your specialists work in?",
    answer:
      "Bill.com, QuickBooks Online, Xero, NetSuite, and SAP Concur are the most common. If your company uses a less common ERP, tell us during intake and we'll confirm our specialists' familiarity.",
  },
  {
    question: "Can they own vendor payment runs?",
    answer:
      "Yes — they can prepare payment runs for your review and approval. Final payment authorization stays with your internal finance lead or controller, which is standard practice regardless of outsourcing.",
  },
  {
    question: "How do they handle vendor disputes?",
    answer:
      "Our AP Specialists are trained to research discrepancies between purchase orders, receipts, and invoices. They communicate professionally with vendors to resolve billing disputes and escalate to your finance team when needed.",
  },
  {
    question: "Can they enforce an approval workflow?",
    answer:
      "Yes — they can manage a defined PO or invoice approval workflow, routing invoices to the appropriate approver, tracking outstanding approvals, and following up to prevent payment delays.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire an Accounts Payable Specialist | NorthOak",
    description:
      "Dedicated accounts payable specialists for invoice processing, vendor management, payment runs, and AP reconciliation. Accurate and on time, every cycle.",
    path: "/roles/accounts-payable-specialist",
  }),
  serviceSchema({
    name: "Accounts Payable Specialist",
    description:
      "Dedicated accounts payable specialists handling invoice processing, vendor management, payment run preparation, three-way matching, and AP reconciliation.",
    path: "/roles/accounts-payable-specialist",
    serviceType: "Accounts Payable",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Accounts Payable Specialist", path: "/roles/accounts-payable-specialist" },
  ]),
  faqSchema(faqs),
];

const AccountsPayableSpecialist = () => {
  return (
    <RolePageLayout
      icon={PiggyBank}
      title="Accounts Payable Specialist"
      subtitle="Finance and Accounting"
      description="Eliminate late payments, vendor disputes, and AP backlogs with a dedicated specialist who owns your entire payables cycle from invoice to reconciliation."
      benefits={[
        "Vendors paid accurately and on schedule, every cycle",
        "Three-way matching catches errors before they become disputes",
        "AP aging always current so cash flow forecasting is reliable",
        "Approval workflows enforced without involving your controller",
        "60%+ cost savings vs. a domestic AP specialist",
      ]}
      tasks={[
        {
          title: "Invoice Processing and Coding",
          description:
            "Receive, review, and code incoming invoices against purchase orders and general ledger accounts — catching discrepancies before they reach payment.",
        },
        {
          title: "Three-Way Matching",
          description:
            "Match invoices to purchase orders and delivery receipts to verify accuracy before approving for payment — reducing overpayments and billing errors.",
        },
        {
          title: "Vendor Management",
          description:
            "Maintain accurate vendor records, manage W-9 collection, handle vendor inquiries, and resolve billing disputes through professional communication.",
        },
        {
          title: "Payment Run Preparation",
          description:
            "Prepare weekly or bi-weekly payment runs — prioritized by due date and cash position — for your controller's review and authorization.",
        },
        {
          title: "AP Aging and Reporting",
          description:
            "Maintain and report on accounts payable aging, flag overdue items, and provide weekly AP status reports to your finance team.",
        },
        {
          title: "AP Reconciliation",
          description:
            "Reconcile AP subledger to the general ledger monthly, resolve variances, and ensure the books reflect accurate outstanding payables.",
        },
      ]}
      stats={[
        { value: "99%", label: "On-time payment rate" },
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "Zero", label: "Duplicate payments" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak AP Specialists own invoice processing, three-way matching, vendor management, and payment run preparation — keeping your payables accurate and on time without the domestic overhead. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Bill.com",
        "QuickBooks Online",
        "Xero",
        "NetSuite",
        "SAP Concur",
        "Ramp",
        "Brex",
        "Expensify",
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

export default AccountsPayableSpecialist;
