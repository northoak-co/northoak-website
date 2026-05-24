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
  UserCheck,
  Award,
  ChevronRight,
  Target,
  MessageSquare,
  BarChart3,
  CalendarCheck,
  Lightbulb,
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
    question: "What does the outcome-mapping process look like?",
    answer:
      "Your intake call isn't a scope review — it's a structured conversation about goals. We ask what success looks like at 30 days and 90 days, what's gone wrong with outsourcing before, and what you care about most. Everything is documented before work begins so there are no surprises.",
  },
  {
    question: "What happens during the first month?",
    answer:
      "We run a four-week structured ramp. Week 1 is learning and absorbing, with daily check-ins and full process documentation built alongside your account manager. Week 2 is supervised execution. Weeks 3–4 are stabilization. We don't call an engagement fully onboarded until a 10-point checklist is complete.",
  },
  {
    question: "How do you stay hands-on after onboarding?",
    answer:
      "Your specialist sends EOD updates daily and you have a weekly check-in with your account manager. Monthly performance reviews give you a chance to formally score the engagement. Your specialist also logs continuous improvement suggestions every week — the relevant ones get shared at each monthly review.",
  },
  {
    question: "What if something isn't working?",
    answer:
      "We catch most issues before you raise them. Your account manager reviews agent work daily during the first month, and we have an internal escalation process for addressing problems early. If the match isn't right at any point, we find a replacement at no additional cost.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "How It Works | NorthOak",
    description:
      "NorthOak stays hands-on from intake through ongoing management — with outcome mapping, a four-week structured ramp, daily oversight, and monthly performance reviews.",
    path: "/how-it-works",
  }),
  faqSchema(faqs),
];

const kpis = [
  { number: "30 days", label: "Structured ramp period" },
  { number: "< 5%", label: "Of applicants placed" },
  { number: "10 min", label: "Response acknowledgment" },
  { number: "Daily", label: "EOD updates, every day" },
];

const processSteps = [
  {
    number: "01",
    phase: "Outcome Mapping",
    title: "We start with your goals, not a job description",
    description:
      "Before we discuss candidates, we map what you actually want to achieve. What does success look like at 30 days and 90? What's failed with outsourcing before? We ask the questions most vendors skip — and document the answers before anyone starts work.",
    deliverables: [
      "30 & 90-day goal framework",
      "Role scope + success metrics",
      "Written expectations confirmed upfront",
    ],
    icon: Target,
  },
  {
    number: "02",
    phase: "Matching",
    title: "Meet specialists who've already proven themselves",
    description:
      "Within days, we introduce 1–2 pre-vetted candidates. Fewer than 5% of applicants reach placement — every person you meet has cleared a four-stage process including a paid trial task on real client workflows.",
    deliverables: [
      "1–2 curated candidates",
      "Assessment results + work samples",
      "Interview scheduling support",
    ],
    icon: UserCheck,
  },
  {
    number: "03",
    phase: "Structured Onboarding",
    title: "A supervised ramp, not a cold start",
    description:
      "Your specialist goes through a dedicated four-week ramp: daily check-ins, supervised task execution, and full process documentation built alongside your account manager. We don't call it done until everything is running smoothly.",
    deliverables: [
      "Dedicated onboarding lead",
      "Daily EOD updates from day one",
      "Shared Notion documentation",
    ],
    icon: Rocket,
  },
];

const rampPhases = [
  {
    week: "Week 1",
    abbr: "Wk 1",
    title: "Learning",
    description:
      "Your specialist absorbs your tools, processes, and how your business operates. Daily check-ins with your account manager. Questions are encouraged — we use them to build your process documentation from scratch.",
    cadence: "Daily check-ins",
  },
  {
    week: "Week 2",
    abbr: "Wk 2",
    title: "Practicing",
    description:
      "Your specialist starts executing tasks under supervision. When mistakes happen, we flag them, fix them, and document what changed. This is when training clicks into place.",
    cadence: "Every-other-day check-ins",
  },
  {
    week: "Weeks 3–4",
    abbr: "Wk 3–4",
    title: "Stabilizing",
    description:
      "Your specialist runs core responsibilities independently. Questions taper significantly. All processes are fully documented in Notion by the end of this period.",
    cadence: "Weekly check-ins",
  },
  {
    week: "End of Month 1",
    abbr: "Mo 1",
    title: "Graduation",
    description:
      "Before we call you fully onboarded, we run a 10-point checklist covering documentation, reporting cadence, communication setup, and client satisfaction alignment. Performance tracking starts here.",
    cadence: "10-point checklist",
  },
];

