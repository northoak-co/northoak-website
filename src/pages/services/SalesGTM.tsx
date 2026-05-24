import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const meta = () => [
  ...pageMeta({
    title: "Sales and Go-to-Market Outsourcing | NorthOak",
    description:
      "Outsource SDRs, CRM managers, sales ops analysts, and lead generation specialists to build a reliable pipeline and revenue engine at a fraction of the domestic cost.",
    path: "/services/sales-gtm",
  }),
  serviceSchema({
    name: "Sales and Go-to-Market",
    description:
      "Outsourced sales and go-to-market specialists — SDRs, CRM managers, sales ops analysts, and lead generation — to build pipeline and drive revenue growth.",
    path: "/services/sales-gtm",
    serviceType: "Sales Outsourcing",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Sales and Go-to-Market", path: "/services/sales-gtm" },
  ]),
];

const roles = [
  { name: "Sales Development Representative", slug: "sdr", description: "Outbound prospecting, cold outreach, and meeting booking." },
  { name: "CRM Manager", slug: "crm-manager", description: "Pipeline hygiene, workflow automation, and CRM reporting." },
  { name: "Sales Operations Analyst", slug: "sales-ops-analyst", description: "Pipeline reporting, quota tracking, and GTM process design." },
  { name: "Lead Generation Specialist", slug: "lead-gen-specialist", description: "Prospect list building, data enrichment, and campaign setup." },
];

const tasks = [
  "Outbound prospecting and cold outreach sequence execution",
  "Inbound lead qualification and scoring against your ICP",
  "CRM data hygiene, deduplication, and pipeline management",
  "Sales reporting, forecasting dashboards, and quota tracking",
  "Prospect list building and contact data enrichment",
  "Territory mapping, segmentation design, and sales process documentation",
];

const whyNorthOak = [
  {
    title: "Deploy in 5 business days",
    description: "Your specialist is matched, vetted, and embedded in your tools faster than most companies can schedule a second interview.",
  },
  {
    title: "60–70% cost savings",
    description: "A domestic SDR or CRM manager costs $70,000–$110,000 fully loaded. NorthOak starts at $2,000/mo with no recruiting fees or benefits overhead.",
  },
  {
    title: "GTM-trained specialists",
    description: "Every sales specialist is assessed in the actual tools — Salesforce, HubSpot, Outreach, Apollo — before you ever see their profile.",
  },
  {
    title: "Guaranteed service",
    description: "If the match isn't right, we'll find a replacement in 5 business days at no additional cost. No contract lock-in.",
  },
];

const SalesGTM = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-background pt-4 pb-8 overflow-hidden">
          <div className="mx-auto px-3 md:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
              style={{
                background: "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
                boxShadow: "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
              }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, hsl(102 44% 51% / 0.3) 0%, transparent 70%)" }} />
                <div className="absolute -bottom-48 -left-32 w-[700px] h-[700px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, hsl(102 40% 55% / 0.25) 0%, transparent 70%)" }} />
              </div>
              <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }} className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-sage/10 rounded-2xl mb-6">
                    <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-sage" />
                  </motion.div>
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-sage font-medium text-sm md:text-base uppercase tracking-wide mb-4">
                    Outsourced Services
                  </motion.p>
                  <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                    Sales and Go-to-Market
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    Build a predictable pipeline and revenue engine with dedicated sales specialists — SDRs, CRM managers, and ops analysts — at 60–70% less than domestic hiring costs.
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex justify-center">
                    <Link to="/get-started">
                      <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden">
                        <span className="px-6 py-3 text-white font-medium">Build your sales team</span>
                        <span className="flex items-center justify-center w-10 h-10 m-1.5 bg-white rounded-full">
                          <ArrowRight className="w-4 h-4 text-sage" />
                        </span>
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Context section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Why sales execution matters as you scale</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  In the early stages, founders close deals. But as you scale, the gap between pipeline generation and revenue realization grows. SDRs who don't prospect consistently, CRMs full of stale data, and sales ops that lives in spreadsheets — these become the silent killers of growth-stage companies.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  NorthOak embeds dedicated sales specialists who own the execution layer of your go-to-market motion — outbound prospecting, CRM hygiene, pipeline reporting, and lead qualification — so your Account Executives spend their time closing, not hunting.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tasks */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What NorthOak handles in your sales org</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Every task on this list can be delegated to a vetted NorthOak specialist working your hours, in your tools.</p>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Sales roles available through NorthOak</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Each role comes with dedicated placement, vetting, and our 5-business-day match guarantee.</p>
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

export default SalesGTM;
