import { Megaphone } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import processAutomationImg from "@/assets/characters/process-automation.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What types of content can a NorthOak Content Writer produce?",
    answer:
      "Blog posts, long-form articles, website copy, case studies, white papers, email campaigns, product descriptions, LinkedIn posts, ad copy, and thought leadership content. Specify your content mix during intake and we'll match you with a writer who has relevant category experience.",
  },
  {
    question: "Can they match our brand voice?",
    answer:
      "Yes — we conduct a brand voice onboarding session in the first week: reviewing your existing content, guidelines, and examples. Most clients say the writing feels native within 2–3 pieces.",
  },
  {
    question: "Do they do SEO research and optimization?",
    answer:
      "Yes — our Content Writers can conduct keyword research, optimize posts for target keywords, structure content for featured snippets, and add internal links. For deeper technical SEO, pair them with our SEO Specialist.",
  },
  {
    question: "How much content can they produce per month?",
    answer:
      "Output depends on content type and depth. A typical dedicated Content Writer produces 8–12 blog posts per month, or a mix of shorter and longer pieces at equivalent volume. We'll set output expectations during intake.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Content Writer | NorthOak",
    description:
      "Dedicated content writers for blog posts, website copy, case studies, email campaigns, and thought leadership — matched to your brand voice and SEO goals.",
    path: "/roles/content-writer",
  }),
  serviceSchema({
    name: "Content Writer",
    description:
      "Dedicated content writers producing blog posts, website copy, case studies, email campaigns, white papers, and social content matched to your brand voice.",
    path: "/roles/content-writer",
    serviceType: "Content Writing",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Content Writer", path: "/roles/content-writer" },
  ]),
  faqSchema(faqs),
];

const ContentWriter = () => {
  return (
    <RolePageLayout
      icon={Megaphone}
      image={processAutomationImg}
      title="Content Writer"
      subtitle="Marketing"
      description="Build a consistent content engine with a dedicated writer who produces on-brand, SEO-optimized content that drives organic traffic and converts readers."
      benefits={[
        "Consistent content output without depending on internal team time",
        "On-brand writing that sounds like you from week two",
        "SEO-optimized posts that compound organic traffic over time",
        "Editorial calendar managed and executed without reminders",
        "65%+ cost savings vs. a domestic content writer",
      ]}
      tasks={[
        {
          title: "Blog Posts and Long-Form Articles",
          description:
            "Research, outline, write, and optimize long-form blog posts targeting your key topics and search keywords — designed to rank and convert.",
        },
        {
          title: "Website Copy",
          description:
            "Write and refresh landing page copy, product pages, case study pages, and other web content — balancing SEO requirements with conversion-focused messaging.",
        },
        {
          title: "Case Studies and Success Stories",
          description:
            "Interview customers or work from notes to write compelling case studies that highlight ROI, use cases, and customer outcomes for sales enablement.",
        },
        {
          title: "Email Campaign Copy",
          description:
            "Write nurture sequences, newsletter editions, product announcements, and promotional emails — with subject lines, preview text, and CTAs optimized for open and click rates.",
        },
        {
          title: "Social Media Content",
          description:
            "Draft LinkedIn posts, Twitter threads, and platform-appropriate content that drives engagement, builds authority, and reflects your brand voice.",
        },
        {
          title: "White Papers and Thought Leadership",
          description:
            "Research and write long-form thought leadership reports, buyer guides, and white papers that position your brand as an authority in your category.",
        },
      ]}
      stats={[
        { value: "10+", label: "Pieces published per month" },
        { value: "65%", label: "Cost savings vs. domestic" },
        { value: "3×", label: "Organic traffic growth" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Content Writers produce blog posts, website copy, case studies, email campaigns, and thought leadership — matched to your brand voice and SEO strategy. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "WordPress",
        "Webflow",
        "HubSpot",
        "Notion",
        "Google Docs",
        "Semrush",
        "Ahrefs",
        "SurferSEO",
        "Grammarly",
        "Jasper",
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

export default ContentWriter;
