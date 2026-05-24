import { Users } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What HR systems do your coordinators work in?",
    answer:
      "Gusto, BambooHR, Rippling, Workday, ADP, and Deel for HR data and payroll. For recruiting coordination, we work in Greenhouse, Lever, Workable, and most common ATS platforms.",
  },
  {
    question: "Can an HR Coordinator handle sensitive employee data?",
    answer:
      "Yes — with appropriate access controls. All specialists sign NDAs covering confidential data before day one, and access is scoped to the minimum required for their role. Employee personal data is handled with strict confidentiality.",
  },
  {
    question: "Can they handle HR for a fully remote team?",
    answer:
      "Absolutely. Our HR Coordinators are experienced with distributed teams, multi-timezone scheduling, digital onboarding workflows, and remote compliance considerations.",
  },
  {
    question: "Do they replace a Head of HR or People Ops?",
    answer:
      "No — they handle the administrative and coordination layer so your HR lead can focus on people strategy, culture, and organizational design. For lean startups without a Head of HR, they can handle the operational side while leadership handles strategy.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire an HR Coordinator | NorthOak",
    description:
      "Dedicated HR coordinators for recruiting support, onboarding workflows, benefits admin, and HR documentation. Reduce HR overhead without sacrificing quality.",
    path: "/roles/hr-coordinator",
  }),
  serviceSchema({
    name: "HR Coordinator",
    description:
      "Dedicated HR coordinators handling recruiting coordination, employee onboarding, benefits administration, HR documentation, and people ops workflows.",
    path: "/roles/hr-coordinator",
    serviceType: "Human Resources Coordination",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "HR Coordinator", path: "/roles/hr-coordinator" },
  ]),
  faqSchema(faqs),
];

const HRCoordinator = () => {
  return (
    <RolePageLayout
      icon={Users}
      title="HR Coordinator"
      subtitle="Human Resources and People Operations"
      description="Keep your HR operations running without missing a beat — a dedicated coordinator who handles recruiting logistics, onboarding, benefits, and HR admin so your team stays focused."
      benefits={[
        "Recruiting coordination handled end-to-end without HR lead involvement",
        "New hire onboarding done right, every time",
        "Benefits administration and open enrollment managed accurately",
        "HR documentation and compliance records kept current",
        "60%+ cost savings vs. a domestic HR coordinator",
      ]}
      tasks={[
        {
          title: "Recruiting Coordination",
          description:
            "Schedule interviews, coordinate with hiring managers, send candidate communications, and manage the ATS pipeline from application through offer.",
        },
        {
          title: "Employee Onboarding",
          description:
            "Collect new hire paperwork, set up system access, coordinate equipment, and run orientation checklists — so day one goes smoothly every time.",
        },
        {
          title: "Benefits Administration",
          description:
            "Manage enrollment, process qualifying life event changes, answer employee benefits questions, and coordinate with brokers and providers.",
        },
        {
          title: "HR Documentation and Record Keeping",
          description:
            "Maintain employee files, update org charts, draft offer letters and employment agreements, and keep HR records audit-ready.",
        },
        {
          title: "Time and Attendance Tracking",
          description:
            "Monitor timesheets, process PTO requests, track leave balances, and flag attendance issues for management review.",
        },
        {
          title: "Offboarding Coordination",
          description:
            "Manage the exit process — collect equipment, revoke system access, process final pay paperwork, and conduct exit interviews per your policy.",
        },
      ]}
      stats={[
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "2×", label: "Faster time-to-offer" },
        { value: "100%", label: "Onboarding checklist completion" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak HR Coordinators handle recruiting logistics, onboarding workflows, benefits admin, and HR documentation — the operational layer that keeps people ops running. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Gusto",
        "BambooHR",
        "Rippling",
        "Workday",
        "ADP",
        "Greenhouse",
        "Lever",
        "Workable",
        "Notion",
        "Slack",
        "Google Workspace",
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

export default HRCoordinator;
