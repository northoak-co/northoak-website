import { ClipboardList } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import hrAdminImg from "@/assets/characters/hr-admin.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What HR systems do your specialists work in?",
    answer:
      "Our HR admins are proficient in Gusto, BambooHR, Rippling, Workday, and ADP for payroll and HR management, and Greenhouse or Lever for recruitment coordination. We can adapt to your stack.",
  },
  {
    question: "Can a NorthOak HR admin process payroll?",
    answer:
      "Yes — under your review and approval. Our specialists handle payroll prep, timesheet consolidation, and data entry. Final approval stays with your internal team or accountant, which is standard practice regardless of whether you outsource.",
  },
  {
    question: "Are your HR admins familiar with US employment law?",
    answer:
      "Our specialists are trained on compliance best practices for the markets you operate in. For complex legal questions such as terminations or regulatory filings, we work alongside your counsel or HR lead rather than replacing them.",
  },
  {
    question: "How do you handle sensitive employee data?",
    answer:
      "All specialists sign NDAs covering confidential data before day one. Access is scoped to only the systems and data required for their role.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no additional cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire an HR Admin | NorthOak",
    description:
      "Expert HR admins for payroll processing, recruitment support, onboarding, benefits administration, and HR documentation. Reduce HR overhead by 80%.",
    path: "/roles/hr-admin",
  }),
  serviceSchema({
    name: "HR Administration",
    description:
      "Dedicated HR admins handling payroll, recruitment, onboarding, benefits administration, time and attendance, and HR documentation.",
    path: "/roles/hr-admin",
    serviceType: "Human Resources Administration",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "HR Admin", path: "/roles/hr-admin" },
  ]),
  faqSchema(faqs),
];

const HRAdmin = () => {
  return (
    <RolePageLayout
      icon={ClipboardList}
      image={hrAdminImg}
      title="HR Admin"
      subtitle="Human Resources Administration"
      description="Streamline your HR workflows with expert payroll, recruitment, and administrative services that keep your team running smoothly."
      benefits={[
        "Reduce HR administrative burden by 80%",
        "Ensure compliance with employment regulations",
        "Faster time-to-hire with dedicated recruiters",
        "Accurate and timely payroll processing",
        "Improved employee experience and onboarding",
      ]}
      tasks={[
        {
          title: "Payroll Processing",
          description:
            "Manage payroll calculations, deductions, and ensure timely payments for all employees.",
        },
        {
          title: "Recruitment Support",
          description:
            "Source candidates, screen resumes, schedule interviews, and coordinate the hiring process.",
        },
        {
          title: "Employee Onboarding",
          description:
            "Handle paperwork, system setup, and orientation scheduling for new hires.",
        },
        {
          title: "Benefits Administration",
          description:
            "Manage employee benefits enrollment, changes, and answer benefits-related questions.",
        },
        {
          title: "Time & Attendance",
          description:
            "Track employee hours, manage PTO requests, and maintain accurate attendance records.",
        },
        {
          title: "HR Documentation",
          description:
            "Maintain employee files, update policies, and ensure proper record-keeping.",
        },
      ]}
      stats={[
        { value: "80%", label: "Admin time saved" },
        { value: "99.9%", label: "Payroll accuracy" },
        { value: "2x", label: "Faster hiring" },
        { value: "100%", label: "Compliance rate" },
      ]}
      tldr="NorthOak HR admins handle payroll processing, recruitment coordination, onboarding logistics, and benefits administration — so your internal HR team can focus on people strategy instead of paperwork. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Gusto",
        "BambooHR",
        "Rippling",
        "Workday",
        "ADP",
        "Greenhouse",
        "Lever",
        "Slack",
        "Google Workspace",
        "Notion",
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

export default HRAdmin;
