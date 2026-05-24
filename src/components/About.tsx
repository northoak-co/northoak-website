import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router";

const About = () => {
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
    <section id="about" className="py-8 bg-background">
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

          <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image */}
                <motion.div
                  initial={{ x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-sage/20 shadow-lg">
                    <img
                      src="https://cdn.prod.website-files.com/65d631f6892f8b862233316f/670fd95f025fb17621766bc7_workroom_cropped.webp"
                      alt="NorthOak team working"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage/30 rounded-2xl -z-10" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block">
                    Our Mission
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    For businesses with talent gaps and a need for scale
                  </h2>
                  <div className="space-y-4 text-muted-foreground mb-8">
                    <p>
                      NorthOak is a leading Operations Outsourcing partner, specializing in high-growth technology companies with 1-200 team members. Our customer-first philosophy and ownership mentality are central to our approach.
                    </p>
                    <p>
                      We are tired of agencies who promise the world but fail to deliver after the contracts are signed. Instead, we are radically candid about what we can and cannot do, and we focus on continually "earning the right" to advise our clients.
                    </p>
                    <p className="font-medium text-foreground">
                      We only win if you win, so you can rest assured that your ROI will be positive.
                    </p>
                  </div>
                  <Link to="/get-started">
                    <Button variant="hero" size="lg" className="gap-2">
                      Find out more
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
