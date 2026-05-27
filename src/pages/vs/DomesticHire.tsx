import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import ClientTestimonials from "@/components/ClientTestimonials";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { pageMeta, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "Is a full-time domestic hire always better?",
    answer:
      "For roles requiring physical presence, deep institutional knowledge built over years, or highly specialized domain expertise, yes. For operations roles that are process-driven and repeatable — CRM admin, support, bookkeeping, back-office — a dedicated remote specialist delivers equivalent output at 60–75% lower cost.",
  },
  {
    question: "What's included in NorthOak's monthly rate?",
    answer:
      "Your specialist's compensation, payroll processing, benefits, compliance, account management, onboarding support, and our replacement guarantee. There are no hidden fees.",
  },
  {
    question: "How does the replacement guarantee work?",
    answer:
      "If your specialist isn't a fit — for any reason — we rematch you at no cost. No rehire fee, no delay in service, no paperwork. Most rematches are completed within 5 business days.",
  },
  {
    question: "Do I lose productivity during a replacement?",
    answer:
      "We minimize it. While we find your new specialist, your account manager ensures continuity — maintaining SOPs, monitoring queue health, and providing coverage where possible.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "NorthOak vs Hiring Domestically | True Cost Calculator",
    description:
      "Calculate the true cost of a US hire vs NorthOak. Salary, benefits, taxes, PTO, and recruiting costs — side by side.",
    path: "/vs/domestic-hire",
  }),
  faqSchema(faqs),
];

const formatCurrency = (n: number) => "$" + Math.round(n).toLocaleString();

const comparisonRows = [
  { factor: "Time to hire", domestic: "4 – 8 weeks", northoak: "5 business days" },
  { factor: "Contract flexibility", domestic: "Full-time employment", northoak: "Month-to-month" },
  { factor: "Replacement", domestic: "4 – 8 week rehire cycle", northoak: "Free, any time" },
  { factor: "Ramp-up", domestic: "4 – 8 weeks", northoak: "5 – 7 days" },
  { factor: "Compliance", domestic: "Your responsibility", northoak: "Fully managed" },
  { factor: "Scaling down", domestic: "Severance + legal risk", northoak: "Cancel with notice" },
];

const DomesticHire = () => {
  const [salary, setSalary] = useState(60000);

  const monthlySalary = salary / 12;
  const employerTaxes = (salary * 0.0765) / 12;
  const benefits = (salary * 0.12) / 12;
  const pto = (salary * 0.04) / 12;
  const equipment = 167;
  const recruiting = Math.round((salary * 0.15) / 18);
  const totalDomestic = monthlySalary + employerTaxes + benefits + pto + equipment + recruiting;
  const northoak = 2000;
  const monthlySavings = totalDomestic - northoak;
  const annualSavings = monthlySavings * 12;

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
                background:
                  "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
                boxShadow:
                  "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
              }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 44% 51% / 0.3) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute -bottom-48 -left-32 w-[700px] h-[700px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 40% 55% / 0.25) 0%, transparent 70%)",
                  }}
                />
              </div>

              <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
                  >
                    The real cost of a domestic hire
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                  >
                    Base salary is the smallest part. Factor in benefits, payroll taxes, PTO, equipment, and recruiting — and most US roles cost 1.4–1.6× the base salary annually. NorthOak starts at $2,000/mo, all-inclusive.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <Link to="/get-started">
                      <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden">
                        <span className="px-6 py-3 text-white font-medium">Get started</span>
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
              </div>
            </motion.div>
          </div>
        </section>

        <LogoCarousel />

        {/* Calculator */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cost comparison calculator
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Enter a US base salary to see the full picture.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {/* Salary Input */}
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Annual base salary (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                    $
                  </span>
                  <input
                    type="number"
                    value={salary}
                    min={30000}
                    max={200000}
                    step={5000}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full border border-border rounded-xl pl-8 pr-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sage/30"
                  />
                </div>
              </motion.div>

              {/* Comparison Cards */}
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Domestic */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    US Domestic Hire
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Est. monthly fully-loaded cost
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Base salary</span>
                      <span className="text-foreground">{formatCurrency(monthlySalary)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Employer payroll taxes</span>
                      <span className="text-foreground">{formatCurrency(employerTaxes)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Benefits (health, dental, vision)</span>
                      <span className="text-foreground">{formatCurrency(benefits)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">PTO (15 days)</span>
                      <span className="text-foreground">{formatCurrency(pto)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Equipment (amortized)</span>
                      <span className="text-foreground">$167</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Recruiting (amortized)</span>
                      <span className="text-foreground">{formatCurrency(recruiting)}</span>
                    </div>
                    <div className="border-t border-border pt-3 mt-3 flex justify-between">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-bold text-xl text-foreground">
                        {formatCurrency(totalDomestic)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* NorthOak */}
                <div className="bg-sage/5 border border-sage/30 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    NorthOak
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Monthly all-inclusive rate
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Specialist + account management</span>
                      <span className="text-foreground">$2,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Benefits &amp; compliance</span>
                      <span className="text-sage font-medium">Included</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Recruiting</span>
                      <span className="text-sage font-medium">None</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Replacement guarantee</span>
                      <span className="text-sage font-medium">Included</span>
                    </div>
                    <div className="border-t border-sage/20 pt-3 mt-3 flex justify-between">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-bold text-xl text-sage">$2,000/mo</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Savings Callout */}
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-sage text-white rounded-2xl p-6 text-center mt-6"
              >
                <p className="text-sm text-white/80 mb-1">You save</p>
                <p className="font-bold text-3xl mb-1">
                  {formatCurrency(monthlySavings)}/mo
                </p>
                <p className="text-lg text-white/90">
                  {formatCurrency(annualSavings)}/year
                </p>
              </motion.div>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Estimates based on US averages. Actual costs vary by location, benefits package, and market conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Beyond the Numbers Table */}
        <section className="py-16" style={{ backgroundColor: "hsl(102 18% 93%)" }}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Beyond the numbers
              </h2>
            </motion.div>

            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto bg-background rounded-2xl border border-border overflow-hidden"
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3 font-semibold text-foreground">Factor</TableHead>
                    <TableHead className="w-1/3 font-semibold text-foreground">US Domestic Hire</TableHead>
                    <TableHead className="w-1/3 font-semibold text-foreground bg-sage/5">NorthOak</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonRows.map((row) => (
                    <TableRow key={row.factor}>
                      <TableCell className="text-muted-foreground font-medium">{row.factor}</TableCell>
                      <TableCell className="text-muted-foreground">{row.domestic}</TableCell>
                      <TableCell className="text-sage font-medium bg-sage/5">{row.northoak}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common questions
              </h2>
            </motion.div>

            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

        <ClientTestimonials />
      </main>

      <Footer />
    </div>
  );
};

export default DomesticHire;
