import { motion } from "framer-motion";
import { Users, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import ServiceHero from "@/components/ServiceHero";
import LogoCarousel from "@/components/LogoCarousel";
import ClientTestimonials from "@/components/ClientTestimonials";
import hrAdminImg from "@/assets/characters/hr-admin.png";

export const meta = () => [
  ...pageMeta({
    title: "Human Resources and People Operations Outsourcing | NorthOak",
    description:
      "Outsource HR coordinators, recruiters, and onboarding specialists to streamline hiring, onboarding, payroll admin, and compliance — without the overhead.",
    path: "/services/hr-people-ops",
  }),
  serviceSchema({
    name: "Human Resources and People Operations",
    description:
      "Outsourced HR and people operations specialists — HR coordinators, recruiters, and onboarding coordinators — for hiring, onboarding, payroll admin, and compliance workflows.",
    path: "/services/hr-people-ops",
    serviceType: "HR Outsourcing",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Human Resources and People Operations", path: "/services/hr-people-ops" },
  ]),
];

const roles = [
  { name: "HR Coordinator", slug: "hr-coordinator", description: "Recruiting coordination, benefits admin, and HR record keeping." },
  { name: "Recruiter", slug: "recruiter", description: "Full-cycle talent acquisition without agency fees." },
  { name: "Onboarding Coordinator", slug: "onboarding-coordinator", description: "New hire logistics, documentation, and 90-day milestone tracking." },
];

const tasks = [
  "Recruiting coordination — scheduling, candidate communications, and ATS management",
  "New hire onboarding — paperwork, system access, and orientation logistics",
  "Benefits enrollment and open enrollment administration",
  "Payroll preparation and timesheet consolidation",
  "HR documentation — offer letters, policies, and employee records",
  "PTO tracking, leave management, and compliance record-keeping",
];

const whyNorthOak = [
  {
    title: "People ops without the headcount",
    description: "Get a dedicated HR specialist working inside your tools and processes without adding a full-time domestic employee to your payroll.",
  },
  {
    title: "60%+ cost savings",
    description: "A domestic HR coordinator or recruiter costs $55,000–$85,000 fully loaded. NorthOak starts at $2,000/mo, all-inclusive.",
  },
  {
    title: "HRIS-trained specialists",
    description: "Our HR specialists are proficient in Gusto, BambooHR, Rippling, Greenhouse, and Lever — and can adapt to your existing stack.",
  },
  {
    title: "Guaranteed service",
    description: "If the match isn't right, we rematch within 5 business days at no cost. No lock-in.",
  },
];

const HRPeopleOps = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          icon={Users}
          category="Outsourced Services"
          title="Human Resources and People Operations"
          description="Streamline hiring, onboarding, payroll administration, and compliance with dedicated HR specialists working inside your existing tools and processes."
          ctaLabel="Build your HR team"
          image={hrAdminImg}
          imageAlt="HR specialist"
          guarantee="✓ Guaranteed service · Starts at $2,000/mo"
        />
        <LogoCarousel />

        {/* Context */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Why people operations matters as headcount grows</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The administrative burden of HR scales faster than your headcount. Every new hire creates recruiting logistics, onboarding workflows, benefits administration, and compliance obligations. Most founders and HR leads spend more time in spreadsheets than in strategy — and as the team grows, operational failures become retention and compliance risks.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  NorthOak embeds dedicated HR coordinators, recruiters, and onboarding specialists who own the operational layer — keeping your HR running accurately so your HR lead can focus on culture, org design, and talent strategy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tasks */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(102 18% 93%)" }}>
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What NorthOak handles in your HR org</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Every task on this list can be delegated to a vetted specialist working inside your HRIS and tools.</p>
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
        <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(102 18% 93%)" }}>
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">HR roles available through NorthOak</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Each role comes with dedicated placement, HRIS training, and our 5-business-day match guarantee.</p>
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

export default HRPeopleOps;
