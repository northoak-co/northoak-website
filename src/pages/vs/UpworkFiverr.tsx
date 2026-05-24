import { motion } from "framer-motion";
import { ArrowRight, Users, Shield, Clock } from "lucide-react";
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
    question: "Can I use Upwork for ongoing operations work?",
    answer:
      "Technically yes, but it's not designed for it. Upwork's contract structure is project- or hourly-based, and freelancers often juggle multiple clients simultaneously. For roles that need consistency, institutional knowledge, and daily availability, a dedicated specialist is a better fit.",
  },
  {
    question: "Is NorthOak more expensive than Upwork?",
    answer:
      "For comparable ongoing work, no. A dedicated Upwork contractor at $30–50/hr working full-time costs $5,000–$8,000/mo — before platform fees (20% on the first $500, 10% up to $10K). NorthOak starts at $2,000/mo, all-inclusive.",
  },
  {
    question: "What happens if I need to replace a specialist?",
    answer:
      "On Upwork, you re-post, re-screen, and re-negotiate — typically 2–4 weeks of lost productivity. With NorthOak, replacement is free and handled by us, usually within 5 business days.",
  },
  {
    question: "Do I still own the work output?",
    answer:
      "Yes. All work produced by your NorthOak specialist belongs to you. We include IP assignment clauses in our service agreement.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "NorthOak vs Upwork & Fiverr | Dedicated Specialists vs Freelancers",
    description:
      "See how NorthOak compares to Upwork and Fiverr for ongoing operations roles. Dedicated specialists, vetted hiring, and free replacement — vs gig-based freelancers.",
    path: "/vs/upwork-fiverr",
  }),
  faqSchema(faqs),
];

const comparisonRows = [
  {
    feature: "Engagement type",
    northoak: "Dedicated, full-time specialist",
    other: "Freelance, project-based",
  },
  {
    feature: "Availability",
    northoak: "Your hours, every day",
    other: "Varies by freelancer",
  },
  {
    feature: "Vetting",
    northoak: "Multi-stage interview + trial task",
    other: "Self-reported skills",
  },
  {
    feature: "Account management",
    northoak: "Dedicated account manager",
    other: "None",
  },
  {
    feature: "Payroll & compliance",
    northoak: "We handle it",
    other: "Your responsibility",
  },
  {
    feature: "Replacement",
    northoak: "Free, any time",
    other: "Re-hire from scratch",
  },
  {
    feature: "Contract",
    northoak: "Month-to-month",
    other: "Per project or hourly",
  },
  {
    feature: "Starts at",
    northoak: "$2,000/mo",
    other: "Varies widely",
  },
];

const calloutCards = [
  {
    icon: Users,
    title: "Dedicated, not pooled",
    description:
      "Your specialist works only for you. No shared queues, no handoffs.",
  },
  {
    icon: Shield,
    title: "Vetted through a rigorous process",
    description:
      "Every specialist passes a multi-stage skills assessment and trial task before being matched.",
  },
  {
    icon: Clock,
    title: "Free replacement, always",
    description:
      "If the fit isn't right, we find you a better match at no cost.",
  },
];

const UpworkFiverr = () => {
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
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-sm font-medium text-sage uppercase tracking-widest mb-4"
                  >
                    NorthOak vs
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
                  >
                    Dedicated specialists vs Upwork &amp; Fiverr
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                  >
                    Upwork and Fiverr are great for one-off projects. NorthOak is built for ongoing operations work — roles that need someone embedded in your tools, working your hours, every day.
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

        {/* Comparison Table */}
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
                How they compare
              </h2>
            </motion.div>

            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto bg-card rounded-2xl border border-border overflow-hidden"
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3 font-semibold text-foreground">Feature</TableHead>
                    <TableHead className="w-1/3 font-semibold text-foreground bg-sage/5">NorthOak</TableHead>
                    <TableHead className="w-1/3 font-semibold text-foreground">Upwork / Fiverr</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonRows.map((row) => (
                    <TableRow key={row.feature}>
                      <TableCell className="text-muted-foreground font-medium">{row.feature}</TableCell>
                      <TableCell className="text-sage font-medium bg-sage/5">{row.northoak}</TableCell>
                      <TableCell className="text-muted-foreground">{row.other}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </motion.div>
          </div>
        </section>

        {/* Callout Cards */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {calloutCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6"
                >
                  <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                </motion.div>
              ))}
            </div>
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

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default UpworkFiverr;
