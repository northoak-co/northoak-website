import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import ServiceHero from "@/components/ServiceHero";
import LogoCarousel from "@/components/LogoCarousel";
import ClientTestimonials from "@/components/ClientTestimonials";
import hrAdminImg from "@/assets/characters/executive-assistance-hero.png";

export const meta = () => [
  ...pageMeta({
    title: "Executive Assistance Outsourcing | NorthOak",
    description:
      "Dedicated executive assistants, virtual assistants, and chief of staff associates who manage calendars, inboxes, travel, and stakeholder coordination so executives can focus.",
    path: "/services/executive-assistance",
  }),
  serviceSchema({
    name: "Executive Assistance",
    description:
      "Outsourced executive assistance — EAs, VAs, and chief of staff associates — for calendar management, inbox triage, travel booking, and high-context stakeholder coordination.",
    path: "/services/executive-assistance",
    serviceType: "Executive Assistance Outsourcing",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Executive Assistance", path: "/services/executive-assistance" },
  ]),
];

const roles = [
  { name: "Executive Assistant", slug: "executive-assistant", description: "Calendar, email, travel, and high-context stakeholder coordination." },
  { name: "Virtual Assistant", slug: "virtual-assistant", description: "Broad task support across scheduling, admin, and research." },
];

const tasks = [
  "Calendar management — scheduling, conflicts, and prep materials",
  "Email triage, drafting, and stakeholder follow-ups",
  "Travel booking — flights, hotels, ground transport, and itineraries",
  "Meeting preparation — briefing documents, agendas, and action item tracking",
  "Expense tracking and administrative coordination",
  "Vendor and stakeholder relationship management",
];

const whyNorthOak = [
  {
    title: "Reclaim 15+ hours per week",
    description: "The average executive spends 15–20 hours per week on tasks an EA can own. NorthOak gives that time back so you can stay in your highest-leverage work.",
  },
  {
    title: "65% cost savings",
    description: "A domestic EA costs $75,000–$110,000 fully loaded. NorthOak starts at $2,000/mo, all-inclusive — no recruiting fee, no benefits overhead.",
  },
  {
    title: "Matched to your communication style",
    description: "We spend week one onboarding your EA to your voice, preferences, stakeholder priorities, and decision-making style. Delegates feel native within 2–3 weeks.",
  },
  {
    title: "Guaranteed service",
    description: "If the match isn't right, we rematch within 5 business days at no cost. No lock-in, no penalty.",
  },
];

const ExecutiveAssistanceService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          icon={Briefcase}
          category="Outsourced Services"
          title="Executive Assistance"
          description="Reclaim your highest-value hours with a dedicated EA who manages your calendar, inbox, travel, and stakeholder communications so you stay focused on what only you can do."
          ctaLabel="Hire an Executive Assistant"
          image={hrAdminImg}
          imageAlt="Executive assistant"
          guarantee="✓ Guaranteed service · Starts at $2,000/mo"
        />
        <LogoCarousel />

        {/* Context */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Why the best executives have the best support</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The time cost of managing your own calendar, inbox, and travel isn't just the hours spent — it's the context switching, the cognitive overhead, and the low-leverage work that displaces high-leverage thinking. Research consistently shows that executives with strong EA support make better decisions, respond faster, and lead more effectively.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  NorthOak's Executive Assistants are more than schedulers. They're proactive partners who learn your priorities, anticipate your needs, and manage your operational reality so you can stay in the work that drives outcomes. And at a fraction of the domestic cost.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tasks */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(102 18% 93%)" }}>
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What a NorthOak EA takes off your plate</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Everything on this list can be handled by your dedicated EA, working your hours in your time zone.</p>
            </motion.div>
            <div className="max-w-2xl mx-auto grid gap-4">
              {tasks.map((task, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex items-start gap-3 bg-background rounded-2xl border border-border p-4">
                  <span className="flex-shrink-0 w-5 h-5 bg-sage/10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </span>
                  <span className="text-foreground">{task}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why NorthOak */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why executives choose NorthOak</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyNorthOak.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-2xl border border-border p-6 hover:border-sage/50 transition-colors">
                  <h3 className="font-sans text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(102 18% 93%)" }}>
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Executive assistance roles available through NorthOak</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Each role comes with dedicated placement and our 5-business-day match guarantee.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {roles.map((role, index) => (
                <motion.div key={role.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link to={`/roles/${role.slug}`} className="group flex items-start justify-between bg-background rounded-2xl border border-border p-5 hover:border-sage/50 hover:shadow-hover transition-all duration-300">
                    <div>
                      <h3 className="font-sans text-base font-semibold text-foreground mb-1 group-hover:text-sage transition-colors">{role.name}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-sage flex-shrink-0 ml-3 mt-0.5 transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ClientTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default ExecutiveAssistanceService;
