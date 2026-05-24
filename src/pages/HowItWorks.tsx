import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Check,
  X,
  Users,
  FileText,
  Rocket,
  BadgeCheck,
  Phone,
  UserCheck,
  Award,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { pageMeta, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "What does the intake process look like?",
    answer:
      "A 30-minute call with your account manager. We cover the role scope, tools, time zone requirements, and what you'd want your specialist to accomplish in their first 90 days. You'll have matched candidates within 2 business days.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most specialists are independently productive within 5–7 days. The first week includes SOP documentation, tool onboarding, and shadowing. We handle the onboarding process — you just provide access and context.",
  },
  {
    question: "What if I need to scale up or down?",
    answer:
      "Month-to-month contracts mean you can add specialists as you grow or reduce scope with notice. There are no minimums and no penalties.",
  },
  {
    question: "Do you handle payroll and compliance?",
    answer:
      "Yes — fully. Your specialist's payroll, taxes, and compliance are our responsibility. You pay one monthly invoice.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "How It Works | NorthOak",
    description:
      "From intake to embedded specialist in 5 business days. See NorthOak's 3-step process, vetting funnel, match SLA, and free replacement guarantee.",
    path: "/how-it-works",
  }),
  faqSchema(faqs),
];

const kpis = [
  { number: "5 days", label: "Intake to first day" },
  { number: "< 5%", label: "Of applicants accepted" },
  { number: "5–7 days", label: "To full productivity" },
  { number: "1 invoice", label: "All-in, no hidden fees" },
];

const processSteps = [
  {
    number: "01",
    phase: "Discovery",
    title: "Tell us what you need",
    description:
      "A 30-minute intake call covers the role scope, your tools, time zone requirements, and what success looks like at 90 days. No RFP, no lengthy procurement — just a focused conversation.",
    deliverables: [
      "Role scope document",
      "Candidate profile brief",
      "SLA commitment letter",
    ],
    icon: Phone,
  },
  {
    number: "02",
    phase: "Matching",
    title: "Meet your vetted candidates",
    description:
      "Within 2 business days, we introduce 1–2 pre-vetted candidates who've passed our multi-stage assessment and paid trial task. You interview and choose — we handle everything after.",
    deliverables: [
      "1–2 curated candidates",
      "Assessment results + work samples",
      "Interview scheduling support",
    ],
    icon: UserCheck,
  },
  {
    number: "03",
    phase: "Launch",
    title: "Your specialist hits the ground running",
    description:
      "We run structured onboarding — SOP documentation, tool access setup, and a supervised first week. Your specialist is independently productive within 5–7 days.",
    deliverables: [
      "Dedicated account manager",
      "Standing weekly check-in",
      "Free replacement guarantee",
    ],
    icon: Rocket,
  },
];

const vettingStages = [
  {
    title: "Application review",
    description:
      "Resume, portfolio, and work samples screened against role requirements.",
    icon: FileText,
    filter: "Top 20% advance",
  },
  {
    title: "Skills assessment",
    description:
      "Role-specific task in real tools (HubSpot, Zendesk). Graded on accuracy, speed, and process quality.",
    icon: BadgeCheck,
    filter: "Top 10% pass",
  },
  {
    title: "Video interview",
    description:
      "Communication clarity, English proficiency, and cultural alignment with the clients we serve.",
    icon: Users,
    filter: "Top 7% selected",
  },
  {
    title: "Paid trial task",
    description:
      "A real-world scenario from an actual client workflow. Only top performers clear this final filter.",
    icon: Award,
    filter: "< 5% placed",
  },
];

type CompValue = boolean | string;

const comparisonRows: {
  label: string;
  agency: CompValue;
  inhouse: CompValue;
  northoak: CompValue;
}[] = [
  {
    label: "Time to hire",
    agency: "4–8 weeks",
    inhouse: "6–12 weeks",
    northoak: "5 business days",
  },
  {
    label: "Multi-stage vetting",
    agency: false,
    inhouse: false,
    northoak: true,
  },
  {
    label: "Paid trial task",
    agency: false,
    inhouse: false,
    northoak: true,
  },
  {
    label: "Payroll & compliance",
    agency: false,
    inhouse: "Your burden",
    northoak: true,
  },
  {
    label: "Structured onboarding",
    agency: false,
    inhouse: false,
    northoak: true,
  },
  {
    label: "Replacement guarantee",
    agency: false,
    inhouse: false,
    northoak: true,
  },
  {
    label: "Dedicated account manager",
    agency: false,
    inhouse: false,
    northoak: true,
  },
  {
    label: "Month-to-month contracts",
    agency: false,
    inhouse: false,
    northoak: true,
  },
];

