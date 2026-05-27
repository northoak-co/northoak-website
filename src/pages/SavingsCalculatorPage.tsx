import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  ArrowRight,
  TrendingDown,
  CheckCircle2,
  Users,
  ShieldCheck,
  Headphones,
  RefreshCw,
  Lightbulb,
  Clock,
  Building2,
  Rocket,
  BarChart3,
  Globe,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorWidget, { fmt } from "@/components/CalculatorWidget";
import { pageMeta, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const meta = () => [
  ...pageMeta({
    title: "Outsourcing Savings Calculator | How Much Can You Save? | NorthOak",
    description:
      "Calculate exactly how much your business saves by outsourcing operations roles instead of hiring in-house. Most companies save 40–60% per role—over $60,000 per year. Free calculator, instant results.",
    path: "/savings-calculator",
  }),
  faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "NorthOak Outsourcing Savings Calculator",
      description:
        "Free interactive calculator showing how much you save outsourcing operations roles through NorthOak vs. hiring a full-time US employee.",
      applicationCategory: "BusinessApplication",
      url: "https://northoak.co/savings-calculator",
      dateModified: "2026-05-24",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      operatingSystem: "Web Browser",
      provider: { "@type": "Organization", name: "NorthOak", url: "https://northoak.co" },
    },
  },
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Calculate Your Outsourcing Savings",
      description:
        "Use NorthOak's free calculator to see how much your business saves by outsourcing an operations role instead of hiring in-house.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Select your role",
          text: "Choose the operations role you're looking to fill from the dropdown, or enter a custom salary for your specific position.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Set your team size and time horizon",
          text: "Use the sliders to set how many team members you need and over how many years you'd like to compare costs.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Read your savings",
          text: "The calculator instantly shows your total estimated savings and the percentage you save compared to hiring in-house.",
        },
      ],
    },
  },
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: "https://northoak.co/savings-calculator",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["[data-speakable='intro']", "[data-speakable='answer']"],
      },
    },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Savings Calculator", path: "/savings-calculator" },
  ]),
];


// ── Cost breakdown data (based on $68k base salary + 35% overhead) ───────────
const usCosts = [
  { label: "Base salary", amount: 68_000 },
  { label: "Benefits & health insurance (15%)", amount: 10_200 },
  { label: "Payroll taxes — FICA, FUTA, SUTA (10%)", amount: 6_800 },
  { label: "Recruiting & backfill, amortized (5%)", amount: 3_400 },
  { label: "Training & onboarding (3%)", amount: 2_040 },
  { label: "HR & management overhead (2%)", amount: 1_360 },
];
const US_TRUE_COST = usCosts.reduce((s, c) => s + c.amount, 0); // $95,200

const northoakCosts = [
  { label: "Monthly flat rate (×12)", amount: 30_000 },
  { label: "Pre-vetted talent", amount: 0, included: true },
  { label: "Managed HR & payroll", amount: 0, included: true },
  { label: "Talent coaching & upskilling", amount: 0, included: true },
  { label: "Dedicated account manager", amount: 0, included: true },
  { label: "Free replacements", amount: 0, included: true },
  { label: "10 hrs/mo ops advisory", amount: 0, included: true },
];
const NO_TRUE_COST = 30_000;

// ── Who benefits section ──────────────────────────────────────────────────────
const personas = [
  {
    icon: Rocket,
    title: "Fast-Growing Startups",
    description:
      "You need to scale headcount without the risk of a mis-hire draining runway. NorthOak gives you senior-quality talent at a fraction of the cost, with zero long-term exposure.",
  },
  {
    icon: BarChart3,
    title: "Operations-Heavy Teams",
    description:
      "Repetitive, process-driven work—CRM updates, invoice processing, customer support—is exactly where global talent shines. Delegate it and redirect your US team to higher-leverage work.",
  },
  {
    icon: Building2,
    title: "SMBs Watching Burn Rate",
    description:
      "Every dollar saved on overhead is a dollar reinvested in growth. Replacing even one US hire with a NorthOak associate typically saves $70k–$85k per year in all-in costs.",
  },
  {
    icon: Globe,
    title: "Distributed-First Companies",
    description:
      "If your team already works remotely, adding global talent is seamless. Our associates work in your time zone, use your tools, and show up like any other team member.",
  },
];

