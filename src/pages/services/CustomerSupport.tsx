import { motion } from "framer-motion";
import { HeadphonesIcon, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceHero from "@/components/ServiceHero";
import customerSupportImg from "@/assets/characters/customer-support.png";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const meta = () => [
  ...pageMeta({
    title: "Customer Support and Client Success Outsourcing | NorthOak",
    description:
      "Outsource customer support agents, CSMs, and technical support specialists for faster response times, higher CSAT, and proactive churn prevention.",
    path: "/services/customer-support",
  }),
  serviceSchema({
    name: "Customer Support and Client Success",
    description:
      "Outsourced customer support and client success specialists — support agents, CSMs, and technical support — for ticket management, CSAT improvement, and churn reduction.",
    path: "/services/customer-support",
    serviceType: "Customer Support Outsourcing",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Customer Support and Client Success", path: "/services/customer-support" },
  ]),
];

const roles = [
  { name: "Customer Support Agent", slug: "customer-support-agent", description: "Email, chat, and ticket management in Zendesk, Gorgias, and Freshdesk." },
  { name: "Customer Success Manager", slug: "customer-success-manager", description: "Onboarding, health monitoring, QBRs, and renewal management." },
  { name: "Technical Support Specialist", slug: "tech-support-specialist", description: "L1/L2 troubleshooting, API support, and knowledge base management." },
];

const tasks = [
  "Ticket triage, categorization, and resolution in Zendesk or Gorgias",
  "Live chat coverage with sub-1-hour first response targets",
  "CSAT tracking and quality assurance reporting",
  "Customer onboarding and 90-day health monitoring",
  "Churn risk identification and proactive retention outreach",
  "L1/L2 technical troubleshooting and escalation routing",
];

const whyNorthOak = [
  {
    title: "CSAT targets built in",
    description: "Every support specialist comes with agreed CSAT and response time targets. We track them weekly and flag drift before it becomes a problem.",
  },
  {
    title: "60–65% cost savings",
    description: "A domestic support agent or CSM costs $55,000–$90,000 fully loaded. NorthOak starts at $2,000/mo, all-inclusive.",
  },
  {
    title: "Trained on your product",
    description: "Every specialist goes through structured product onboarding in week one — your knowledge base, escalation matrix, and ticket workflows.",
  },
  {
    title: "Guaranteed service",
    description: "If the match isn't working, we rematch within 5 business days at no cost. No contract penalties.",
  },
];

const CustomerSupportService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          icon={HeadphonesIcon}
          category="Outsourced Services"
          title="Customer Support and Client Success"
          description="Deliver fast, high-quality support and proactive customer success at scale — with dedicated specialists trained in your product, working your hours."
          ctaLabel="Build your support team"
          image={customerSupportImg}
          imageAlt="Customer support specialist"
          guarantee="✓ Guaranteed service · Starts at $2,000/mo"
        />

        {/* Context */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">How customer support drives retention and revenue</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Customer support is no longer just a cost center — it's a retention and revenue function. Response time, resolution quality, and proactive success management directly impact churn rates, NPS, and expansion revenue. Companies that treat support as strategic outsource it to specialists who do it well.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  NorthOak embeds dedicated support agents and CSMs who own ticket management, CSAT, customer onboarding, and churn prevention — working in your tools, following your escalation matrix, and holding themselves to the same metrics your internal team does.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tasks */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What NorthOak handles in your support org</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Every task on this list can be delegated to a vetted specialist working your hours, in your helpdesk.</p>
            </motion.div>
            <div className="max-w-2xl mx-auto grid gap-4">
              {tasks.map((task, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex items-start gap-3 bg-background rounded-xl border border-border p-4">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why growing companies choose NorthOak</h2>
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
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Support roles available through NorthOak</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Each role comes with dedicated placement, product training, and our 5-business-day match guarantee.</p>
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

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CustomerSupportService;
