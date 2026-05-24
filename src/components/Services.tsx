import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import logo from "@/assets/logo.png";
import { services, type Service } from "@/data/taxonomy";

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
        isOpen
          ? "bg-sage/[0.04] border border-sage/30 shadow-md"
          : "bg-card border border-border hover:border-sage/40 hover:shadow-sm"
      }`}
    >
      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"
        }`}
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--sage)) 0%, hsl(var(--sage) / 0.3) 100%)",
        }}
      />

      {/* Left accent strip */}
      <div
        className={`absolute left-0 top-[3px] bottom-0 w-[2px] transition-all duration-300 rounded-b-full ${
          isOpen ? "bg-sage/50" : "bg-transparent group-hover:bg-sage/20"
        }`}
      />

      <div className="relative p-6">
        {/* Icon */}
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
            isOpen
              ? "bg-sage text-white"
              : "bg-sage-light text-sage group-hover:bg-sage group-hover:text-white"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>

        {/* Title */}
        <h3 className="font-sans text-lg font-semibold text-foreground mb-2">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Divider + toggle */}
        <div className="border-t border-border/60 pt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full text-sm font-medium transition-colors group/btn"
          >
            <span
              className={`transition-colors duration-200 ${
                isOpen
                  ? "text-sage"
                  : "text-muted-foreground group-hover/btn:text-foreground"
              }`}
            >
              {isOpen ? `Hide roles (${service.roles.length})` : `View roles (${service.roles.length})`}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
            >
              <ChevronDown
                className={`w-4 h-4 transition-colors duration-200 ${
                  isOpen
                    ? "text-sage"
                    : "text-muted-foreground group-hover/btn:text-foreground"
                }`}
              />
            </motion.div>
          </button>
        </div>

        {/* Expanding role pills */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="roles"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 flex flex-wrap gap-2">
                {service.roles.map((role, i) => (
                  <motion.div
                    key={role.slug}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                  >
                    <Link
                      to={`/roles/${role.slug}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-sage-light text-sage text-xs font-medium rounded-full border border-sage/20 hover:bg-sage hover:text-white hover:border-sage transition-all duration-200"
                    >
                      {role.name}
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-50" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: service.roles.length * 0.04 + 0.05 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-sage hover:text-sage-dark transition-colors"
                >
                  View {service.name} overview
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Team + NorthOak Pills */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span className="px-5 py-2.5 bg-sage-light text-foreground font-medium text-sm rounded-full border border-sage/30">
            Your Team
          </span>
          <span className="text-muted-foreground font-medium">+</span>
          <span className="px-4 py-2 bg-white rounded-full border border-border flex items-center shadow-sm">
            <img src={logo} alt="NorthOak" className="h-5 w-auto" />
          </span>
        </motion.div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Unblocking bottlenecks so you can focus on growth
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We build you a team in your budget, with the best talent across the world.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
