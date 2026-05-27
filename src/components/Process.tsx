"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    step: "Step 1",
    phase: "Outcome Mapping",
    title: "We start with your goals, not a job description",
    description: "Before we discuss candidates, we map what you actually want to achieve. What does success look like at 30 days and 90? What's failed with outsourcing before? We document the answers before anyone starts work.",
  },
  {
    step: "Step 2",
    phase: "Team Building",
    title: "Meet specialists who've already proven themselves",
    description: "Within days, we introduce 1–2 pre-vetted candidates. Fewer than 5% of applicants reach placement — every person you meet has cleared a four-stage process including a paid trial task on real client workflows.",
  },
  {
    step: "Step 3",
    phase: "Hands-on Onboarding",
    title: "A supervised ramp, not a cold start",
    description: "Your specialist goes through a dedicated four-week ramp: daily check-ins, supervised task execution, and full process documentation built alongside your account manager. We don't call it done until everything is running smoothly.",
  },
];

const Process = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: "hsl(102 18% 93%)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-3xl mx-auto leading-tight"
          >
            The NorthOak difference
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          >
            Most outsourcing agencies create operational tax.<br />We create operational excellence that saves you time and headaches.
          </motion.p>
        </div>

        {/* Accordion Steps */}
        <div className="max-w-3xl mx-auto space-y-3">
          {steps.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-sage/15 border-sage/30"
                      : "bg-card border-border/50 hover:border-sage/20"
                  }`}
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-sage uppercase tracking-widest shrink-0">
                          {step.step}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sage/15 text-sage shrink-0">
                          {step.phase}
                        </span>
                      </div>
                      <h3 className="font-display text-base md:text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen ? "bg-foreground" : "bg-foreground"
                    }`}>
                      {isOpen
                        ? <Minus className="w-4 h-4 text-background" />
                        : <Plus className="w-4 h-4 text-background" />
                      }
                    </div>
                  </div>

                  {/* Expandable body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/get-started"
            className="inline-flex items-center px-6 py-3 bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full text-white font-medium"
          >
            Book a Meeting
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
