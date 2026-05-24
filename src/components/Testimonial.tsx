import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const Testimonial = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const orb1X = useTransform(smoothMouseX, [0, 1], [-15, 15]);
  const orb1Y = useTransform(smoothMouseY, [0, 1], [-15, 15]);
  const orb2X = useTransform(smoothMouseX, [0, 1], [12, -12]);
  const orb2Y = useTransform(smoothMouseY, [0, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="py-8 bg-background">
      <div className="mx-auto px-3 md:px-4">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
            boxShadow: "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
          }}
        >
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 44% 51% / 0.2) 0%, transparent 70%)",
                x: orb1X,
                y: orb1Y,
              }}
            />
            <motion.div
              className="absolute -bottom-24 -right-24 w-[450px] h-[450px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 40% 55% / 0.18) 0%, transparent 70%)",
                x: orb2X,
                y: orb2Y,
              }}
            />
          </div>

          <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span
                initial={{ }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sage font-medium text-sm tracking-wide uppercase mb-8 block"
              >
                Client Testimonials
              </motion.span>
              
              <motion.div
                initial={{ y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-sage/40 mx-auto mb-6" />
                
                {/* Quote */}
                <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8">
                  "Everything NorthOak has put together for us is thoughtful, practical, and clear - it really comes through in all the high quality touch points I've had with the team, and many others have expressed the same."
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src="https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6719b8ddbe9ad00b35d783a3_1715108275589-modified.png"
                    alt="Donnie Yee"
                    className="w-14 h-14 rounded-full object-cover border-2 border-sage/50 shadow-md"
                  />
                  <div className="text-left">
                    <p className="font-display font-semibold text-foreground">
                      Donnie Yee
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Head of Operations, Prequel
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
