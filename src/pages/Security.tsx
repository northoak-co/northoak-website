import { motion } from "framer-motion";
import { ArrowRight, FileText, Lock, Monitor, Users2 } from "lucide-react";
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
import { pageMeta, faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "Do specialists sign NDAs?",
    answer:
      "Yes — before their first day. Every NorthOak specialist signs a mutual NDA covering confidential client information, including customer data, business processes, and trade secrets.",
  },
  {
    question: "Who owns the work product?",
    answer:
      "You do. Our service agreement includes a full IP assignment clause — all work produced by your specialist belongs to your company.",
  },
  {
    question: "Can I set custom security requirements?",
    answer:
      "Yes. If your business requires specific security controls — SSO-only access, VPN requirements, approved hardware — let us know during intake. We accommodate additional controls on request.",
  },
  {
    question: "Is NorthOak SOC 2 compliant?",
    answer:
      "We are working toward SOC 2 Type II certification. In the meantime, our practices are designed to meet the requirements of the Security trust services criteria. Contact us for our current security documentation.",
  },
];

export const meta = () => [
  ...pageMeta({
    title: "Security & Data Privacy | NorthOak",
    description:
      "How NorthOak protects your data and your customers' information. NDAs, access controls, device policy, and data handling practices.",
    path: "/security",
  }),
  faqSchema(faqs),
];

const securityCards = [
  {
    icon: FileText,
    title: "NDAs & IP assignment",
    description:
      "Every specialist signs a comprehensive NDA and IP assignment agreement before their first day. All work product belongs to you, not NorthOak or the specialist.",
  },
  {
    icon: Lock,
    title: "Scoped access",
    description:
      "Specialists receive only the access required for their role — no standing admin privileges. Access is provisioned on day one and revoked immediately if the engagement ends.",
  },
  {
    icon: Monitor,
    title: "Device & security policy",
    description:
      "Specialists work from managed or personal devices that meet our security baseline: up-to-date OS, endpoint protection, and no public WiFi for client work. We can accommodate stricter requirements on request.",
  },
  {
    icon: Users2,
    title: "Dedicated, not shared",
    description:
      "Your data is handled by one specialist, not a shared pool. There's no ticket queue, no handoff to agents you haven't vetted. One person, fully accountable.",
  },
];

const dataHandlingItems = [
  {
    title: "Client data",
    description:
      "Data shared with your specialist stays within the tools you provision. We don't store client data in NorthOak-owned systems unless explicitly required for the engagement.",
  },
  {
    title: "Communications",
    description:
      "Work conversations happen in your communication tools (Slack, email, your PM system). Specialists do not use personal messaging apps for client work.",
  },
  {
    title: "Offboarding",
    description:
      "When an engagement ends, access is revoked the same day. Specialists are contractually required to delete any locally stored client data.",
  },
];

const Security = () => {
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
                    Trust &amp; security
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
                  >
                    Your data is protected
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                  >
                    Every NorthOak specialist is vetted, contracted, and trained before touching your systems. Here's what we do to protect your business.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <Link to="/get-started">
                      <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden">
                        <span className="px-6 py-3 text-white font-medium">Talk to us about security</span>
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

        {/* Security Practice Cards */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {securityCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-8"
                >
                  <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-6">
                    <card.icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Handling */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                How we handle your data
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {dataHandlingItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl border border-border p-6"
                >
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
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

export default Security;
