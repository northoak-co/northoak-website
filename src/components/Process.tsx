import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, SlidersVertical, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    icon: Clock,
    number: "01",
    title: "Free consultation",
    description: "Start your journey with a complimentary call to dive into your current situation and possible solutions. Tell us what's blocking you from growing faster.",
  },
  {
    icon: SlidersVertical,
    number: "02",
    title: "Build a bespoke package",
    description: "Tailor your package to fit your unique needs. Choose from various services and let us create a customized solution that aligns with your objectives.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Get the job done!",
    description: "Our dedicated team will work closely with your organization to implement strategies, optimize processes, and ensure your business thrives.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-gradient-to-b from-sage-light/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sage font-semibold text-sm tracking-widest uppercase mb-4 px-4 py-2 bg-sage/10 rounded-full"
          >
            How it Works
          </motion.span>
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-3xl mx-auto leading-tight"
          >
            Step-by-step towards{" "}
            <span className="text-sage">operational excellence</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto mb-8"
          >
            A simple, proven process to transform your operations and scale your business efficiently.
          </motion.p>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/get-started">
              <Button variant="hero" size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Steps - Timeline Style */}
        <div className="relative">
          {/* Vertical line for mobile, horizontal for desktop */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-sage/20 via-sage to-sage/20" />
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-sage/20 via-sage to-sage/20" />

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="relative pl-20 md:pl-0"
              >
                {/* Step Card */}
                <motion.div 
                  className="bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 border border-border/50 group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Number badge - positioned at top */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:relative md:top-0 md:left-0 md:translate-x-0">
                    <motion.div 
                      className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-sage to-sage-dark rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg mb-6"
                      whileHover={{ rotate: 5 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-sage-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-sage group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-sage transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-8 lg:-right-10 top-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        className="w-6 h-6 bg-sage rounded-full flex items-center justify-center"
                      >
                        <ArrowRight className="w-3 h-3 text-primary-foreground" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                {/* Mobile timeline dot */}
                <div className="md:hidden absolute left-6 top-8 w-4 h-4 bg-sage rounded-full border-4 border-background shadow-md" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Ready to transform your operations?
          </p>
          <Link to="/get-started" className="inline-flex items-center gap-2 text-sage font-semibold hover:gap-3 transition-all duration-300 group">
            Get started today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
