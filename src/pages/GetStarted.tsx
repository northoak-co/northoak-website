import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MultiStepIntake from "@/components/MultiStepIntake";
import { pageMeta } from "@/lib/seo";

export const meta = () =>
  pageMeta({
    title: "Build Your Dream Team | NorthOak",
    description:
      "Tell us what you're hiring for and we'll match you with vetted operations specialists in days.",
    path: "/get-started",
  });

const GetStarted = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const orb1X = useTransform(smoothMouseX, [0, 1], [-30, 30]);
  const orb1Y = useTransform(smoothMouseY, [0, 1], [-30, 30]);
  const orb2X = useTransform(smoothMouseX, [0, 1], [20, -20]);
  const orb2Y = useTransform(smoothMouseY, [0, 1], [25, -25]);
  const orb3X = useTransform(smoothMouseX, [0, 1], [-15, 15]);
  const orb3Y = useTransform(smoothMouseY, [0, 1], [-20, 20]);
  const particle1X = useTransform(smoothMouseX, [0, 1], [10, -10]);
  const particle1Y = useTransform(smoothMouseY, [0, 1], [15, -15]);
  const particle2X = useTransform(smoothMouseX, [0, 1], [-8, 8]);
  const particle2Y = useTransform(smoothMouseY, [0, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-sage/5 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] -right-[15%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[80%] left-[20%] w-[400px] h-[400px] bg-sage/4 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[30%] w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px]" />
      </div>

      <Header />

      <main>
        <section className="relative bg-background pt-4 pb-8 overflow-hidden">
          <div className="mx-auto px-3 md:px-4 relative z-10">
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
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
              {/* Animated background orbs */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 44% 51% / 0.3) 0%, transparent 70%)",
                    x: orb1X,
                    y: orb1Y,
                  }}
                />
                <motion.div
                  className="absolute -bottom-48 -left-32 w-[700px] h-[700px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 40% 55% / 0.25) 0%, transparent 70%)",
                    x: orb2X,
                    y: orb2Y,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 35% 60% / 0.18) 0%, transparent 60%)",
                    x: orb3X,
                    y: orb3Y,
                  }}
                />
                <motion.div
                  className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full blur-2xl"
                  style={{
                    background: "hsl(102 44% 51% / 0.2)",
                    x: particle1X,
                    y: particle1Y,
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full blur-2xl"
                  style={{
                    background: "hsl(102 44% 51% / 0.15)",
                    x: particle2X,
                    y: particle2Y,
                  }}
                />
              </div>

              {/* Form content */}
              <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-40 md:pt-52 pb-16 md:pb-24">
                <MultiStepIntake />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
