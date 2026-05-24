import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

// Import character images
import crmManagementImg from "@/assets/characters/crm-management.png";
import customerSupportImg from "@/assets/characters/customer-support.png";
import hrAdminImg from "@/assets/characters/hr-admin.png";
import processAutomationImg from "@/assets/characters/process-automation.png";
import financeAccountingImg from "@/assets/characters/finance-accounting.png";

// Import logos
import unboundAcademyLogo from "@/assets/logos/unbound-academy.png";
import prequelLogo from "@/assets/logos/prequel.png";
import novatioLogo from "@/assets/logos/novatio.png";
import italistLogo from "@/assets/logos/italist.png";
import bonsaiLogo from "@/assets/logos/bonsai.png";
import dozrLogo from "@/assets/logos/dozr.png";
import stylightLogo from "@/assets/logos/stylight.png";
import mybestbrandsLogo from "@/assets/logos/mybestbrands.png";
import verishopLogo from "@/assets/logos/verishop.png";
import egoLogo from "@/assets/logos/ego.png";
import hewiLogo from "@/assets/logos/hewi.png";
import raiserightLogo from "@/assets/logos/raiseright.png";
import flipgiveLogo from "@/assets/logos/flipgive.png";
import triangleLogo from "@/assets/logos/triangle.png";
import brightearlyLogo from "@/assets/logos/brightearly.png";
import vennLogo from "@/assets/logos/venn.png";
import boysgetsadtooLogo from "@/assets/logos/boysgetsadtoo.png";
import favoredliveLogo from "@/assets/logos/favoredlive.png";
import bluejLogo from "@/assets/logos/bluej.png";
import truebeautyLogo from "@/assets/logos/truebeauty.png";
const logos = [{
  name: "Unbound Academy",
  src: unboundAcademyLogo
}, {
  name: "Prequel",
  src: prequelLogo
}, {
  name: "Novatio",
  src: novatioLogo
}, {
  name: "Italist",
  src: italistLogo
}, {
  name: "Bonsai",
  src: bonsaiLogo
}, {
  name: "DOZR",
  src: dozrLogo
}, {
  name: "Stylight",
  src: stylightLogo
}, {
  name: "MyBestBrands",
  src: mybestbrandsLogo
}, {
  name: "Verishop",
  src: verishopLogo
}, {
  name: "EGO",
  src: egoLogo
}, {
  name: "Hewi",
  src: hewiLogo
}, {
  name: "RaiseRight",
  src: raiserightLogo
}, {
  name: "FlipGive",
  src: flipgiveLogo
}, {
  name: "Triangle",
  src: triangleLogo
}, {
  name: "Bright+Early",
  src: brightearlyLogo
}, {
  name: "Venn",
  src: vennLogo
}, {
  name: "Boys Get Sad Too",
  src: boysgetsadtooLogo
}, {
  name: "Favored Live",
  src: favoredliveLogo
}, {
  name: "BlueJ",
  src: bluejLogo
}, {
  name: "True Beauty",
  src: truebeautyLogo
},
// Duplicates for seamless loop
{
  name: "Unbound Academy",
  src: unboundAcademyLogo
}, {
  name: "Prequel",
  src: prequelLogo
}, {
  name: "Novatio",
  src: novatioLogo
}, {
  name: "Italist",
  src: italistLogo
}, {
  name: "Bonsai",
  src: bonsaiLogo
}, {
  name: "DOZR",
  src: dozrLogo
}, {
  name: "Stylight",
  src: stylightLogo
}, {
  name: "MyBestBrands",
  src: mybestbrandsLogo
}, {
  name: "Verishop",
  src: verishopLogo
}, {
  name: "EGO",
  src: egoLogo
}, {
  name: "Hewi",
  src: hewiLogo
}, {
  name: "RaiseRight",
  src: raiserightLogo
}, {
  name: "FlipGive",
  src: flipgiveLogo
}, {
  name: "Triangle",
  src: triangleLogo
}, {
  name: "Bright+Early",
  src: brightearlyLogo
}, {
  name: "Venn",
  src: vennLogo
}, {
  name: "Boys Get Sad Too",
  src: boysgetsadtooLogo
}, {
  name: "Favored Live",
  src: favoredliveLogo
}, {
  name: "BlueJ",
  src: bluejLogo
}, {
  name: "True Beauty",
  src: truebeautyLogo
}];
const solutions = [{
  name: "CRM Management",
  image: crmManagementImg,
  link: "/roles/crm-management"
}, {
  name: "Customer Support",
  image: customerSupportImg,
  link: "/roles/customer-support"
}, {
  name: "HR Admin",
  image: hrAdminImg,
  link: "/roles/hr-admin"
}, {
  name: "Process Automation",
  image: processAutomationImg,
  link: "/roles/virtual-assistant"
}, {
  name: "Finance & Accounting",
  image: financeAccountingImg,
  link: "/roles/finance-accounting"
}];
const Hero = () => {
  const rotatingWords = ["customer service", "finance & accounting", "payroll admin", "social media management", "video editing", "back office admin"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative bg-background pt-4 pb-8 overflow-hidden">
      {/* Soft Hero Box */}
      <div className="mx-auto px-3 md:px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden" style={{
        background: "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
        boxShadow: "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)"
      }}>
          <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-40 md:pt-52 pb-16 py-[150px] md:pb-0">
            <div className="max-w-4xl mx-auto text-center pt-12 md:pt-16 py-0">
              {/* Main Headline */}
              <motion.h1 initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Time is money.</span>
                <br />
                <span className="text-foreground">Save both by offshoring your</span>
                <br />
                <span className="inline-block min-w-[280px] md:min-w-[380px]">
                  <AnimatePresence mode="wait">
                    <motion.span key={currentWordIndex} initial={{
                    opacity: 0,
                    y: 20
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -20
                  }} transition={{
                    duration: 0.4
                  }} className="text-sage italic inline-block">
                      {rotatingWords[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Quickly and seamlessly scale your team with a talent system specifically designed for high-growth teams.
              </motion.p>
            </div>
          </div>

          {/* Divider */}
          <div className="relative z-10 px-6 md:px-12 lg:px-20 py-6 pt-0">
            <div className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
          </div>

          {/* Solutions Section */}
          <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-8 md:pb-12">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
              Which function are you hiring for?
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {solutions.map((solution, index) => <Link key={solution.name} to={solution.link} className="group">
                  <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1
              }} className="flex flex-col items-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-xl overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                      <img src={solution.image} alt={solution.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-foreground group-hover:text-sage transition-colors">
                      {solution.name}
                    </span>
                  </motion.div>
                </Link>)}
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-12 md:pb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.9
          }} className="flex justify-center">
              <Link to="/get-started">
                <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden">
                  <span className="px-6 py-3 text-white font-medium">Build Your Dream Team</span>
                  <span className="flex items-center justify-center w-10 h-10 m-1.5 bg-white rounded-full">
                    <ArrowRight className="w-4 h-4 text-sage" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Social Proof Section */}
          <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-12 md:pb-16 mt-8 md:mt-12">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              {/* Trust text */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} className="shrink-0">
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  Trusted by startups like yours
                  <br />
                  to fuel growth
                </p>
              </motion.div>

              {/* Logo carousel container with mask for true transparency fade */}
              <div className="relative flex-1 w-full min-w-0 overflow-hidden" style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
            }}>
                {/* Scrolling logos */}
                <div className="flex w-max">
                  <motion.div key="logo-carousel" className="flex items-center gap-6 md:gap-8" animate={{
                  x: ["0%", "-50%"]
                }} transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear"
                  }
                }}>
                    {logos.map((logo, index) => <div key={`${logo.name}-${index}`} className="flex items-center justify-center shrink-0 h-6 md:h-8">
                        {logo.src ? <img src={logo.src} alt={logo.name} className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" /> : <div className="h-5 md:h-6 px-4 flex items-center justify-center bg-white/50 rounded-lg border border-sage/20">
                            <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                              {logo.name}
                            </span>
                          </div>}
                      </div>)}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;