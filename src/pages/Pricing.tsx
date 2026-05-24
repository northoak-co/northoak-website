import { motion } from "framer-motion";
import { Check, Users, Briefcase, Shield, Clock, Headphones, Award, ArrowRight, DollarSign, Lightbulb, UserCheck, Info } from "lucide-react";
import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import { pageMeta } from "@/lib/seo";

export const meta = () =>
  pageMeta({
    title: "Pricing | NorthOak",
    description:
      "Transparent pricing for vetted operations specialists. Ad-hoc support from $20/hour, full-time placements, and dedicated team plans — no minimums, no hidden fees.",
    path: "/pricing",
  });

const pricingTiers = [
  {
    name: "Ad Hoc Support",
    price: "$20",
    period: "/hour",
    bestFor: "Part-time & temp tasks",
    description: "Flexible hourly support for short-term projects and occasional needs",
    features: [
      "Pay only for hours used",
      "Quick task turnaround",
      "No long-term commitment",
      "Access to vetted talent",
    ],
    popular: false,
    isHourly: true,
  },
  {
    name: "Junior Associate",
    price: "$2,000",
    period: "/month",
    bestFor: "Straightforward tasks",
    description: "Dedicated associate for routine operational work and standard processes",
    features: [
      "40+ hours/week dedicated",
      "Talent coaching included",
      "Fully managed HR",
      "Free replacements",
      "Account manager support",
      "10 hrs/mo ops advisory",
    ],
    popular: false,
    isHourly: false,
  },
  {
    name: "Senior Associate",
    price: "$2,500",
    period: "/month",
    bestFor: "Complex tasks",
    description: "Experienced professional for sophisticated projects requiring deeper expertise",
    features: [
      "40+ hours/week dedicated",
      "Talent coaching included",
      "Fully managed HR",
      "Free replacements",
      "Account manager support",
      "10 hrs/mo ops advisory",
    ],
    popular: true,
    isHourly: false,
  },
  {
    name: "Team Lead",
    price: "$3,500",
    period: "/month",
    bestFor: "Managing 3+ associates",
    description: "Leadership-level support for coordinating teams and complex operations",
    features: [
      "40+ hours/week dedicated",
      "Talent coaching included",
      "Fully managed HR",
      "Free replacements",
      "Account manager support",
      "10 hrs/mo ops advisory",
    ],
    popular: false,
    isHourly: false,
  },
];

const includedFeatures = [
  {
    icon: Clock,
    title: "Dedicated 40+ Hours/Week",
    description: "Full-time commitment to your business with consistent, reliable support.",
  },
  {
    icon: Lightbulb,
    title: "Talent Coaching & Upskilling",
    description: "Continuous development of your team member to grow with your needs.",
  },
  {
    icon: Users,
    title: "Fully Managed HR",
    description: "We handle all people management, payroll, and compliance.",
  },
  {
    icon: UserCheck,
    title: "Free Replacements",
    description: "No risk if fit isn't right—we'll find you a better match at no cost.",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    description: "Your dedicated point of contact for ongoing support and optimization.",
  },
  {
    icon: Briefcase,
    title: "10 Hours/Month Ops Advisory",
    description: "Strategic consulting included to help optimize your operations.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section with Box Design */}
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
              {/* Background orbs */}
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
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-sage/10 rounded-2xl mb-6"
                  >
                    <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-sage" />
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
                  >
                    Simple, Transparent Pricing That Delivers ROI
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                  >
                    Our pricing is designed to be simple and transparent, ensuring you get maximum value without unexpected costs. We focus on delivering measurable ROI, so you only invest in solutions that drive real impact.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                  >
                    <Link to="/get-started">
                      <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden">
                        <span className="px-6 py-3 text-white font-medium">
                          Schedule a Consultation
                        </span>
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

        {/* Pricing Cards Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            {/* Pricing Cards - 4 column grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative p-6 lg:p-8 rounded-2xl border ${
                    tier.popular
                      ? "bg-sage text-primary-foreground border-sage shadow-hover"
                      : "bg-card border-border hover:border-sage/50"
                  } transition-all duration-300 flex flex-col`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-forest text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 className={`font-display text-lg lg:text-xl font-semibold mb-2 ${
                      tier.popular ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`font-display text-3xl lg:text-4xl font-bold ${
                        tier.popular ? "text-primary-foreground" : "text-foreground"
                      }`}>
                        {tier.price}
                      </span>
                      <span className={tier.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                        {tier.period}
                      </span>
                    </div>
                    <p className={`mt-2 text-xs font-medium uppercase tracking-wide ${
                      tier.popular ? "text-primary-foreground/90" : "text-sage"
                    }`}>
                      Best for: {tier.bestFor}
                    </p>
                    <p className={`mt-3 text-sm ${
                      tier.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.popular ? "text-primary-foreground" : "text-sage"
                        }`} />
                        <span className={`text-sm ${
                          tier.popular ? "text-primary-foreground/90" : "text-foreground"
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full h-12 rounded-xl font-semibold ${
                      tier.popular
                        ? "bg-primary-foreground text-sage hover:bg-primary-foreground/90"
                        : "bg-sage text-primary-foreground hover:bg-sage-dark"
                    }`}
                  >
                    <Link to="/get-started">Get Started</Link>
                  </Button>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* What's Included - with green box design */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="mx-auto px-3 md:px-4">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
                boxShadow:
                  "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
              }}
            >
              {/* Background orbs */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 44% 51% / 0.25) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 40% 55% / 0.2) 0%, transparent 70%)",
                  }}
                />
              </div>

              <div className="relative z-10 px-6 md:px-12 lg:px-20 py-16 md:py-24">
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    What's Included With Every Monthly Tier
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Beyond great talent, you get a full support system designed to make your team successful.
                  </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {includedFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 hover:border-sage/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-sage" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Trusted by Innovative Companies
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We work with innovative companies across e-commerce, fintech, education, and tech.
              </p>
            </motion.div>
            <ClientLogosCarousel />
          </div>
        </section>

        {/* FAQ Section - with green box design */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="mx-auto px-3 md:px-4">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
                boxShadow:
                  "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
              }}
            >
              {/* Background orbs */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 44% 51% / 0.2) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 40% 55% / 0.2) 0%, transparent 70%)",
                  }}
                />
              </div>

              <div className="relative z-10 px-6 md:px-12 lg:px-20 py-16 md:py-24">
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Frequently Asked Questions
                  </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                  {[
                    {
                      q: "Can I switch between tiers?",
                      a: "Absolutely! As your needs evolve, you can upgrade or adjust your tier. Simply speak with your account manager and we'll make the transition seamless.",
                    },
                    {
                      q: "What happens if my associate isn't the right fit?",
                      a: "We offer free replacements at no additional cost. Our goal is your success, and if the initial match isn't perfect, we'll find you someone better suited to your needs.",
                    },
                    {
                      q: "How does the 10 hours of ops advisory work?",
                      a: "Each month, you have access to 10 hours of strategic consulting with our operations experts. Use it for process optimization, workflow design, or tackling complex operational challenges.",
                    },
                    {
                      q: "Is there a minimum commitment period?",
                      a: "No. Our contracts are month-to-month — no 12-month lock-ins, no volume minimums. Scale up or down with notice.",
                    },
                    {
                      q: "How quickly can I get started?",
                      a: "From your intake call to your specialist's first day: 5 business days. We introduce vetted candidates within 2 business days and move fast without cutting corners.",
                    },
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50"
                    >
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
