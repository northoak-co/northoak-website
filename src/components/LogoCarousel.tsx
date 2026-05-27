import { motion } from "framer-motion";
import { logos } from "@/data/logos";

const LogoCarousel = () => {
  return (
    <div className="bg-background px-6 md:px-12 lg:px-20 pt-2 pb-8">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="shrink-0"
          >
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              Trusted by startups like yours
              <br />
              to fuel growth
            </p>
          </motion.div>

          <div
            className="relative flex-1 w-full min-w-0 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="flex w-max">
              <motion.div
                key="logo-carousel"
                className="flex items-center gap-6 md:gap-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
              >
                {logos.map((logo, index) => (
                  <div key={`${logo.name}-${index}`} className="flex items-center justify-center shrink-0 h-6 md:h-8">
                    {logo.src ? (
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                      />
                    ) : (
                      <div className="h-5 md:h-6 px-4 flex items-center justify-center bg-white/50 rounded-lg border border-sage/20">
                        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                          {logo.name}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
