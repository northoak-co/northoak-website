import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Support
import intercomLogo from "@/assets/logos/support/intercom.png";
import zendeskLogo from "@/assets/logos/support/zendesk.png";
import gorgiasLogo from "@/assets/logos/support/gorgias.png";
import aircallLogo from "@/assets/logos/support/aircall.png";
import helpscoutLogo from "@/assets/logos/support/helpscout.png";
import freshworksLogo from "@/assets/logos/support/freshworks.png";

// Revenue
import apolloLogo from "@/assets/logos/sales/apollo.png";
import salesforceLogo from "@/assets/logos/sales/salesforce.png";
import hubspotRevLogo from "@/assets/logos/sales/hubspot.png";
import attioLogo from "@/assets/logos/sales/attio.png";
import pipedriveLogo from "@/assets/logos/sales/pipedrive.png";
import gongLogo from "@/assets/logos/sales/gong.png";

// Marketing
import klaviyoLogo from "@/assets/logos/marketing/klaviyo.png";
import shopifyLogo from "@/assets/logos/marketing/shopify.png";
import semrushLogo from "@/assets/logos/marketing/semrush.png";
import hubspotMktLogo from "@/assets/logos/marketing/hubspot.png";
import webflowLogo from "@/assets/logos/marketing/webflow.png";
import canvaLogo from "@/assets/logos/marketing/canva.png";

// Finance
import stripeLogo from "@/assets/logos/finance/stripe.png";
import quickbooksLogo from "@/assets/logos/finance/quickbooks.png";
import xeroLogo from "@/assets/logos/finance/xero.png";
import rampLogo from "@/assets/logos/finance/ramp.png";
import brexLogo from "@/assets/logos/finance/brex.png";
import mercuryLogo from "@/assets/logos/finance/mercury.png";

// Back Office
import notionLogo from "@/assets/logos/back-office/notion.png";
import slackLogo from "@/assets/logos/back-office/slack.png";
import asanaLogo from "@/assets/logos/back-office/asana.png";
import clickupLogo from "@/assets/logos/back-office/clickup.png";
import docusignLogo from "@/assets/logos/back-office/docusign.png";
import gsheetsLogo from "@/assets/logos/back-office/gsheets.png";

const toRad = (d: number) => (d * Math.PI) / 180;
const polar = (deg: number, r: number) => ({
  x: Math.cos(toRad(deg)) * r,
  y: Math.sin(toRad(deg)) * r,
});

const SR = 240; // service label radius from centre
const LR = 86;  // logo radius from service label
const DELTAS = [-50, -30, -10, 10, 30, 50]; // logo arc offsets

type Logo = { name: string; src: string };

const SERVICES: Array<{ slug: string; label: string; angle: number; logos: Logo[] }> = [
  {
    slug: "support",
    label: "Support",
    angle: -90,
    logos: [
      { name: "Intercom", src: intercomLogo },
      { name: "Zendesk", src: zendeskLogo },
      { name: "Gorgias", src: gorgiasLogo },
      { name: "Aircall", src: aircallLogo },
      { name: "Help Scout", src: helpscoutLogo },
      { name: "Freshworks", src: freshworksLogo },
    ],
  },
  {
    slug: "revenue",
    label: "Revenue",
    angle: -18,
    logos: [
      { name: "Apollo", src: apolloLogo },
      { name: "Salesforce", src: salesforceLogo },
      { name: "HubSpot", src: hubspotRevLogo },
      { name: "Attio", src: attioLogo },
      { name: "Pipedrive", src: pipedriveLogo },
      { name: "Gong", src: gongLogo },
    ],
  },
  {
    slug: "marketing",
    label: "Marketing",
    angle: 54,
    logos: [
      { name: "Klaviyo", src: klaviyoLogo },
      { name: "Shopify", src: shopifyLogo },
      { name: "Semrush", src: semrushLogo },
      { name: "HubSpot", src: hubspotMktLogo },
      { name: "Webflow", src: webflowLogo },
      { name: "Canva", src: canvaLogo },
    ],
  },
  {
    slug: "finance",
    label: "Finance",
    angle: 126,
    logos: [
      { name: "Stripe", src: stripeLogo },
      { name: "QuickBooks", src: quickbooksLogo },
      { name: "Xero", src: xeroLogo },
      { name: "Ramp", src: rampLogo },
      { name: "Brex", src: brexLogo },
      { name: "Mercury", src: mercuryLogo },
    ],
  },
  {
    slug: "back-office",
    label: "Back Office",
    angle: 198,
    logos: [
      { name: "Notion", src: notionLogo },
      { name: "Slack", src: slackLogo },
      { name: "Asana", src: asanaLogo },
      { name: "ClickUp", src: clickupLogo },
      { name: "DocuSign", src: docusignLogo },
      { name: "Google Sheets", src: gsheetsLogo },
    ],
  },
];