const commitments = [
  {
    icon: MessageSquare,
    title: "10-minute response acknowledgment",
    description:
      "Every client message is acknowledged within 10 minutes — even if the full answer takes longer. No silence, ever.",
  },
  {
    icon: CalendarCheck,
    title: "Daily EOD updates",
    description:
      "Your specialist sends a daily update: what got done, any blockers, open questions. Sent every business day.",
  },
  {
    icon: Users,
    title: "Dedicated onboarding lead",
    description:
      "Every engagement has a named onboarding lead who coordinates the ramp — not just a generic account manager.",
  },
  {
    icon: ShieldCheck,
    title: "Daily manager QA during month 1",
    description:
      "A manager reviews your specialist's work every day during the ramp period. We catch problems before you notice them.",
  },
  {
    icon: BarChart3,
    title: "Monthly performance reviews",
    description:
      "You score the engagement monthly. Anything below threshold triggers a direct conversation — not just a logged number.",
  },
  {
    icon: Lightbulb,
    title: "Continuous improvement, tracked weekly",
    description:
      "Your specialist logs operational suggestions every week. The relevant ones get brought to your monthly review.",
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
    label: "Outcome mapping upfront",
    agency: false,
    inhouse: false,
    northoak: true,
  },
  {
    label: "Structured 4-week ramp",
    agency: false,
    inhouse: false,
    northoak: true,
  },
  {
    label: "Daily EOD updates",
    agency: false,
    inhouse: false,
    northoak: true,
  },
  {
    label: "Multi-stage vetting + trial task",
    agency: false,
    inhouse: false,
    northoak: true,
  },
  {
    label: "Annual team attrition",
    agency: "25%+ typical",
    inhouse: "Variable",
    northoak: "< 5%",
  },
  {
    label: "Payroll & compliance",
    agency: false,
    inhouse: "Your burden",
    northoak: true,
  },
  {
    label: "Monthly performance reviews",
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
    label: "Replacement guarantee",
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
                  Outsourcing built{" "}
                  <span className="text-sage italic">around</span>
                  <br />
                  your outcomes.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
                >
                  Most vendors place someone and step back. We stay in it — with
                  a dedicated onboarding lead, four-week structured ramp, daily
                  oversight, and monthly performance reviews — until your goals
                  are being met.
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

              {/* Right: ramp phase preview cards */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="hidden lg:flex flex-col gap-3"
              >
                {rampPhases.map((phase, i) => (
                  <motion.div
                    key={phase.week}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-sage/30 hover:shadow-card transition-all duration-300 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "hsl(102 40% 20%)" }}
                    >
                      <span className="text-white font-bold text-xs font-mono text-center leading-tight">
                        {phase.abbr}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-sage uppercase tracking-wider mb-0.5">
                        {phase.week}
                      </div>
                      <div className="text-sm font-semibold text-foreground truncate">
                        {phase.title}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground/50 flex-shrink-0 hidden xl:block">
                      {phase.cadence}
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/30 flex-shrink-0 group-hover:text-sage/50 transition-colors" />
                  </motion.div>
                ))}

                <div className="flex items-center gap-2 px-4 mt-1">
                  <Clock className="w-3.5 h-3.5 text-sage/50" />
                  <span className="text-xs text-muted-foreground">
                    Four-week structured ramp, every client
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
                Three phases, all deeply managed
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

        {/* ── Inside the First Month ────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-sage uppercase tracking-widest mb-4">
                The Ramp
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Inside the first month
              </h2>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                Most outsourcing services hand you someone and leave you to figure out the rest. We run a structured four-week program — with milestones, daily oversight, and a graduation checklist before we call it done.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {rampPhases.map((phase, index) => (
                <motion.div
                  key={phase.week}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-card rounded-3xl border border-border p-6 hover:border-sage/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-sage/10 text-sage text-xs font-semibold">
                      {phase.week}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {phase.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-sage font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    {phase.cadence}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Hands-On Looks Like ──────────────────────────────── */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-sage uppercase tracking-widest mb-4">
                Our Commitments
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                This is what hands-on actually looks like
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {commitments.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    className="bg-background rounded-3xl border border-border p-6 hover:border-sage/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-sage" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Guarantee cards */}
            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <motion.div
                {...fadeUp}
                className="relative rounded-3xl border border-sage/25 overflow-hidden p-8"
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
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  5-business-day match SLA
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  From your intake call to a specialist's first day — we move
                  fast without cutting corners. Most matches happen in 3–4 days.
                </p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-3xl border border-sage/25 overflow-hidden p-8"
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
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Guaranteed service
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  If the match isn't right — at any point — we find a new
                  specialist at no additional cost. No paperwork, no delays.
                </p>
              </motion.div>
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
                  We run a four-stage process combining portfolio review,
                  real-tool skills testing, video interviews, and a paid trial
                  task on actual client workflows. Only top performers reach
                  placement.
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

        {/* ── Culture & Retention ──────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: big stat */}
              <motion.div {...fadeUp} className="lg:sticky lg:top-32">
                <p className="text-sm font-semibold text-sage uppercase tracking-widest mb-4">
                  The Culture
                </p>
                <div className="font-display text-8xl md:text-9xl font-bold text-sage leading-none mb-4">
                  &lt;5%
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
                  Annual attrition. That's not an accident.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most outsourcing companies deal with constant turnover — which means clients repeatedly re-train new people and lose the deep familiarity that makes a specialist genuinely valuable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We've built a working environment our team wants to stay in. We invest heavily in developing every team member — their skills, their career, their experience at work. The result is a team that brings genuine care to what they do, and specialists who are still with your account a year from now.
                </p>
              </motion.div>

              {/* Right: what this means for clients */}
              <div className="space-y-4">
                {[
                  {
                    title: "No constant re-training",
                    description:
                      "When your specialist stays, you're not starting from scratch every few months. Your workflows, preferences, and institutional context accumulate — they don't reset.",
                  },
                  {
                    title: "Expertise that compounds",
                    description:
                      "A specialist who's worked in your systems for a year operates at a fundamentally different level than one who's still learning. Depth of familiarity drives quality of output.",
                  },
                  {
                    title: "A team that's invested",
                    description:
                      "Specialists who work somewhere they're valued bring more care to the work they do. We invest in developing the best team members, and that investment shows up in the results you get.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-2xl border border-border p-6 hover:border-sage/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-5 h-5 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-sage" strokeWidth={2.5} />
                      </div>
                      <h3 className="font-display font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
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

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background">
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
