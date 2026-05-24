import { Users } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import hrAdminImg from "@/assets/characters/hr-admin.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What types of roles can a NorthOak Recruiter fill?",
    answer:
      "Our recruiters handle coordinator-to-manager level roles across operations, sales, marketing, finance, HR, and customer success. For highly technical engineering roles or C-suite executive searches, we recommend a dedicated executive search partner alongside our recruiter.",
  },
  {
    question: "Do they do active sourcing or just manage inbound?",
    answer:
      "Both. They post and manage job listings, review inbound applications, and actively source passive candidates via LinkedIn Recruiter and other channels. You get a full-cycle recruiter, not a coordinator.",
  },
  {
    question: "Can they manage the full hiring process end-to-end?",
    answer:
      "Yes — from job description to signed offer. They own sourcing, initial screens, interview scheduling, candidate communication, offer management, and hiring manager updates throughout.",
  },
  {
    question: "What ATS platforms do they work in?",
    answer:
      "Greenhouse, Lever, Workable, Ashby, Teamtailor, and most common ATS platforms. We'll confirm compatibility during intake.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Recruiter | NorthOak",
    description:
      "Dedicated recruiters for full-cycle hiring — sourcing, screening, scheduling, and offer management. Hire faster without agency fees.",
    path: "/roles/recruiter",
  }),
  serviceSchema({
    name: "Recruiter",
    description:
      "Dedicated recruiters handling full-cycle talent acquisition: job posting, candidate sourcing, screening, interview coordination, offer management, and ATS administration.",
    path: "/roles/recruiter",
    serviceType: "Talent Acquisition",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Recruiter", path: "/roles/recruiter" },
  ]),
  faqSchema(faqs),
];

const Recruiter = () => {
  return (
    <RolePageLayout
      icon={Users}
      image={hrAdminImg}
      title="Recruiter"
      subtitle="Human Resources and People Operations"
      description="Hire faster and stop paying agency fees — a dedicated recruiter who owns sourcing, screening, scheduling, and offer management for your open roles."
      benefits={[
        "Full-cycle recruiting without agency markups",
        "Faster time-to-offer through dedicated bandwidth",
        "Active sourcing surfaces candidates who aren't applying",
        "Consistent candidate experience that builds your employer brand",
        "60%+ cost savings vs. a domestic in-house recruiter",
      ]}
      tasks={[
        {
          title: "Job Description and Posting",
          description:
            "Write compelling job descriptions, post to relevant job boards and platforms, and optimize listings for search visibility and candidate quality.",
        },
        {
          title: "Candidate Sourcing",
          description:
            "Actively source passive candidates via LinkedIn Recruiter, GitHub, and niche talent communities — not just waiting on inbound applications.",
        },
        {
          title: "Application Review and Screening",
          description:
            "Review and score inbound applications against your defined criteria, conduct initial phone screens, and deliver shortlists with clear evaluation notes.",
        },
        {
          title: "Interview Scheduling and Coordination",
          description:
            "Coordinate multi-round interview schedules between candidates and hiring teams, send reminders, and manage logistics seamlessly.",
        },
        {
          title: "Candidate Communication",
          description:
            "Keep candidates warm with timely updates throughout the process — improving offer acceptance rates and protecting your employer brand.",
        },
        {
          title: "Offer Management and Closing",
          description:
            "Extend offers, negotiate within your defined parameters, collect signed documentation, and coordinate the handoff to HR for onboarding.",
        },
      ]}
      stats={[
        { value: "60%", label: "Cost savings vs. domestic" },
        { value: "40%", label: "Faster time-to-hire" },
        { value: "$0", label: "Agency placement fees" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Recruiters handle full-cycle talent acquisition — sourcing, screening, scheduling, and offer management — without agency fees or domestic salary overhead. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "LinkedIn Recruiter",
        "Greenhouse",
        "Lever",
        "Ashby",
        "Workable",
        "Indeed",
        "Glassdoor",
        "BambooHR",
        "Rippling",
        "Slack",
        "Google Workspace",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$6,000 – $9,500",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Agency fees avoided",
          domestic: "20–25% of salary per hire",
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

export default Recruiter;
