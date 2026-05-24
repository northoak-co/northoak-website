import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import logoImg from "@/assets/logo.png";
import BookingForm from "@/components/BookingForm";

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
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
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="relative bg-background py-8 overflow-hidden">
      <div className="mx-auto px-3 md:px-4 relative z-10">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
            boxShadow: "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
          }}
        >
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 44% 51% / 0.25) 0%, transparent 70%)",
                x: orb1X,
                y: orb1Y,
              }}
            />
            <motion.div
              className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 40% 55% / 0.2) 0%, transparent 70%)",
                x: orb2X,
                y: orb2Y,
              }}
            />
          </div>

          <div className="relative z-10 px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left">
                {/* Badges */}
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center justify-center lg:justify-start gap-3 mb-8"
                >
                  <span className="px-5 py-2.5 bg-sage/20 text-foreground font-medium text-sm rounded-full border border-sage/40">
                    Your Team
                  </span>
                  <span className="text-muted-foreground font-medium">+</span>
                  <span className="px-4 py-2 bg-white rounded-full border border-border flex items-center shadow-sm">
                    <img src={logoImg} alt="NorthOak" className="h-5 w-auto" />
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
                >
                  Ready to scale your team with specialized global talent?
                </motion.h2>

                {/* Subtext */}
                <motion.p
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg text-muted-foreground"
                >
                  Book an intro call to learn more.
                </motion.p>
              </div>

              {/* Right Side - Form Card */}
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <BookingForm className="bg-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;