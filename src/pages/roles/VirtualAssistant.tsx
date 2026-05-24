import { Cog } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import processAutomationImg from "@/assets/characters/process-automation.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What tasks can a NorthOak VA handle?",
    answer:
      "Calendar management, email triage and drafting, travel booking, expense tracking, research, data entry, meeting prep, presentation formatting, vendor coordination, personal errands — and any repeatable workflow you define. If it can be done remotely, we can staff it.",
  },
  {
    question: "Will the VA have access to my email and calendar?",
    answer:
      "Yes, if you grant it. Most clients give delegated access to Gmail or Outlook and share their calendar. Access is scoped to what the VA needs, and all specialists sign NDAs before starting.",
  },
  {
    question: "Can a VA support multiple executives?",
    answer:
      "Yes — we can scope a specialist to support a small team, typically 2–3 executives. For larger teams, we recommend dedicated VAs per executive for best results.",
  },
  {
    question: "What hours do VAs work?",
    answer:
      "We match your preferred working hours. Most North American clients are covered 9am–6pm in their local time zone. Extended availability for early or late calls is available on request.",
  },
  {
    question: "What if it's not working out?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Virtual Assistant | NorthOak",
    description:
      "Dedicated virtual assistants for calendar management, inbox triage, travel booking, research, and task coordination. Reclaim 15+ hours per week.",
    path: "/roles/virtual-assistant",
  }),
  serviceSchema({
    name: "Virtual Assistant",
    description:
      "Dedicated virtual assistants for executive and administrative support — calendar, email, travel, research, task coordination, and personal admin.",
    path: "/roles/virtual-assistant",
    serviceType: "Virtual Assistant",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Virtual Assistant", path: "/roles/virtual-assistant" },
  ]),
  faqSchema(faqs),
];

const VirtualAssistant = () => {
  return (
    <RolePageLayout
      icon={Cog}
      image={processAutomationImg}
      title="Virtual Assistant"
      subtitle="Executive & Administrative Support"
      description="Supercharge your daily to-dos, scheduling, inbox review, follow-ups, and much more with a dedicated virtual assistant."
      benefits={[
        "Reclaim 10+ hours per week",
        "Never miss important emails or follow-ups",
        "Seamlessly manage complex calendars",
        "Reduce stress and increase productivity",
        "Focus on high-impact work that matters",
      ]}
      tasks={[
        {
          title: "Calendar Management",
          description:
            "Schedule meetings, manage conflicts, and keep your calendar organized and optimized.",
        },
        {
          title: "Email Management",
          description:
            "Screen, prioritize, and respond to emails on your behalf while maintaining your voice.",
        },
        {
          title: "Travel Arrangements",
          description:
            "Book flights, hotels, and create detailed itineraries for business or personal travel.",
        },
        {
          title: "Research & Reports",
          description:
            "Conduct research, compile data, and prepare reports and presentations.",
        },
        {
          title: "Task Coordination",
          description:
            "Track projects, manage to-do lists, and ensure deadlines are met.",
        },
        {
          title: "Personal Tasks",
          description:
            "Handle personal errands, gift ordering, appointment scheduling, and life admin.",
        },
      ]}
      stats={[
        { value: "15+", label: "Hours saved weekly" },
        { value: "Zero", label: "Missed follow-ups" },
        { value: "24/7", label: "Availability" },
        { value: "70%", label: "Productivity boost" },
      ]}
      tldr="NorthOak VAs manage calendars, triage inboxes, book travel, coordinate tasks, and handle any recurring admin work — so you stay in deep work. Dedicated to your account, working your hours. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Google Workspace",
        "Microsoft 365",
        "Notion",
        "Slack",
        "Asana",
        "Monday.com",
        "Zoom",
        "Expensify",
        "Calendly",
        "Airtable",
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
          label: "Recruiting fee",
          domestic: "$8,000 – $15,000 one-time",
          northoak: "None",
        },
        {
          label: "Time to first day",
          domestic: "3 – 7 weeks",
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

export default VirtualAssistant;
