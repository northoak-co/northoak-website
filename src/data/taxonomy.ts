import {
  TrendingUp,
  HeadphonesIcon,
  PiggyBank,
  FileText,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export interface Role {
  name: string;
  slug: string;
  shortDescription: string;
}

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  icon: LucideIcon;
  roles: Role[];
}

export const services: Service[] = [
  {
    name: "Support",
    slug: "customer-support",
    shortDescription: "Responsive support and proactive retention across every channel.",
    icon: HeadphonesIcon,
    roles: [
      { name: "Customer Support Agent", slug: "customer-support-agent", shortDescription: "Email, chat, and phone support in Zendesk, Gorgias, or Intercom." },
      { name: "Customer Success Manager", slug: "customer-success-manager", shortDescription: "Onboarding, health monitoring, and renewal management." },
      { name: "Technical Support Specialist", slug: "technical-support-specialist", shortDescription: "Tier-1 and Tier-2 technical troubleshooting and escalation triage." },
      { name: "Live Chat Specialist", slug: "live-chat-specialist", shortDescription: "Real-time chat coverage with fast response times and CSAT focus." },
      { name: "Onboarding Coordinator", slug: "onboarding-coordinator", shortDescription: "New hire and client onboarding logistics, documentation, and coordination." },
    ],
  },
  {
    name: "Revenue",
    slug: "sales-gtm",
    shortDescription: "Build pipeline, manage your CRM, and drive revenue growth.",
    icon: TrendingUp,
    roles: [
      { name: "Sales Development Rep", slug: "sdr", shortDescription: "Outbound prospecting and lead qualification." },
      { name: "CRM Manager", slug: "crm-manager", shortDescription: "Keep your HubSpot, Salesforce, or Pipedrive clean and current." },
      { name: "Sales Operations Analyst", slug: "sales-ops-analyst", shortDescription: "Reporting, tooling, and process optimization for your sales team." },
      { name: "Lead Generation Specialist", slug: "lead-generation-specialist", shortDescription: "Research, list-building, and enrichment for outbound campaigns." },
      { name: "Account Executive (Associate)", slug: "account-executive", shortDescription: "SMB closing and upsell support for your existing book." },
    ],
  },
  {
    name: "Marketing",
    slug: "marketing",
    shortDescription: "Content, campaigns, and creative output — consistently delivered.",
    icon: Megaphone,
    roles: [
      { name: "Content Writer", slug: "content-writer", shortDescription: "Blog posts, case studies, landing page copy, and email content." },
      { name: "Social Media Manager", slug: "social-media-manager", shortDescription: "Scheduling, community management, and content calendar execution." },
      { name: "Email Marketing Specialist", slug: "email-marketing-specialist", shortDescription: "Campaign setup, list management, and performance reporting in Klaviyo or HubSpot." },
      { name: "SEO Specialist", slug: "seo-specialist", shortDescription: "On-page optimization, keyword research, and content briefs." },
      { name: "Graphic Designer", slug: "graphic-designer", shortDescription: "Social graphics, presentations, ad creatives, and brand assets." },
    ],
  },
  {
    name: "Finance",
    slug: "finance-accounting",
    shortDescription: "Accurate books, clean close, and full financial visibility every month.",
    icon: PiggyBank,
    roles: [
      { name: "Bookkeeper", slug: "bookkeeper", shortDescription: "Day-to-day transaction recording, reconciliation, and reporting." },
      { name: "Accounts Payable Specialist", slug: "accounts-payable-specialist", shortDescription: "Invoice processing, vendor payments, and AP aging management." },
      { name: "Accounts Receivable Specialist", slug: "accounts-receivable-specialist", shortDescription: "Invoicing, collections follow-up, and cash application." },
      { name: "Payroll Specialist", slug: "payroll-specialist", shortDescription: "Payroll runs, tax filings, and payroll compliance." },
      { name: "Financial Analyst", slug: "financial-analyst", shortDescription: "Budgeting support, variance analysis, and management reporting." },
    ],
  },
  {
    name: "Back Office",
    slug: "back-office-admin",
    shortDescription: "Custom operational workflows handled accurately and at scale.",
    icon: FileText,
    roles: [
      { name: "Data Entry Specialist", slug: "data-entry-specialist", shortDescription: "High-accuracy data entry, cleaning, and database maintenance." },
      { name: "Operations Coordinator", slug: "operations-coordinator", shortDescription: "Cross-functional task tracking, scheduling, and process management." },
      { name: "Document Management Specialist", slug: "document-management-specialist", shortDescription: "Filing, digitization, version control, and document workflows." },
      { name: "Order Processing Specialist", slug: "order-processing-specialist", shortDescription: "Order entry, fulfillment coordination, and customer communication." },
      { name: "HR Coordinator", slug: "hr-coordinator", shortDescription: "Payroll processing, benefits admin, and HR records management." },
      { name: "Recruiter", slug: "recruiter", shortDescription: "Job posting, candidate screening, and interview coordination." },
      { name: "People Ops Specialist", slug: "people-ops-specialist", shortDescription: "HRIS management, reporting, and employee lifecycle support." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const getRoleBySlug = (serviceSlug: string, roleSlug: string) =>
  getServiceBySlug(serviceSlug)?.roles.find((r) => r.slug === roleSlug);
