import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import leaf from "@/assets/leaf.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const orb1X = useTransform(smoothMouseX, [0, 1], [-45, 45]);
  const orb1Y = useTransform(smoothMouseY, [0, 1], [-45, 45]);
  const orb2X = useTransform(smoothMouseX, [0, 1], [32, -32]);
  const orb2Y = useTransform(smoothMouseY, [0, 1], [37, -37]);
  const orb3X = useTransform(smoothMouseX, [0, 1], [-25, 25]);
  const orb3Y = useTransform(smoothMouseY, [0, 1], [-30, 30]);
  const orb4X = useTransform(smoothMouseX, [0, 1], [17, -17]);
  const orb4Y = useTransform(smoothMouseY, [0, 1], [22, -22]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const roles = [
    { name: "CRM Management", link: "/roles/crm-management" },
    { name: "Customer Support", link: "/roles/customer-support" },
    { name: "HR Admin", link: "/roles/hr-admin" },
    { name: "Virtual Assistant", link: "/roles/virtual-assistant" },
    { name: "Finance & Accounting", link: "/roles/finance-accounting" },
    { name: "Back Office Admin", link: "/roles/back-office-admin" },
  ];

  const company = [
    { name: "How It Works", link: "/how-it-works" },
    { name: "Pricing", link: "/pricing" },
    { name: "Security", link: "/security" },
    { name: "Careers", link: "/careers" },
    { name: "Savings Calculator", link: "/savings-calculator" },
  ];

  const compare = [
    { name: "vs Upwork & Fiverr", link: "/vs/upwork-fiverr" },
    { name: "vs Hiring Domestically", link: "/vs/domestic-hire" },
    { name: "vs Traditional BPO", link: "/vs/traditional-bpo" },
  ];

  return (
    <div className="bg-background">
      <footer
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative z-10 overflow-hidden"
        style={{
          paddingTop: 160,
          background: "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
        }}
      >
        {/* Corner-mask SVG: fills page-bg colour into the corners so the footer's own
            gradient shows through the arch dome — guaranteeing a seamless colour match. */}
        <svg
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{ height: 160, zIndex: 30 }}
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 L1440,0 L1440,160 Q720,0 0,160 Z" fill="hsl(60 20% 97%)" />
          <path
            d="M0,160 Q720,0 1440,160"
            fill="none"
            stroke="hsl(102 44% 51% / 0.35)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Animated orbs — safely clipped by footer's overflow:hidden */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(102 44% 51% / 0.38) 0%, transparent 70%)", x: orb1X, y: orb1Y }}
          />
          <motion.div
            className="absolute -bottom-48 -left-32 w-[700px] h-[700px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(102 40% 55% / 0.31) 0%, transparent 70%)", x: orb2X, y: orb2Y }}
          />
          <motion.div
            className="absolute -top-32 -left-32 w-[800px] h-[800px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(102 35% 60% / 0.23) 0%, transparent 60%)", x: orb3X, y: orb3Y }}
          />
          <motion.div
            className="absolute top-1/4 -left-8 w-48 h-48 rounded-full blur-2xl"
            style={{ background: "hsl(102 44% 51% / 0.25)", x: orb4X, y: orb4Y }}
          />
        </div>

        {/* CTA */}
        <div className="relative z-10 container mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8"
          >
            Ready to build your{" "}
            <span className="text-sage italic">dream team</span>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/get-started">
              <button className="px-8 py-3 bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full text-white font-medium">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>


        {/* Footer links */}
        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Logo & Contact */}
            <div className="lg:col-span-2">
              <motion.div
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <img src={leaf} alt="NorthOak" className="h-32 w-auto object-contain" />
              </motion.div>

              <a
                href="mailto:hello@northoak.co"
                className="text-foreground hover:text-sage transition-colors underline block mb-6"
              >
                hello@northoak.co
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/northoak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white hover:bg-sage-dark transition-colors"
                  aria-label="NorthOak on LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Roles */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Roles</h4>
              <ul className="space-y-3">
                {roles.map((role) => (
                  <li key={role.name}>
                    <Link to={role.link} className="text-muted-foreground hover:text-sage transition-colors text-sm">
                      {role.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link to={item.link} className="text-muted-foreground hover:text-sage transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compare */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Compare</h4>
              <ul className="space-y-3">
                {compare.map((item) => (
                  <li key={item.name}>
                    <Link to={item.link} className="text-muted-foreground hover:text-sage transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 border-t border-sage/20">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">© NorthOak {currentYear}, All Rights Reserved</p>
              <div className="flex items-center gap-8">
                <Link to="/terms-of-service" className="text-sm text-foreground hover:text-sage transition-colors">
                  Terms of Service
                </Link>
                <Link to="/privacy-policy" className="text-sm text-foreground hover:text-sage transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Footer;