// ── NorthOak differentiators ──────────────────────────────────────────────────
const differentiators = [
  {
    icon: ShieldCheck,
    title: "Pre-Vetted, Not Marketplace",
    description:
      "We source, screen, and vet every associate before you ever see a profile. No sifting through hundreds of applicants.",
  },
  {
    icon: Users,
    title: "Fully Managed HR",
    description:
      "Payroll, compliance, benefits, and HR administration are entirely handled by NorthOak. You manage the work; we manage the person.",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    description:
      "A single point of contact who knows your business and is accountable to your outcomes—not a ticket queue.",
  },
  {
    icon: Lightbulb,
    title: "Ongoing Coaching",
    description:
      "We invest in your associate's growth so they get better over time, not just good enough to get hired.",
  },
  {
    icon: RefreshCw,
    title: "Free Replacements",
    description:
      "If the fit isn't right, we replace your associate at no cost. We own the risk so you don't have to.",
  },
  {
    icon: Clock,
    title: "Ops Advisory Included",
    description:
      "10 hours per month of strategic operations consulting to help you get the most out of your team.",
  },
];

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How much can I save by outsourcing instead of hiring in-house?",
    a: "Most companies save 40–60% per operations role when outsourcing through NorthOak compared to a US-based hire. For a typical role with a $68,000 base salary, the true all-in US cost—including benefits, payroll taxes, recruiting, and overhead—is approximately $91,800 per year. NorthOak's starting rate for a comparable role is $2,000/month ($24,000/year), saving you over $67,000 annually. Use the calculator on this page to model your specific role, team size, and time horizon.",
  },
  {
    q: "Is the quality really comparable to a US hire?",
    a: "For process-driven operational roles, yes—often better. Our associates typically have 3–7 years of relevant experience, speak fluent English, and are specifically selected for the type of work you need. We also provide ongoing coaching to keep skills sharp.",
  },
  {
    q: "What roles can be outsourced through NorthOak?",
    a: "Operations coordinators, executive assistants, customer support, CRM management, finance & accounting, HR admin, and many more. If there's a defined process, it can be delegated. See our full Roles page for specifics.",
  },
  {
    q: "How are these savings calculated?",
    a: "The calculator compares the average all-in US hire cost (base salary + benefits, payroll taxes, and recruiting) against NorthOak's flat monthly rate. The true cost comparison section below shows every line item so you can see exactly where the savings come from.",
  },
  {
    q: "What if my associate isn't working out?",
    a: "Free replacements, no questions asked. We'll source and match you with a better candidate. Our goal is your long-term success, not a one-time placement fee.",
  },
  {
    q: "How quickly can I get started?",
    a: "Most clients are matched and onboarded within 1–2 weeks of their intro call. We move fast once we understand your needs.",
  },
];

