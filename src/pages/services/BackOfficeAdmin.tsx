import { motion } from "framer-motion";
import { FileText, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import ServiceHero from "@/components/ServiceHero";
import hrAdminImg from "@/assets/characters/hr-admin.png";

export const meta = () => [
  ...pageMeta({
    title: "Back Office Administration Outsourcing | NorthOak",
    description:
      "Outsource data entry, operations coordination, document management, and order processing to free your team from administrative work and scale without the overhead.",
    path: "/services/back-office-admin",
  }),
  serviceSchema({
    name: "Back Office Administration",
    description:
      "Outsourced back office specialists — data entry, operations coordinators, document management, and order processing — for accurate, scalable operational workflows.",
    path: "/services/back-office-admin",
    serviceType: "Back Office Outsourcing",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Back Office Administration", path: "/services/back-office-admin" },
  ]),
];

const roles = [
  { name: "Data Entry Specialist", slug: "data-entry-specialist", description: "High-accuracy data entry, migration, and database maintenance." },
  { name: "Operations Coordinator", slug: "operations-coordinator", description: "Process execution, SOP documentation, and cross-functional coordination." },
];

const tasks = [
  "High-volume data entry and database record maintenance",
  "Order processing, fulfillment coordination, and status updates",
  "Document management — filing, digitization, and version control",
  "Inventory tracking and stock level reporting",
  "SOP documentation and process workflow management",
  "Operations reporting and performance dashboards",
];

const whyNorthOak = [
  {
    title: "Accuracy at scale",
    description: "Our data entry and back office specialists are measured on error rates. We benchmark under 0.5% error rate and report on quality monthly.",
  },
  {
    title: "60%+ cost savings",
    description: "A domestic operations coordinator or data entry specialist costs $45,000–$75,000 fully loaded. NorthOak starts at $2,000/mo, all-inclusive.",
  },
  {
    title: "Built for your workflows",
    description: "We onboard every specialist to your specific processes, tools, and quality standards — not a generic playbook.",
  },
  {
    title: "Guaranteed service",
    description: "If the match isn't right, we rematch within 5 business days at no additional cost. No lock-in.",
  },
];

const BackOfficeAdminService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          icon={FileText}
          category="Outsourced Services"
          title="Back Office Administration"
          description="Free your core team from administrative work with dedicated specialists who handle data entry, operations coordination, and document workflows accurately and at scale."
          ctaLabel="Build your ops team"
          image={hrAdminImg}
          imageAlt="Back office specialist"
          guarantee="✓ Guaranteed service · Starts at $2,000/mo"
        />

        {/* Context */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Why back office efficiency compounds over time</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Back office work is unglamorous but mission-critical. Inaccurate data, missed orders, disorganized documents, and poorly tracked processes quietly drain time and revenue from growing companies. The cost is invisible until it isn't — a compliance audit, a missed fulfillment, a duplicate payment, or a data migration failure.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  NorthOak embeds dedicated back office specialists who own data entry, operations coordination, document management, and order processing — handling the high-volume administrative work with documented accuracy standards so your team can focus on the work that moves the business.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tasks */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What NorthOak handles in your back office</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Every task on this list can be delegated to a vetted specialist working inside your tools and workflows.</p>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Back office roles available through NorthOak</h2>
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

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BackOfficeAdminService;
