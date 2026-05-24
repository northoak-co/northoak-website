import { motion } from "framer-motion";
import { PiggyBank, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import ServiceHero from "@/components/ServiceHero";
import financeAccountingImg from "@/assets/characters/finance-accounting.png";

export const meta = () => [
  ...pageMeta({
    title: "Finance and Accounting Outsourcing | NorthOak",
    description:
      "Outsource bookkeepers, AP/AR specialists, payroll specialists, and financial analysts for accurate books, clean month-end close, and full financial visibility.",
    path: "/services/finance-accounting",
  }),
  serviceSchema({
    name: "Finance and Accounting",
    description:
      "Outsourced finance and accounting specialists — bookkeepers, AP/AR specialists, payroll specialists — for bookkeeping, month-end close, financial reporting, and compliance.",
    path: "/services/finance-accounting",
    serviceType: "Finance and Accounting Outsourcing",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Finance and Accounting", path: "/services/finance-accounting" },
  ]),
];

const roles = [
  { name: "Bookkeeper", slug: "bookkeeper", description: "Transaction categorization, reconciliation, and monthly close." },
  { name: "Accounts Payable Specialist", slug: "accounts-payable-specialist", description: "Invoice processing, vendor management, and payment runs." },
  { name: "Accounts Receivable Specialist", slug: "accounts-receivable-specialist", description: "Invoicing, collections, and cash application." },
  { name: "Payroll Specialist", slug: "payroll-specialist", description: "Payroll processing, tax compliance, and year-end reporting." },
];

const tasks = [
  "Daily transaction categorization and bank reconciliation",
  "Accounts payable — invoice processing, vendor payments, and AP aging",
  "Accounts receivable — invoicing, collections follow-up, and cash application",
  "Payroll processing and multi-state tax compliance",
  "Month-end close and financial statement preparation",
  "Expense management and management reporting",
];

const whyNorthOak = [
  {
    title: "Books that are always current",
    description: "No more catching up on 3 months of unreconciled transactions before your CPA calls. NorthOak specialists keep your books current on a daily or weekly cadence.",
  },
  {
    title: "60%+ cost savings",
    description: "A domestic bookkeeper or AP specialist costs $60,000–$100,000 fully loaded. NorthOak starts at $2,000/mo, all-inclusive.",
  },
  {
    title: "Accounting platform experts",
    description: "Our specialists are proficient in QuickBooks Online, Xero, NetSuite, and Bill.com — and are trained in your chart of accounts before day one.",
  },
  {
    title: "Guaranteed service",
    description: "If the match isn't right, we rematch within 5 business days at no cost. No penalties, no lock-in.",
  },
];

const FinanceAccountingService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          icon={PiggyBank}
          category="Outsourced Services"
          title="Finance and Accounting"
          description="Accurate books, clean close, and full financial visibility — with dedicated finance specialists working in your accounting stack at 60% of domestic cost."
          ctaLabel="Build your finance team"
          image={financeAccountingImg}
          imageAlt="Finance specialist"
          guarantee="✓ Guaranteed service · Starts at $2,000/mo"
        />

        {/* Context */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Why clean financials are a growth-stage advantage</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Investors, acquirers, and lenders make decisions based on your financials. Founders make decisions based on them too — but most growth-stage companies are running on books that are weeks behind, reconciled once a quarter, or full of miscategorized transactions. That's a risk, not a convenience.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  NorthOak embeds dedicated finance specialists who own the bookkeeping, AP/AR, payroll, and monthly close cycle — so your CPA gets clean books, your leadership gets accurate reporting, and your finance function scales without adding costly domestic headcount.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tasks */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What NorthOak handles in your finance org</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Every task on this list can be delegated to a vetted specialist working inside your accounting software.</p>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Finance roles available through NorthOak</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Each role comes with dedicated placement, accounting platform training, and our 5-business-day match guarantee.</p>
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

export default FinanceAccountingService;
