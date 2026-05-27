import { motion } from "framer-motion";
import calculatorBg from "@/assets/calculator-bg.png";
import CalculatorWidget from "@/components/CalculatorWidget";

const SavingsCalculator = () => {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        backgroundImage: `url(${calculatorBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-medium text-sm tracking-wide uppercase mb-4 block"
            style={{ color: "hsl(102 30% 70%)" }}
          >
            Savings Calculator
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-white"
          >
            What You Save With NorthOak
          </motion.h2>
        </div>

        <CalculatorWidget />
      </div>
    </section>
  );
};

export default SavingsCalculator;
