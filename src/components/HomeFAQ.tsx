import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is NorthOak?",
    answer:
      "NorthOak matches growing companies with dedicated, vetted remote specialists for operations roles — CRM management, customer support, HR admin, virtual assistance, finance and accounting, and back-office admin. You get one specialist embedded in your tools, working your hours, starting at $2,000/mo.",
  },
  {
    question: "How is NorthOak different from Upwork or a freelancer?",
    answer:
      "Freelancers are project-based and typically juggle multiple clients. NorthOak specialists are fully dedicated to your account — working your hours every day, embedded in your tools, and accountable to your SOPs. We also handle payroll, compliance, and replacement if the fit isn't right.",
  },
  {
    question: "Where are NorthOak specialists based?",
    answer:
      "Our specialists are based across Latin America, Southeast Asia, and Eastern Europe — selected for strong English proficiency, relevant experience, and overlap with North American time zones. We match specialists to your working hours.",
  },
  {
    question: "How fast can I hire?",
    answer:
      "From your intake call to your specialist's first day: 5 business days. We introduce vetted candidates within 2 business days of intake. You interview, choose, and we handle the rest.",
  },
  {
    question: "What does it cost?",
    answer:
      "NorthOak starts at $2,000/mo — all-inclusive. That covers your specialist's compensation, payroll, benefits, compliance, account management, and our free replacement guarantee. No hidden fees.",
  },
  {
    question: "Who owns the work and IP?",
    answer:
      "You do. Our service agreement includes a full IP assignment clause — all work produced by your specialist belongs to your company. Specialists also sign comprehensive NDAs before their first day.",
  },
  {
    question: "How are specialists vetted?",
    answer:
      "We accept fewer than 5% of applicants. Every specialist passes a multi-stage process: application review, a skills assessment in the actual tools, a video interview for communication and fit, and a paid trial task on a real-world scenario. We only match candidates who've cleared all four stages.",
  },
  {
    question: "What time zones do your specialists work in?",
    answer:
      "We match your business hours. Most North American clients are covered 9am–6pm in their local time zone. Extended hours and 24/7 coverage are available for customer support roles.",
  },
  {
    question: "How do contracts and termination work?",
    answer:
      "Contracts are month-to-month. No 12-month lock-ins, no volume minimums. If you need to scale down or end the engagement, you provide notice and we handle the offboarding.",
  },
  {
    question: "What roles do you not staff?",
    answer:
      "We focus on operations roles that are process-driven and repeatable. We don't staff highly specialized technical roles (software engineers, legal counsel, licensed professionals), roles that require physical presence, or roles that require local licenses or certifications.",
  },
];

const HomeFAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sage font-medium text-sm tracking-wide uppercase mb-4">
            Got questions?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-sage/30"
              >
                <AccordionTrigger className="text-left font-medium text-foreground py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export { faqs };
export default HomeFAQ;