// ── Green box helper ──────────────────────────────────────────────────────────
const GreenBox = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
    style={{
      background:
        "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
      boxShadow:
        "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
    }}
  >
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(102 44% 51% / 0.25) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(102 40% 55% / 0.2) 0%, transparent 70%)" }}
      />
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const SavingsCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="relative bg-background pt-4 pb-8 overflow-hidden">
          <div className="mx-auto px-3 md:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GreenBox>
                <div className="px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-16 md:pb-24">
                  <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-sage/10 rounded-2xl mb-6"
                    >
                      <TrendingDown className="w-8 h-8 md:w-10 md:h-10 text-sage" />
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
                    >
                      How Much Can You Save by Outsourcing?
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                      data-speakable="intro"
                    >
                      Companies that outsource operations roles through NorthOak typically save
                      40–60% compared to hiring in-house—over $60,000 per year for a mid-level role.
                      Use the calculator below to see your exact number.
                    </motion.p>

                    {/* Stat pills */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-wrap justify-center gap-3 mb-4"
                    >
                      {[
                        "~$62k saved per hire per year",
                        "No recruiting fees",
                        "HR fully managed",
                        "Ready in 1–2 weeks",
                      ].map((pill) => (
                        <span
                          key={pill}
                          className="px-4 py-2 bg-white/70 border border-sage/25 rounded-full text-sm font-medium text-foreground"
                        >
                          {pill}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Calculator */}
                  <CalculatorWidget />
                </div>
              </GreenBox>
            </motion.div>
          </div>
        </section>

        {/* ── True Cost Breakdown ──────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block"
              >
                True Cost Breakdown
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                What Does a US Hire Actually Cost?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-muted-foreground max-w-2xl mx-auto"
              >
                Most companies budget for base salary and forget the rest. When you add it all up,
                the true cost of a US hire is typically 50–60% higher than the number on the offer letter.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* US Hire column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-zinc-300 inline-block" />
                  US-Based Hire — True Annual Cost
                </h3>
                <ul className="space-y-4">
                  {usCosts.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-muted-foreground text-sm">{item.label}</span>
                      <span className="font-semibold text-foreground">{fmt(item.amount)}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t-2 border-zinc-200 flex justify-between items-baseline">
                  <span className="font-display font-bold text-foreground">Total per year</span>
                  <span className="font-display text-2xl font-bold text-foreground">{fmt(US_TRUE_COST)}</span>
                </div>
              </motion.div>

              {/* NorthOak column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-sage/30 rounded-2xl p-8 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                  style={{ background: "radial-gradient(circle, hsl(102 44% 51% / 0.15) 0%, transparent 70%)" }}
                />
                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-sage inline-block" />
                  NorthOak — All-In Annual Cost
                </h3>
                <ul className="space-y-4">
                  {northoakCosts.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-muted-foreground text-sm">{item.label}</span>
                      {item.included ? (
                        <span className="flex items-center gap-1 text-sage font-semibold text-sm">
                          <CheckCircle2 className="w-4 h-4" /> Included
                        </span>
                      ) : (
                        <span className="font-semibold text-foreground">{fmt(item.amount)}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t-2 border-sage/30 flex justify-between items-baseline">
                  <span className="font-display font-bold text-foreground">Total per year</span>
                  <span className="font-display text-2xl font-bold text-sage">{fmt(NO_TRUE_COST)}</span>
                </div>
              </motion.div>
            </div>

            {/* Savings callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-5xl mx-auto rounded-2xl border border-sage/25 bg-sage/5 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <p className="text-foreground font-medium">
                Annual savings per team member — without sacrificing quality or control
              </p>
              <span className="font-display text-3xl font-bold text-sage whitespace-nowrap">
                {fmt(US_TRUE_COST - NO_TRUE_COST)}/year
              </span>
            </motion.div>
            <p className="text-xs text-muted-foreground/60 text-center mt-4 max-w-5xl mx-auto">
              Overhead figures based on U.S. Bureau of Labor Statistics (BLS) Employer Costs for Employee Compensation and SHRM benchmarks. Salary figures are illustrative medians; actual costs vary by role and location.
            </p>
          </div>
        </section>

        {/* ── Why Outsourcing Makes Sense ──────────────────────────────── */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="mx-auto px-3 md:px-4">
            <GreenBox>
              <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-14"
                >
                  <span className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block">
                    The Case for Global Talent
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Why Are Companies Outsourcing Operations Roles?
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    The global talent market has matured. Today, the best operations professionals
                    aren't all based in the US—and the companies that recognize this are moving
                    faster, spending less, and building more resilient teams.
                  </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {[
                    {
                      title: "Talent pools are global now",
                      body: "Fluent English, deep domain knowledge, and professional credentials are no longer exclusive to US workers. The talent is there—NorthOak finds it.",
                    },
                    {
                      title: "Labor arbitrage is real and ethical",
                      body: "Paying $2,500/month in a market where that represents a strong salary is a win-win. Your associate earns competitively at home; you save significantly.",
                    },
                    {
                      title: "Process-driven roles are location-agnostic",
                      body: "CRM updates, bookkeeping, customer support, HR coordination—these roles require skill and reliability, not geographic proximity to your office.",
                    },
                    {
                      title: "Reduce single points of failure",
                      body: "A distributed team is inherently more resilient. Global associates cover different hours, creating natural redundancy without expensive overtime.",
                    },
                    {
                      title: "Reinvest savings into growth",
                      body: "Every $84k you save per associate is capital you can redeploy into product, sales, or infrastructure—the things that actually differentiate your business.",
                    },
                    {
                      title: "Hire without the administrative drag",
                      body: "Job postings, interviews, offer letters, payroll setup—NorthOak handles all of it. You get a productive team member in weeks, not months.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 hover:border-sage/30 transition-all duration-300"
                    >
                      <h3 className="font-display text-base font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GreenBox>
          </div>
        </section>

        {/* ── Who Benefits Most ────────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block"
              >
                Is This Right for You?
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground"
              >
                Is Outsourcing Right for Your Business?
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {personas.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 bg-card border border-border rounded-2xl hover:border-sage/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NorthOak Differentiators ─────────────────────────────────── */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="mx-auto px-3 md:px-4">
            <GreenBox>
              <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-14"
                >
                  <span className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block">
                    Why NorthOak
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    What Sets NorthOak Apart from Other Outsourcing Firms?
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Generic staffing platforms give you a marketplace. NorthOak gives you a managed
                    team—pre-vetted talent, full HR support, and a dedicated partner who's invested
                    in your success.
                  </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {differentiators.map((d, i) => (
                    <motion.div
                      key={d.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 hover:border-sage/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-4">
                        <d.icon className="w-6 h-6 text-sage" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-foreground mb-2">
                        {d.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{d.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GreenBox>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block"
              >
                Common Questions
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-6 bg-card border border-border rounded-xl"
                  {...(i === 0 ? { "data-speakable": "answer" } : {})}
                >
                  <h3 className="font-display font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="relative bg-background py-8 overflow-hidden">
          <div className="mx-auto px-3 md:px-4 relative z-10">
            <GreenBox>
              <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
                <div className="max-w-3xl mx-auto text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
                  >
                    Ready to see these savings in your own P&L?
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-muted-foreground mb-10"
                  >
                    Book an intro call and we'll walk through exactly what a NorthOak associate
                    would cost for your specific use case—no commitment required.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <Link to="/get-started">
                      <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden">
                        <span className="px-6 py-3 text-white font-medium">Book an Intro Call</span>
                        <span className="flex items-center justify-center w-10 h-10 m-1.5 bg-white rounded-full">
                          <ArrowRight className="w-4 h-4 text-sage" />
                        </span>
                      </button>
                    </Link>
                    <Link
                      to="/pricing"
                      className="flex items-center px-6 py-3 border border-sage/40 rounded-full text-foreground font-medium hover:border-sage transition-colors duration-200"
                    >
                      View Pricing
                    </Link>
                  </motion.div>
                </div>
              </div>
            </GreenBox>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SavingsCalculatorPage;