const CompCell = ({ value }: { value: CompValue }) => {
  if (value === true)
    return <Check className="w-5 h-5 text-sage mx-auto" strokeWidth={2.5} />;
  if (value === false)
    return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
  return (
    <span className="text-sm font-semibold text-foreground text-center block">
      {value}
    </span>
  );
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5 },
};

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative bg-background overflow-hidden">
          <div className="container mx-auto px-6 pt-40 md:pt-52 pb-16 md:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Left: copy */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/10 border border-sage/20 text-sage text-xs font-semibold uppercase tracking-widest mb-8"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                  How It Works
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground mb-6"
                >
                  Intake to{" "}
                  <span className="text-sage italic">first day.</span>
                  <br />
                  Five business days.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
                >
                  We handle sourcing, vetting, and onboarding. You get a
                  specialist embedded in your tools, working your hours — not a
                  contractor, not a temp.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <Link to="/get-started">
                    <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden">
                      <span className="px-6 py-3 text-white font-medium">
                        Get started
                      </span>
                      <span className="flex items-center justify-center w-10 h-10 m-1.5 bg-white rounded-full">
                        <ArrowRight className="w-4 h-4 text-sage" />
                      </span>
                    </button>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    ✓ Guaranteed service · Starts at $2,000/mo
                  </p>
                </motion.div>
              </div>

              {/* Right: step preview cards */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="hidden lg:flex flex-col gap-3"
              >
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-sage/30 hover:shadow-card transition-all duration-300 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "hsl(102 40% 20%)" }}
                    >
                      <span className="text-white font-bold text-sm font-mono">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-sage uppercase tracking-wider mb-0.5">
                        {step.phase}
                      </div>
                      <div className="text-sm font-semibold text-foreground truncate">
                        {step.title}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/30 flex-shrink-0 group-hover:text-sage/50 transition-colors" />
                  </motion.div>
                ))}

                <div className="flex items-center gap-2 px-4 mt-1">
                  <Clock className="w-3.5 h-3.5 text-sage/50" />
                  <span className="text-xs text-muted-foreground">
                    Total: 5 business days
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto border-t border-border" />
          </div>
        </section>

        {/* ── KPI Strip ────────────────────────────────────────────── */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border">
              {kpis.map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-center md:px-8"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {kpi.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{kpi.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process Steps ────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              {...fadeUp}
              className="text-center mb-16 max-w-2xl mx-auto"
            >
              <p className="text-sm font-semibold text-sage uppercase tracking-widest mb-4">
                The Process
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Three steps from brief to embedded specialist
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 bg-background rounded-3xl border border-border overflow-hidden hover:border-sage/30 hover:shadow-hover transition-all duration-300"
                  >
                    {/* Left: step info */}
                    <div className="p-8 md:p-10 md:border-r md:border-border">
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ background: "hsl(102 40% 20%)" }}
                        >
                          <span className="text-white font-bold font-mono text-sm">
                            {step.number}
                          </span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-sage uppercase tracking-widest mb-1">
                            {step.phase}
                          </div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>

                    {/* Right: deliverables */}
                    <div className="p-8 md:p-10 bg-sage/[0.03]">
                      <div className="flex items-center gap-2 mb-6">
                        <Icon className="w-4 h-4 text-sage" />
                        <p className="text-xs font-semibold text-sage uppercase tracking-widest">
                          What you get
                        </p>
                      </div>
                      <ul className="space-y-4">
                        {step.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-sage" strokeWidth={2.5} />
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Vetting Funnel ───────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: copy */}
              <motion.div {...fadeUp} className="lg:sticky lg:top-32">
                <p className="text-sm font-semibold text-sage uppercase tracking-widest mb-4">
                  The Standard
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Fewer than{" "}
                  <span className="text-sage italic">5%</span> of
                  applicants make it through
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We run a four-stage process that combines portfolio review,
                  real-tool skills testing, video interviews, and a paid trial
                  task. Only the top performers reach placement.
                </p>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-sage/10 border border-sage/20">
                  <ShieldCheck className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-foreground">
                    Every candidate you meet has cleared all four stages and completed a paid trial task.
                  </p>
                </div>
              </motion.div>

              {/* Right: funnel stages */}
              <div className="space-y-0">
                {vettingStages.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <motion.div
                      key={stage.title}
                      {...fadeUp}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-5"
                    >
                      {/* Timeline spine */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl bg-sage/10 border border-sage/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-sage" />
                        </div>
                        {index < vettingStages.length - 1 && (
                          <div className="w-px flex-1 bg-gradient-to-b from-sage/20 to-sage/5 my-2 min-h-[2rem]" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pb-8">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-display font-semibold text-foreground">
                            {stage.title}
                          </h3>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-sage/10 text-sage font-semibold">
                            {stage.filter}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ─────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              {...fadeUp}
              className="text-center mb-16 max-w-2xl mx-auto"
            >
              <p className="text-sm font-semibold text-sage uppercase tracking-widest mb-4">
                How We Compare
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                The NorthOak difference
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="min-w-[560px] rounded-3xl border border-border overflow-hidden"
              >
                {/* Header row */}
                <div
                  className="grid"
                  style={{ gridTemplateColumns: "1fr 130px 130px 150px" }}
                >
                  <div
                    className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white/60"
                    style={{ background: "hsl(102 40% 20%)" }}
                  >
                    Feature
                  </div>
                  <div
                    className="px-4 py-4 text-sm font-semibold text-center text-white/70 border-l border-white/10"
                    style={{ background: "hsl(102 40% 20%)" }}
                  >
                    Agency
                  </div>
                  <div
                    className="px-4 py-4 text-sm font-semibold text-center text-white/70 border-l border-white/10"
                    style={{ background: "hsl(102 40% 20%)" }}
                  >
                    In-house
                  </div>
                  <div
                    className="px-4 py-4 text-sm font-bold text-center text-sage border-l border-white/10"
                    style={{ background: "hsl(102 38% 17%)" }}
                  >
                    NorthOak
                  </div>
                </div>

                {/* Data rows */}
                {comparisonRows.map((row, i) => (
                  <div
                    key={row.label}
                    className="grid border-t border-border"
                    style={{ gridTemplateColumns: "1fr 130px 130px 150px" }}
                  >
                    <div
                      className={`px-6 py-4 text-sm font-medium text-foreground ${
                        i % 2 === 0 ? "bg-background" : "bg-card/60"
                      }`}
                    >
                      {row.label}
                    </div>
                    <div
                      className={`px-4 py-4 border-l border-border flex items-center justify-center ${
                        i % 2 === 0 ? "bg-background" : "bg-card/60"
                      }`}
                    >
                      <CompCell value={row.agency} />
                    </div>
                    <div
                      className={`px-4 py-4 border-l border-border flex items-center justify-center ${
                        i % 2 === 0 ? "bg-background" : "bg-card/60"
                      }`}
                    >
                      <CompCell value={row.inhouse} />
                    </div>
                    <div
                      className={`px-4 py-4 border-l border-sage/20 flex items-center justify-center ${
                        i % 2 === 0 ? "bg-sage/5" : "bg-sage/8"
                      }`}
                    >
                      <CompCell value={row.northoak} />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SLA + Guarantee ──────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              {...fadeUp}
              className="text-center mb-12 max-w-xl mx-auto"
            >
              <p className="text-sm font-semibold text-sage uppercase tracking-widest mb-4">
                Our Commitments
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                What we guarantee
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <motion.div
                {...fadeUp}
                className="relative rounded-3xl border border-sage/25 overflow-hidden p-8 md:p-10"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 100%)",
                  boxShadow:
                    "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
                }}
              >
                <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Clock className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  5-business-day match SLA
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From your intake call to a specialist's first day — we move
                  fast without cutting corners. Most matches happen in 3–4 days.
                </p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-3xl border border-sage/25 overflow-hidden p-8 md:p-10"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 100%)",
                  boxShadow:
                    "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
                }}
              >
                <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  Guaranteed service
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  If the match isn't right — at any point — we find a new
                  specialist at no additional cost. No paperwork, no delays.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-12">
              <p className="text-sm font-semibold text-sage uppercase tracking-widest mb-4">
                FAQ
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Common questions
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto"
            >
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-display font-semibold text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
