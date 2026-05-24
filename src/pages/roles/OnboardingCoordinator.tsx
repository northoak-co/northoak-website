import { Users } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What does a NorthOak Onboarding Coordinator own?",
    answer:
      "Everything from offer acceptance to the end of the new hire's first 90 days — paperwork collection, IT provisioning coordination, system access setup, orientation scheduling, training logistics, and milestone check-ins.",
  },
  {
    question: "Can they manage onboarding for remote employees?",
    answer:
      "Yes — and this is where they add the most value. Remote onboarding requires meticulous coordination of digital paperwork, equipment shipping, virtual introductions, and async training. Our specialists are experienced with fully distributed teams.",
  },
  {
    question: "Do they work with our HRIS and IT teams?",
    answer:
      "Yes — they serve as the coordination hub between HR, IT, and hiring managers. They track open tasks across all parties and escalate blockers before day one.",
  },
  {
    question: "Can they build and maintain onboarding playbooks?",
    answer:
      "Yes — many clients engage our Onboarding Coordinators to document and systematize their onboarding process so it runs the same way every time, regardless of role or department.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire an Onboarding Coordinator | NorthOak",
    description:
      "Dedicated onboarding coordinators to make every new hire's first 90 days exceptional — paperwork, access, orientation, and milestone tracking handled end-to-end.",
    path: "/roles/onboarding-coordinator",
  }),
  serviceSchema({
    name: "Onboarding Coordinator",
    description:
      "Dedicated onboarding coordinators handling new hire paperwork, system access provisioning, orientation scheduling, training logistics, and 90-day milestone tracking.",
    path: "/roles/onboarding-coordinator",
    serviceType: "Employee Onboarding",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Onboarding Coordinator", path: "/roles/onboarding-coordinator" },
  ]),
  faqSchema(faqs),
];

const OnboardingCoordinator = () => {
  return (
    <RolePageLayout
      icon={Users}
      title="Onboarding Coordinator"
      subtitle="Human Resources and People Operations"
      description="Make every new hire's first day — and first 90 days — exceptional with a dedicated coordinator who handles every detail from offer acceptance to full productivity."
      benefits={[
        "First days that impress instead of frustrate new hires",
        "Paperwork and provisioning completed before day one",
        "Onboarding playbooks that scale without reinventing the wheel",
        "Hiring managers freed from onboarding logistics entirely",
        "60%+ cost savings vs. a domestic onboarding specialist",
      ]}
      tasks={[
        {
          title: "Pre-Start Paperwork Collection",
          description:
            "Collect signed offer letters, I-9s, direct deposit forms, and all required documentation before the new hire's first day — via DocuSign or your preferred e-signature tool.",
        },
        {
          title: "IT and System Access Provisioning",
          description:
            "Coordinate with IT to ensure equipment is shipped, accounts are created, and system access is granted and verified before day one.",
        },
        {
          title: "Orientation Scheduling",
          description:
            "Schedule all first-week introductions, team meetings, and orientation sessions — building a structured day-one and day-one-week agenda.",
        },
        {
          title: "Training Logistics",
          description:
            "Coordinate training sessions, track completion of required training modules, and follow up with new hires and managers on open items.",
        },
        {
          title: "30/60/90-Day Milestone Tracking",
          description:
            "Set up and track milestone check-ins at 30, 60, and 90 days — prompting managers for feedback and surfacing any early issues before they escalate.",
        },
        {
          title: "Onboarding Playbook Management",
          description:
            "Build, maintain, and improve role-specific onboarding checklists and playbooks so the process is consistent and scalable across departments.",
        },
      ]}
      stats={[
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "100%", label: "Day-one readiness rate" },
        { value: "2×", label: "Faster time to full productivity" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Onboarding Coordinators handle paperwork, IT provisioning, orientation scheduling, training logistics, and 90-day milestone tracking — so every new hire ramps quickly and starts strong. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "BambooHR",
        "Rippling",
        "Gusto",
        "DocuSign",
        "Notion",
        "Greenhouse",
        "Lever",
        "Slack",
        "Google Workspace",
        "Loom",
        "Asana",
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
          domestic: "$6,000 – $11,000 one-time",
          northoak: "None",
        },
        {
          label: "Time to first day",
          domestic: "3 – 6 weeks",
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

export default OnboardingCoordinator;
