import { motion } from "framer-motion";
import { Link } from "react-router";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const roles = [
    { name: "CRM Management", link: "/roles/crm-management" },
    { name: "Customer Support", link: "/roles/customer-support" },
    { name: "HR Admin", link: "/roles/hr-admin" },
    { name: "Virtual Assistant", link: "/roles/virtual-assistant" },
    { name: "Finance & Accounting", link: "/roles/finance-accounting" },
  ];


  const company = [
    { name: "Pricing", link: "/pricing" },
    { name: "Careers", link: "/careers" },
  ];


  return (
    <footer className="relative z-10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Contact Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img 
                src={logo} 
                alt="NorthOak" 
                className="h-8 w-auto object-contain" 
                style={{ imageRendering: 'auto' }} 
              />
            </motion.div>
            
            <a
              href="mailto:info@northoak.co"
              className="text-foreground hover:text-sage transition-colors underline block mb-6"
            >
              info@northoak.co
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

          {/* Roles Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Roles</h4>
            <ul className="space-y-3">
              {roles.map((role) => (
                <li key={role.name}>
                  <Link
                    to={role.link}
                    className="text-muted-foreground hover:text-sage transition-colors text-sm"
                  >
                    {role.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.link} 
                    className="text-muted-foreground hover:text-sage transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted-foreground/20 bg-sage-light/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {currentYear} NorthOak
            </p>
            <div className="flex items-center gap-8">
              <Link 
                to="/terms-of-service" 
                className="text-sm text-foreground hover:text-sage transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/privacy-policy" 
                className="text-sm text-foreground hover:text-sage transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
