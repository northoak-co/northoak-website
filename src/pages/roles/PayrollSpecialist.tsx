import { PiggyBank } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import financeAccountingImg from "@/assets/characters/finance-accounting.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What payroll platforms do your specialists work in?",
    answer:
      "Gusto, ADP, Paychex, Rippling, Deel, and QuickBooks Payroll are the most common. For enterprise clients on Workday or SAP, we can match specialists with the relevant background.",
  },
  {
    question: "Can a NorthOak Payroll Specialist run payroll independently?",
    answer:
      "They prepare and validate every payroll run — timesheet consolidation, adjustments, deductions, and final calculations — for your approval. Final payroll authorization stays with your internal controller or finance lead, which is standard compliance practice.",
  },
  {
    question: "Can they handle multi-state payroll?",
    answer:
      "Yes — our specialists are experienced with multi-state payroll compliance: state tax registrations, varying withholding requirements, and jurisdiction-specific rules. For international payroll, we work with Deel and Rippling.",
  },
  {
    question: "Do they handle year-end W-2 and 1099 processing?",
    answer:
      "Yes — they manage year-end prep including W-2 and 1099 distribution, ensuring all required forms are filed accurately and on time.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Payroll Specialist | NorthOak",
    description:
      "Dedicated payroll specialists for accurate, on-time payroll processing — multi-state, contractor, and full-time employee payroll in Gusto, ADP, Rippling, and more.",
    path: "/roles/payroll-specialist",
  }),
  serviceSchema({
    name: "Payroll Specialist",
    description:
      "Dedicated payroll specialists handling payroll processing, timesheet consolidation, tax compliance, benefits deductions, and year-end W-2 and 1099 preparation.",
    path: "/roles/payroll-specialist",
    serviceType: "Payroll Processing",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Payroll Specialist", path: "/roles/payroll-specialist" },
  ]),
  faqSchema(faqs),
];

const PayrollSpecialist = () => {
  return (
    <RolePageLayout
      icon={PiggyBank}
      image={financeAccountingImg}
      title="Payroll Specialist"
      subtitle="Finance and Accounting"
      description="Ensure every employee is paid accurately and on time with a dedicated payroll specialist who owns your entire payroll cycle — from timesheet to disbursement."
      benefits={[
        "Zero payroll errors — employees paid accurately every cycle",
        "Multi-state and contractor payroll handled without compliance risk",
        "Year-end W-2 and 1099 prep completed on schedule",
        "Payroll questions answered before they become complaints",
        "60%+ cost savings vs. a domestic payroll specialist",
      ]}
      tasks={[
        {
          title: "Payroll Processing",
          description:
            "Run bi-weekly or monthly payroll — consolidating timesheets, processing adjustments, applying deductions, and submitting for controller review and approval.",
        },
        {
          title: "Timesheet and Attendance Consolidation",
          description:
            "Collect and validate timesheets from managers and employees, resolve discrepancies, and prepare accurate payroll inputs before each cycle.",
        },
        {
          title: "Benefits and Deduction Management",
          description:
            "Apply health insurance, 401(k), HSA, and other benefit deductions accurately each cycle, and update deduction amounts when benefits change.",
        },
        {
          title: "Multi-State Tax Compliance",
          description:
            "Manage state and local tax withholdings across jurisdictions, maintain compliance with varying payroll tax requirements, and coordinate registration with new states.",
        },
        {
          title: "Contractor and 1099 Management",
          description:
            "Track contractor payments, collect W-9s, manage payment schedules, and prepare 1099-NEC forms accurately at year-end.",
        },
        {
          title: "Year-End Payroll Reporting",
          description:
            "Prepare and distribute W-2s, file required payroll tax forms, and reconcile annual payroll registers for your CPA and auditors.",
        },
      ]}
      stats={[
        { value: "99.9%", label: "Payroll accuracy rate" },
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "100%", label: "On-time pay runs" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Payroll Specialists own payroll processing, timesheet consolidation, tax compliance, benefits deductions, and year-end prep — so your employees are paid accurately and on time, every cycle. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Gusto",
        "ADP",
        "Paychex",
        "Rippling",
        "Deel",
        "QuickBooks Payroll",
        "BambooHR",
        "Workday",
        "Excel",
        "Google Sheets",
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
          domestic: "$7,000 – $13,000 one-time",
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

export default PayrollSpecialist;
