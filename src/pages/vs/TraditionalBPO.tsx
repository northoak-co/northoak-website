import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingDown, Calendar } from "lucide-react";
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
    question: "What's the difference between a dedicated specialist and a pooled BPO agent?",
    answer:
      "A pooled BPO agent handles work from multiple clients simultaneously, following a standardized playbook. A NorthOak specialist works exclusively for you — they know your tools, your SOPs, your customers, and your preferences. The quality difference is significant for complex or nuanced work.",
  },
  {
    question: "When does a traditional BPO make more sense?",
    answer:
      "For truly high-volume, standardized work at enterprise scale — 50+ FTEs, global multilingual coverage, complex telephony infrastructure — a traditional BPO may be the right fit. For growing companies that need 1–10 dedicated specialists with deep institutional knowledge, NorthOak is the better option.",
  },
  {
    question: "What's NorthOak's minimum commitment?",
    answer:
      "There is no FTE minimum. You can start with a single specialist. Month-to-month contracts mean you're never locked in.",
  },
  {
    question: "How does specialist continuity work?",
    answer:
      "Your specialist is assigned to you and only you. They attend your standups, learn your processes over time, and build institutional knowledge. If they leave, we match you with a replacement — free — within 5 business days.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "NorthOak vs Traditional BPO | Dedicated vs Pooled Staffing",
    description:
      "See how NorthOak compares to traditional BPOs. Dedicated specialists, no minimums, and month-to-month contracts — vs pooled agents and volume commitments.",
    path: "/vs/traditional-bpo",
  }),
  faqSchema(faqs),
];

const comparisonRows = [
  {
    factor: "Staffing model",
    northoak: "Dedicated, 1:1 specialist",
    other: "Pooled agents (shared)",
  },
  {
    factor: "Minimum commitment",
    northoak: "None",
    other: "Typically 10+ FTEs",
  },
  {
    factor: "Contract length",
    northoak: "Month-to-month",
    other: "12–36 month contracts",
  },
  {
    factor: "Time to hire",
    northoak: "5 business days",
    other: "4 – 12 weeks",
  },
  {
    factor: "Specialist continuity",
    northoak: "Same person, every day",
    other: "Agent rotation",
  },
  {
    factor: "Customization",
    northoak: "Deep — works your SOPs",
    other: "Standardized playbooks",
  },
  {
    factor: "Account management",
    northoak: "Dedicated manager",
    other: "Shared/tiered support",
  },
  {
    factor: "Replacement",
    northoak: "Free, any time",
    other: "Contractual process",
  },
];

const calloutCards = [
  {
    icon: Users,
    title: "Dedicated, not pooled",
    description:
      "You work with the same specialist every day. No ticket queues, no handoffs between agents who don't know your business.",
  },
  {
    icon: TrendingDown,
    title: "No volume minimums",
    description:
      "BPOs typically require 10–50 FTE minimums. NorthOak starts at one specialist, scales as you grow.",
  },
  {
    icon: Calendar,
    title: "Month-to-month contracts",
    description:
      "No 12-month lock-ins. We earn your business every month.",
  },
];

const TraditionalBPO = () => {
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
                    NorthOak vs traditional BPO
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                  >
                    Traditional BPOs were built for enterprise volume. NorthOak is built for growing companies that need dedicated specialists — not shared agents, not 12-month contracts, not enterprise minimums.
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
                    <TableHead className="w-1/3 font-semibold text-foreground">Factor</TableHead>
                    <TableHead className="w-1/3 font-semibold text-foreground bg-sage/5">NorthOak</TableHead>
                    <TableHead className="w-1/3 font-semibold text-foreground">Traditional BPO</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonRows.map((row) => (
                    <TableRow key={row.factor}>
                      <TableCell className="text-muted-foreground font-medium">{row.factor}</TableCell>
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

export default TraditionalBPO;
