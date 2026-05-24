import { Megaphone } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import processAutomationImg from "@/assets/characters/process-automation.png";
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What platforms do your Social Media Managers cover?",
    answer:
      "LinkedIn, Instagram, Twitter/X, Facebook, and TikTok are the most common. We'll confirm platform priorities during intake and match you with a specialist who has category experience on your target channels.",
  },
  {
    question: "Do they create content or just schedule it?",
    answer:
      "Both. Our Social Media Managers create the content — copy, captions, basic graphics using Canva — and schedule it using Buffer or Hootsuite. For more complex video or design work, pair them with a Graphic Designer.",
  },
  {
    question: "Can they engage with comments and DMs?",
    answer:
      "Yes — community management is part of the role. They respond to comments, engage with relevant posts in your industry, and manage DMs according to your defined protocols.",
  },
  {
    question: "How do they report on performance?",
    answer:
      "They deliver a monthly performance report covering reach, engagement rate, follower growth, top-performing content, and recommendations for the next month's strategy.",
  },
  {
    question: "What if it's not the right fit?",
    answer:
      "Guaranteed service. We'll rematch you within 5 business days at no cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Hire a Social Media Manager | NorthOak",
    description:
      "Dedicated social media managers for content creation, scheduling, community management, and performance reporting across LinkedIn, Instagram, and more.",
    path: "/roles/social-media-manager",
  }),
  serviceSchema({
    name: "Social Media Manager",
    description:
      "Dedicated social media managers handling content creation, post scheduling, community management, engagement, and monthly performance reporting.",
    path: "/roles/social-media-manager",
    serviceType: "Social Media Management",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Social Media Manager", path: "/roles/social-media-manager" },
  ]),
  faqSchema(faqs),
];

const SocialMediaManager = () => {
  return (
    <RolePageLayout
      icon={Megaphone}
      image={processAutomationImg}
      title="Social Media Manager"
      subtitle="Marketing"
      description="Build an active, growing social presence with a dedicated manager who creates content, manages your channels, engages your audience, and reports on what's working."
      benefits={[
        "Consistent posting cadence across all channels without internal effort",
        "Community management that turns followers into advocates",
        "Content calendar planned, created, and executed every month",
        "Performance insights that improve strategy over time",
        "65%+ cost savings vs. a domestic social media manager",
      ]}
      tasks={[
        {
          title: "Content Creation and Copywriting",
          description:
            "Write platform-optimized captions and post copy — tailored to each channel's format, audience, and algorithm preferences — matched to your brand voice.",
        },
        {
          title: "Content Calendar Management",
          description:
            "Build and maintain a monthly content calendar, plan campaign themes, and ensure consistent publishing frequency across all active channels.",
        },
        {
          title: "Graphic and Visual Asset Creation",
          description:
            "Design social graphics in Canva or Adobe Express — branded templates, promotional images, quote cards, and story assets — for every post that needs one.",
        },
        {
          title: "Scheduling and Publishing",
          description:
            "Schedule all content in Buffer, Hootsuite, or Later — optimized by channel and time zone for peak engagement.",
        },
        {
          title: "Community Management",
          description:
            "Monitor and respond to comments, engage with industry conversations, manage DMs, and flag priority interactions for leadership attention.",
        },
        {
          title: "Performance Reporting",
          description:
            "Deliver monthly analytics reports covering reach, engagement, follower growth, top-performing content, and data-driven recommendations.",
        },
      ]}
      stats={[
        { value: "20+", label: "Posts per month" },
        { value: "65%", label: "Cost savings vs. domestic" },
        { value: "3×", label: "Engagement growth" },
        { value: "5 days", label: "Time to first day" },
      ]}
      tldr="NorthOak Social Media Managers create content, manage channels, engage communities, and report on performance — building a consistent social presence without pulling your team away from core work. Starts at $2,000/mo. Guaranteed service."
      tools={[
        "Buffer",
        "Hootsuite",
        "Later",
        "Canva",
        "Adobe Express",
        "Sprout Social",
        "LinkedIn",
        "Instagram",
        "Twitter/X",
        "Google Analytics",
        "Slack",
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

export default SocialMediaManager;
