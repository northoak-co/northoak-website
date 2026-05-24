import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import logo from "@/assets/logo.png";
import { services } from "@/data/taxonomy";

let headerHasAnimated = false;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  const [activeServiceSlug, setActiveServiceSlug] = useState<string>(services[0].slug);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWhyOpen, setMobileWhyOpen] = useState(false);
  const [mobileActiveService, setMobileActiveService] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const whyCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();
  const isFirstLoad = !headerHasAnimated;
  useEffect(() => { headerHasAnimated = true; }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest >= 50);
  });

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (whyCloseTimer.current) clearTimeout(whyCloseTimer.current);
    setIsWhyOpen(false);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 120);
  };

  const activeService = services.find((s) => s.slug === activeServiceSlug) ?? services[0];

  const whyLinks = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
  ];

  const navLinks = [
    { label: "Pricing", href: "/pricing", isRoute: true },
    { label: "Careers", href: "/careers", isRoute: true },
  ];

  const handleWhyEnter = () => {
    if (whyCloseTimer.current) clearTimeout(whyCloseTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsServicesOpen(false);
    setIsWhyOpen(true);
  };

  const handleWhyLeave = () => {
    whyCloseTimer.current = setTimeout(() => setIsWhyOpen(false), 120);
  };

  return (
    <motion.header
      initial={isFirstLoad ? { y: -20, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-8 left-0 right-0 z-50 px-9 md:px-10"
    >
      <motion.div
        className="mx-auto h-[4.5rem] flex items-center transition-all duration-300 relative"
        style={{ borderStyle: "solid" }}
        animate={{
          backgroundColor: isScrolled ? "hsl(var(--card) / 0.98)" : "transparent",
          boxShadow: isScrolled
            ? "0 8px 32px -8px hsl(102 44% 51% / 0.15), 0 4px 16px -4px hsl(0 0% 0% / 0.1)"
            : "none",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderRadius: isScrolled ? "1rem" : "0",
          borderColor: isScrolled ? "hsl(var(--border) / 0.5)" : "transparent",
          borderWidth: isScrolled ? "1px" : "0px",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <Link to="/" className="absolute left-6">
          <motion.div
            className="flex items-center"
            initial={false}
            animate={{ x: isScrolled ? 0 : "max(calc(50vw - 50% - 580px), 0px)" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={logo} alt="NorthOak" className="h-7 w-auto object-contain" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          {/* Services mega-menu */}
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <motion.button
              initial={isFirstLoad ? { opacity: 0, y: -10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors text-sm font-medium rounded-lg hover:bg-muted/50"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </motion.button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, x: '-50%' }}
                  exit={{ opacity: 0, y: 8, x: '-50%', transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } }}
                  transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                  className="absolute top-full left-1/2 mt-3 z-50"
                  style={{ width: 520 }}
                >
                  {/* Arrow pointer — absolute so it's always centered on the Services button */}
                  <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-card border-l border-t border-border/50 rotate-45 z-10" />

                  <div className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden flex">
                    {/* Left panel — service list */}
                    <div className="w-[220px] border-r border-border/40 py-3 flex-shrink-0">
                      {services.map((service) => {
                        const Icon = service.icon;
                        const isActive = service.slug === activeServiceSlug;
                        return (
                          <div key={service.slug} className="px-2">
                            <Link
                              to={`/services/${service.slug}`}
                              onClick={() => setIsServicesOpen(false)}
                              onMouseEnter={() => setActiveServiceSlug(service.slug)}
                              className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-150 group/item ${
                                isActive
                                  ? "bg-sage/10 text-foreground"
                                  : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <Icon
                                  className={`w-4 h-4 flex-shrink-0 transition-colors ${
                                    isActive ? "text-sage" : "text-muted-foreground group-hover/item:text-sage"
                                  }`}
                                />
                                <span className="font-medium leading-tight">{service.name}</span>
                              </div>
                              <ChevronRight
                                className={`w-3.5 h-3.5 flex-shrink-0 transition-all ${
                                  isActive ? "text-sage opacity-100" : "opacity-0 group-hover/item:opacity-40"
                                }`}
                              />
                            </Link>
                          </div>
                        );
                      })}
                    </div>

                    {/* Right panel — roles for active service */}
                    <div className="flex-1 py-4 px-4">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeServiceSlug}
                          initial={{ opacity: 0, x: 6 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -6 }}
                          transition={{ duration: 0.15 }}
                        >
                          <p className="text-xs font-semibold text-sage uppercase tracking-wider mb-3 px-1">
                            {activeService.name}
                          </p>
                          <div className="space-y-0.5">
                            {activeService.roles.map((role) => (
                              <Link
                                key={role.slug}
                                to={`/roles/${role.slug}`}
                                onClick={() => setIsServicesOpen(false)}
                                className="flex items-start gap-2 px-2 py-2 rounded-lg hover:bg-muted/50 transition-colors group/role"
                              >
                                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover/role:text-sage mt-0.5 flex-shrink-0 transition-colors" />
                                <div>
                                  <p className="text-sm font-medium text-foreground/80 group-hover/role:text-foreground transition-colors leading-tight">
                                    {role.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground leading-tight mt-0.5">
                                    {role.shortDescription}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-border/40">
                            <Link
                              to={`/services/${activeServiceSlug}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center gap-1.5 text-xs font-medium text-sage hover:text-sage-dark transition-colors px-1"
                            >
                              View full {activeService.name} overview
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Why NorthOak? dropdown */}
          <div
            className="relative"
            onMouseEnter={handleWhyEnter}
            onMouseLeave={handleWhyLeave}
          >
            <motion.button
              initial={isFirstLoad ? { opacity: 0, y: -10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors text-sm font-medium rounded-lg hover:bg-muted/50"
            >
              Why NorthOak?
              <ChevronDown
                className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                  isWhyOpen ? "rotate-180" : ""
                }`}
              />
            </motion.button>

            <AnimatePresence>
              {isWhyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, x: '-50%' }}
                  exit={{ opacity: 0, y: 8, x: '-50%', transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } }}
                  transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                  onMouseEnter={handleWhyEnter}
                  onMouseLeave={handleWhyLeave}
                  className="absolute top-full left-1/2 mt-3 z-50"
                  style={{ width: 200 }}
                >
                  <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-card border-l border-t border-border/50 rotate-45 z-10" />
                  <div className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden py-2">
                    {whyLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setIsWhyOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other nav links */}
          {navLinks.map((link, index) => (
            <Link key={link.label} to={link.href}>
              <motion.span
                initial={isFirstLoad ? { opacity: 0, y: -10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
                className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors text-sm font-medium rounded-lg hover:bg-muted/50 cursor-pointer"
              >
                {link.label}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          className="hidden lg:block absolute right-6"
          initial={false}
          animate={{
            opacity: 1,
            scale: 1,
            x: isScrolled ? 0 : "min(calc(-50vw + 50% + 580px), 0px)",
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link to="/get-started">
            <Button
              variant="hero"
              size="sm"
              className="rounded-xl px-5 transition-transform hover:scale-105 active:scale-95"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden absolute right-6 p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-[-1]"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden mt-2 max-w-7xl mx-auto bg-card/98 backdrop-blur-xl rounded-2xl border border-border/50 shadow-hover overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-1">
              {/* Mobile Services accordion */}
              <div>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05, duration: 0.2 }}
                  className="flex items-center justify-between w-full px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span className="font-medium">Services</span>
                  <ChevronDown
                    className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-1 space-y-0.5">
                        {services.map((service) => {
                          const Icon = service.icon;
                          const isExpanded = mobileActiveService === service.slug;
                          return (
                            <div key={service.slug}>
                              <button
                                onClick={() =>
                                  setMobileActiveService(isExpanded ? null : service.slug)
                                }
                                className="flex items-center justify-between w-full px-3 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                              >
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4 text-sage flex-shrink-0" />
                                  <span className="font-medium">{service.name}</span>
                                </div>
                                <ChevronDown
                                  className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.18 }}
                                    className="overflow-hidden pl-6"
                                  >
                                    <div className="py-1 space-y-0.5">
                                      {service.roles.map((role) => (
                                        <Link
                                          key={role.slug}
                                          to={`/roles/${role.slug}`}
                                          onClick={() => {
                                            setIsMenuOpen(false);
                                            setMobileServicesOpen(false);
                                            setMobileActiveService(null);
                                          }}
                                          className="flex items-center gap-1.5 px-3 py-2 text-xs text-foreground/60 hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                                        >
                                          <ArrowUpRight className="w-3 h-3 text-sage flex-shrink-0" />
                                          {role.name}
                                        </Link>
                                      ))}
                                      <Link
                                        to={`/services/${service.slug}`}
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setMobileServicesOpen(false);
                                          setMobileActiveService(null);
                                        }}
                                        className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-sage hover:text-sage-dark transition-colors rounded-lg"
                                      >
                                        View service overview
                                        <ArrowUpRight className="w-3 h-3" />
                                      </Link>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Why NorthOak? accordion */}
              <div>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  className="flex items-center justify-between w-full px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                  onClick={() => setMobileWhyOpen(!mobileWhyOpen)}
                >
                  <span className="font-medium">Why NorthOak?</span>
                  <ChevronDown
                    className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                      mobileWhyOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {mobileWhyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-1 space-y-0.5">
                        {whyLinks.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setMobileWhyOpen(false);
                            }}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                          >
                            <span className="font-medium">{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other mobile nav links */}
              {navLinks.map((link, index) => (
                <Link key={link.label} to={link.href} onClick={() => setIsMenuOpen(false)}>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 1) * 0.05, duration: 0.2 }}
                    className="flex items-center justify-between px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg cursor-pointer"
                  >
                    <span className="font-medium">{link.label}</span>
                  </motion.span>
                </Link>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.2 }}
              >
                <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="mt-3 w-full rounded-xl">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
