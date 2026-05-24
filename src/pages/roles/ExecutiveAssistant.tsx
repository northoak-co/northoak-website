import { Briefcase } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import processAutomationImg from "@/assets/characters/process-automation.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What tasks can a NorthOak Executive Assistant handle?",
    answer:
      "Calendar management, email triage and drafting, travel booking and itinerary building, meeting prep, stakeholder follow-ups, expense tracking, vendor coordination, board and investor communications, and any high-priority admin your executive shouldn't be handling personally.",
  },
  {
    question: "Will the EA have access to email and calendar?",
    answer:
      "Yes, if you grant it. Most executives provide delegated access to Gmail or Outlook and share their calendar. Access is scoped to exactly what the EA needs, and all specialists sign NDAs before starting.",
  },
  {
    question: "Can one EA support multiple executives?",
    answer:
      "Yes — we can scope a specialist to support 2–3 executives, depending on workload. For high-demand executives with back-to-back schedules, a dedicated EA per person delivers the best results.",
  },
  {
    question: "What hours do Executive Assistants work?",
    answer:
      "We match your preferred working hours and time zone. Most North American clients are covered 9am–6pm local time. Extended availability for early morning or late-day coverage is available on request.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire an Executive Assistant | NorthOak",
    description:
      "Dedicated executive assistants for calendar management, inbox triage, travel booking, stakeholder communications, and high-priority admin. Reclaim 15+ hours per week.",
    path: "/roles/executive-assistant",
  }),
  serviceSchema({
    name: "Executive Assistant",
    description:
      "Dedicated executive assistants for calendar management, email triage, travel booking, meeting prep, stakeholder communications, and executive-level admin support.",
    path: "/roles/executive-assistant",
    serviceType: "Executive Assistance",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Executive Assistant", path: "/roles/executive-assistant" },
  ]),
  faqSchema(faqs),
];

const ExecutiveAssistant = () => {
  return (
    <RolePageLayout
      icon={Briefcase}
      image={processAutomationImg}
      title="Executive Assistant"
      subtitle="Executive Assistance"
      description="Reclaim your highest-value hours with a dedicated EA who manages your calendar, inbox, travel, and stakeholder communications so you stay in the work that only you can do."
      benefits={[
        "15+ hours reclaimed per week for deep work",
        "Calendar always optimized and conflicts resolved proactively",
        "Zero missed follow-ups with stakeholders or vendors",
        "Travel booked, itineraries ready, logistics handled",
        "65%+ cost savings vs. a domestic executive assistant",
      ]}
      tasks={[
        {
          title: "Calendar Management",
          description:
            "Own your executive's calendar end-to-end — scheduling, rescheduling, blocking focus time, managing conflicts, and sending prep materials before every meeting.",
        },
        {
          title: "Email Triage and Drafting",
          description:
            "Screen and prioritize your inbox, respond to routine correspondence in your voice, flag urgent items, and draft replies to stakeholders for your review.",
        },
        {
          title: "Travel Booking and Coordination",
          description:
            "Book flights, hotels, ground transport, and restaurant reservations — then build complete travel itineraries with all confirmations organized and accessible.",
        },
        {
          title: "Meeting Preparation",
          description:
            "Research attendees, prepare briefing documents, assemble agendas and slide decks, and follow up on action items after every meeting.",
        },
        {
          title: "Stakeholder and Vendor Coordination",
          description:
            "Manage ongoing communications with board members, investors, key clients, and vendors — ensuring follow-ups happen on time and nothing slips.",
        },
        {
          title: "Expense and Administrative Management",
          description:
            "Track and submit expenses, manage subscriptions and recurring admin tasks, and handle personal errands and logistics coordination.",
        },
      ]}
      stats={[
        { value: "15+", label: "Hours saved per week" },
        { value: "Zero", label: "Missed follow-ups" },
        { value: "65%", label: "Cost savings vs. domestic" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Executive Assistants manage calendars, triage inboxes, book travel, coordinate stakeholders, and handle any high-priority admin — so executives stay in their zone of genius. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Google Workspace",
        "Microsoft 365",
        "Notion",
        "Slack",
        "Zoom",
        "Calendly",
        "Expensify",
        "Ramp",
        "Asana",
        "Concur",
        "Airtable",
      ]}
      costRows={[
        {
          label: "Monthly cost",
          domestic: "$6,500 – $10,000",
          northoak: "From $2,000",
        },
        {
          label: "Benefits & payroll taxes",
          domestic: "Included above",
          northoak: "Included",
        },
        {
          label: "Recruiting fee",
          domestic: "$9,000 – $16,000 one-time",
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

export default ExecutiveAssistant;