const TechStackUniverse = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center max-w-4xl mx-auto leading-tight"
        >
          NorthOak integrates seamlessly with the technology you already{" "}
          <span className="text-sage italic">(or want to)</span> use.
        </motion.h2>

        {/* Desktop orbit */}
        <div
          ref={ref}
          className="relative mx-auto hidden lg:block"
          style={{ height: 780, maxWidth: 940 }}
        >
          {/* Centre NorthOak badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-sage/10 border-2 border-sage/25 flex items-center justify-center z-10"
          >
            <span className="text-sm font-bold text-sage tracking-wide">NO</span>
          </motion.div>

          {/* Service groups */}
          {SERVICES.map((service, si) => {
            const sp = polar(service.angle, SR);

            return (
              <div
                key={service.slug}
                className="absolute"
                style={{
                  left: `calc(50% + ${sp.x}px)`,
                  top: `calc(50% + ${sp.y}px)`,
                  width: 0,
                  height: 0,
                }}
              >
                {/* Service label */}
                <motion.div
                  className="absolute z-10"
                  style={{ x: "-50%", y: "-50%" }}
                  initial={{ opacity: 0, x: `calc(-50% + ${-sp.x * 0.4}px)`, y: `calc(-50% + ${-sp.y * 0.4}px)` }}
                  animate={
                    inView
                      ? { opacity: 1, x: "-50%", y: "-50%" }
                      : {}
                  }
                  transition={{ duration: 0.55, delay: 0.3 + si * 0.1, ease: "easeOut" }}
                >
                  <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-widest text-foreground bg-background px-3 py-1.5 rounded-full border border-border shadow-sm">
                    {service.label}
                  </span>
                </motion.div>

                {/* Logos */}
                {service.logos.map((logo, li) => {
                  const lp = polar(service.angle + DELTAS[li], LR);
                  return (
                    <motion.div
                      key={logo.name}
                      className="absolute flex items-center justify-center bg-background rounded-xl border border-border/50 shadow-sm"
                      style={{
                        left: lp.x - 20,
                        top: lp.y - 20,
                        width: 40,
                        height: 40,
                      }}
                      initial={{
                        opacity: 0,
                        x: -sp.x * 0.35 - lp.x * 0.5,
                        y: -sp.y * 0.35 - lp.y * 0.5,
                        scale: 0.4,
                      }}
                      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + si * 0.1 + li * 0.055,
                        ease: "easeOut",
                      }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        style={{ width: 26, height: 26, objectFit: "contain", mixBlendMode: "multiply" }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Mobile fallback */}
        <div className="lg:hidden mt-14 space-y-10">
          {SERVICES.map((service, si) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: si * 0.08 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {service.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center bg-background rounded-xl border border-border/50 shadow-sm"
                    style={{ width: 52, height: 52 }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      style={{ width: 34, height: 34, objectFit: "contain", mixBlendMode: "multiply" }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackUniverse;
