import { motion } from "framer-motion";
import { Check, Clock, LucideIcon } from "lucide-react";
import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Partners from "./Partners";
import CTASection from "./CTASection";
import ServiceHero from "./ServiceHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RolePageLayoutProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
  tasks: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  tldr: string;
  tools: string[];
  costRows: {
    label: string;
    domestic: string;
    northoak: string;
  }[];
  timeToHire: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

const RolePageLayout = ({
  icon: Icon,
  title,
  subtitle,
  description,
  image,
  benefits,
  tasks,
  stats,
  tldr,
  tools,
  costRows,
  timeToHire,
  faqs,
}: RolePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          icon={Icon}
          category={subtitle}
          title={title}
          description={description}
          ctaLabel={`Hire ${title}`}
          image={image}
          imageAlt={title}
          guarantee="✓ Guaranteed service"
        />

        {/* TL;DR Section */}
        <section className="py-6 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-sage/5 border border-sage/20 rounded-2xl p-6 md:p-8">
                <p className="text-sage font-semibold text-sm uppercase tracking-wide mb-2">
                  The short answer
                </p>
                <p className="text-lg text-foreground leading-relaxed">{tldr}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits + Stats Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why outsource your {title.toLowerCase()}?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Free up your core team to focus on growth while our expert
                  professionals handle your {title.toLowerCase()} needs with
                  precision and care.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-5 h-5 bg-sage/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-sage" />
                      </span>
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6 text-center"
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold text-sage mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tasks Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What our {title.toLowerCase()} specialists handle
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our trained professionals are equipped to manage a wide range of
                tasks, allowing you to scale without the overhead.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl border border-border p-6 hover:border-sage/50 hover:shadow-hover transition-all duration-300"
                >
                  <h3 className="font-sans text-lg font-semibold text-foreground mb-2">
                    {task.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {task.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tools they're proficient in
              </h2>
            </motion.div>
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-sage/40 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cost Comparison Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cost of a {title.toLowerCase()} specialist: domestic vs NorthOak
              </h2>
            </motion.div>
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Table>
                <TableHeader>
                  <TableRow className="bg-sage/5">
                    <TableHead className="font-semibold text-foreground">
                      &nbsp;
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      US Domestic Hire
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      NorthOak
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {costRows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-foreground">
                        {row.label}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {row.domestic}
                      </TableCell>
                      <TableCell className="text-sage font-semibold">
                        {row.northoak}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                US figures reflect fully-loaded cost: salary, benefits, payroll
                taxes, and recruiting. NorthOak rate is all-inclusive.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Time-to-Hire Banner */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto"
            >
              <div className="bg-sage/5 border border-sage/20 rounded-2xl p-6 text-center">
                <Clock className="w-10 h-10 text-sage mb-3 mx-auto" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  From intake to first day: {timeToHire}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tell us what you need. We'll introduce matched candidates
                  within 2 business days.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Frequently asked questions
              </h2>
            </motion.div>
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <CTASection />

        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default RolePageLayout;
