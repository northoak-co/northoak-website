import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const CTA_BG = "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)";

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const orb1X = useTransform(smoothMouseX, [0, 1], [-20, 20]);
  const orb1Y = useTransform(smoothMouseY, [0, 1], [-20, 20]);
  const orb2X = useTransform(smoothMouseX, [0, 1], [15, -15]);
  const orb2Y = useTransform(smoothMouseY, [0, 1], [18, -18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section className="relative bg-background pt-8 pb-0 overflow-hidden">
      {/* Full-width panel: rounded only at the top, open at the bottom into the footer */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
        style={{
          background: CTA_BG,
          borderTopLeftRadius: "2.5rem",
          borderTopRightRadius: "2.5rem",
          borderTop: "1px solid hsl(102 44% 51% / 0.25)",
          borderLeft: "1px solid hsl(102 44% 51% / 0.15)",
          borderRight: "1px solid hsl(102 44% 51% / 0.15)",
          boxShadow: "0 -4px 40px -12px hsl(102 44% 51% / 0.15)",
        }}
      >
        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(102 44% 51% / 0.25) 0%, transparent 70%)", x: orb1X, y: orb1Y }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(102 40% 55% / 0.2) 0%, transparent 70%)", x: orb2X, y: orb2Y }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8"
          >
            Ready to build your{" "}
            <span className="text-sage italic">dream team</span>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/get-started">
              <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden mx-auto">
                <span className="px-6 py-3 text-white font-medium">Get Started</span>
                <span className="flex items-center justify-center w-10 h-10 m-1.5 bg-white rounded-full">
                  <ArrowRight className="w-4 h-4 text-sage" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export { CTA_BG };
export default CTASection;
