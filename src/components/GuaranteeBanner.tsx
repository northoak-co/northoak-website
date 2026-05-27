import { motion } from "framer-motion";

const GuaranteeBanner = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{
      background: "linear-gradient(135deg, hsl(102 40% 11%) 0%, hsl(102 35% 14%) 50%, hsl(102 40% 10%) 100%)",
    }}>
      {/* Subtle background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl" style={{
          background: "radial-gradient(circle, hsl(102 44% 51% / 0.12) 0%, transparent 70%)",
        }} />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl" style={{
          background: "radial-gradient(circle, hsl(102 44% 51% / 0.08) 0%, transparent 70%)",
        }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-sm md:text-base font-medium tracking-wide mb-6"
          style={{ color: "hsl(102 30% 65%)" }}
        >
          Hi, we're NorthOak.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-white"
        >
          Your <span className="text-sage italic">success</span> is our <span className="text-sage italic">mission</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg space-y-5 text-left"
          style={{ color: "hsl(102 20% 78%)" }}
        >
          <p>
            We're an Operations Outsourcing partner built for early- to mid-stage tech and ecommerce companies. We started NorthOak because we saw first-hand how the outsourcing industry is failing this sector — always overpromising, underdelivering, and moving on.
          </p>
          <p>
            Our team has worked at startups at every stage, so we understand what you actually need. You focus on the strategy and product. We'll handle the rest.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeBanner;
