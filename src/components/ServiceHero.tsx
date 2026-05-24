import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface ServiceHeroProps {
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaLink?: string;
  image: string;
  imageAlt: string;
  guarantee?: string;
}

const ServiceHero = ({
  icon: Icon,
  category,
  title,
  description,
  ctaLabel,
  ctaLink = "/get-started",
  image,
  imageAlt,
  guarantee,
}: ServiceHeroProps) => {
  return (
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

          <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-12 md:pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left: Text content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-sage/10 rounded-2xl mb-5"
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-sage" />
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-sage font-medium text-sm md:text-base uppercase tracking-wide mb-3"
                  >
                    {category}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-foreground"
                  >
                    {title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base md:text-lg text-muted-foreground mb-8"
                  >
                    {description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-start gap-3"
                  >
                    <Link to={ctaLink}>
                      <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden">
                        <span className="px-6 py-3 text-white font-medium">
                          {ctaLabel}
                        </span>
                        <span className="flex items-center justify-center w-10 h-10 m-1.5 bg-white rounded-full">
                          <ArrowRight className="w-4 h-4 text-sage" />
                        </span>
                      </button>
                    </Link>
                    {guarantee && (
                      <p className="text-sm text-muted-foreground">{guarantee}</p>
                    )}
                  </motion.div>
                </div>

                {/* Right: Character image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex justify-center lg:justify-end"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-sage/20 blur-3xl scale-75 translate-y-6" />
                    <img
                      src={image}
                      alt={imageAlt}
                      className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
