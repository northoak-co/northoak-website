import { motion } from "framer-motion";

// Import local logos
import makeLogo from "@/assets/logos/make.png";
import hubspotLogo from "@/assets/logos/hubspot.png";
import intercomLogo from "@/assets/logos/intercom.png";

const partners = [
  { name: "Atlassian", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/67116cfa1524cef036bbe6fd_2560px-Atlassian-logo.svg.png" },
  { name: "Freshdesk", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/67116db612929faba7c2fdc1_freshdesk.png" },
  { name: "Gorgias", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328db6c1a551c65e5c72_Gorgias-image.png" },
  { name: "Hubspot", logo: hubspotLogo },
  { name: "Intercom", logo: intercomLogo },
  { name: "Make", logo: makeLogo },
  { name: "Monday", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328c9b28af181a3b2da4_Monday_logo.svg.png" },
  { name: "Pipedrive", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328ca23640b475d7c165_Pipedrive_Logo_gray.png" },
  { name: "QuickBooks", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328c686f93c955b34c91_Intuit_QuickBooks_logo.png" },
  { name: "Zendesk", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328ca195c84b1f6a82d7_Zendesk-Logo.png" },
  { name: "Zapier", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328cb4d3d4f4a5a1e101_Zapier-Logo.png" },
];

const Partners = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block"
          >
            Our Partners
          </motion.span>
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Work with the best
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            We partner with the best in the industry, integrating with everything you're already using.
          </motion.p>
        </div>

        {/* Logo Grid */}
        <motion.div
          initial={{ }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center w-28 h-12 md:w-36 md:h-14"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
