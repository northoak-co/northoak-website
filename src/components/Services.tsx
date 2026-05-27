import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { services } from "@/data/taxonomy";

import apolloLogo from "@/assets/logos/sales/apollo.png";
import clariLogo from "@/assets/logos/sales/clari.png";
import salesloftLogo from "@/assets/logos/sales/salesloft.png";
import instantlyLogo from "@/assets/logos/sales/instantly.png";
import hightouchLogo from "@/assets/logos/sales/hightouch.png";
import clayLogo from "@/assets/logos/sales/clay.png";
import salesforceLogo from "@/assets/logos/sales/salesforce.png";
import gongLogo from "@/assets/logos/sales/gong.png";
import pipedriveLogo from "@/assets/logos/sales/pipedrive.png";
import zoominfoLogo from "@/assets/logos/sales/zoominfo.png";
import hubspotLogo from "@/assets/logos/sales/hubspot.png";
import heyreachLogo from "@/assets/logos/sales/heyreach.png";
import sixSenseLogo from "@/assets/logos/sales/6sense.png";
import attioLogo from "@/assets/logos/sales/attio.png";
import mixmaxLogo from "@/assets/logos/sales/mixmax.png";

import borderlessLogo from "@/assets/logos/finance/borderless.png";
import deelLogo from "@/assets/logos/finance/deel.png";
import squareLogo from "@/assets/logos/finance/square.png";
import stripeLogo from "@/assets/logos/finance/stripe.png";
import brexLogo from "@/assets/logos/finance/brex.png";
import ripplingLogo from "@/assets/logos/finance/rippling.png";
import adyenLogo from "@/assets/logos/finance/adyen.png";
import vennLogo from "@/assets/logos/finance/venn.png";
import tipaltiLogo from "@/assets/logos/finance/tipalti.png";
import xeroLogo from "@/assets/logos/finance/xero.png";
import rampLogo from "@/assets/logos/finance/ramp.png";
import mercuryLogo from "@/assets/logos/finance/mercury.png";
import quickbooksLogo from "@/assets/logos/finance/quickbooks.png";
import expensifyLogo from "@/assets/logos/finance/expensify.png";
import billLogo from "@/assets/logos/finance/bill.png";
import klarnaLogo from "@/assets/logos/finance/klarna.png";

import mixpanelLogo from "@/assets/logos/marketing/mixpanel.png";
import typeformLogo from "@/assets/logos/marketing/typeform.png";
import figmaLogo from "@/assets/logos/marketing/figma.png";
import sproutsocialLogo from "@/assets/logos/marketing/sproutsocial.png";
import amplitudeLogo from "@/assets/logos/marketing/amplitude.png";
import webflowLogo from "@/assets/logos/marketing/webflow.png";
import semrushLogo from "@/assets/logos/marketing/semrush.png";
import customerioLogo from "@/assets/logos/marketing/customerio.png";
import twilioLogo from "@/assets/logos/marketing/twilio.png";
import tallyLogo from "@/assets/logos/marketing/tally.png";
import iterableLogo from "@/assets/logos/marketing/iterable.png";
import canvaLogo from "@/assets/logos/marketing/canva.png";
import klaviyoLogo from "@/assets/logos/marketing/klaviyo.png";
import mailchimpLogo from "@/assets/logos/marketing/mailchimp.png";
import marketingHubspotLogo from "@/assets/logos/marketing/hubspot.png";
import googleanalyticsLogo from "@/assets/logos/marketing/googleanalytics.png";
import shopifyLogo from "@/assets/logos/marketing/shopify.png";
import yotpoLogo from "@/assets/logos/marketing/yotpo.png";
import trustpilotLogo from "@/assets/logos/marketing/trustpilot.png";
import smileioLogo from "@/assets/logos/marketing/smileio.png";
import sendgridLogo from "@/assets/logos/marketing/sendgrid.png";

import intercomLogo from "@/assets/logos/support/intercom.png";
import helpscoutLogo from "@/assets/logos/support/helpscout.png";
import aircallLogo from "@/assets/logos/support/aircall.png";
import zohoLogo from "@/assets/logos/support/zoho.png";
import zendeskLogo from "@/assets/logos/support/zendesk.png";
import chatbaseLogo from "@/assets/logos/support/chatbase.png";
import freshworksLogo from "@/assets/logos/support/freshworks.png";
import kustomerLogo from "@/assets/logos/support/kustomer.png";
import gorgiasLogo from "@/assets/logos/support/gorgias.png";
import adaLogo from "@/assets/logos/support/ada.png";

const salesLogos = [
  { name: "Apollo", src: apolloLogo },
  { name: "Clari", src: clariLogo },
  { name: "Salesloft", src: salesloftLogo },
  { name: "Instantly", src: instantlyLogo },
  { name: "Hightouch", src: hightouchLogo },
  { name: "Clay", src: clayLogo },
  { name: "Salesforce", src: salesforceLogo },
  { name: "Gong", src: gongLogo },
  { name: "Pipedrive", src: pipedriveLogo },
  { name: "ZoomInfo", src: zoominfoLogo },
  { name: "HubSpot", src: hubspotLogo },
  { name: "HeyReach", src: heyreachLogo },
  { name: "6sense", src: sixSenseLogo },
  { name: "Attio", src: attioLogo },
  { name: "Mixmax", src: mixmaxLogo },
  // Duplicates for seamless loop
  { name: "Apollo", src: apolloLogo },
  { name: "Clari", src: clariLogo },
  { name: "Salesloft", src: salesloftLogo },
  { name: "Instantly", src: instantlyLogo },
  { name: "Hightouch", src: hightouchLogo },
  { name: "Clay", src: clayLogo },
  { name: "Salesforce", src: salesforceLogo },
  { name: "Gong", src: gongLogo },
  { name: "Pipedrive", src: pipedriveLogo },
  { name: "ZoomInfo", src: zoominfoLogo },
  { name: "HubSpot", src: hubspotLogo },
  { name: "HeyReach", src: heyreachLogo },
  { name: "6sense", src: sixSenseLogo },
  { name: "Attio", src: attioLogo },
  { name: "Mixmax", src: mixmaxLogo },
];

const supportLogos = [
  { name: "Intercom", src: intercomLogo },
  { name: "Help Scout", src: helpscoutLogo },
  { name: "Aircall", src: aircallLogo },
  { name: "Zoho", src: zohoLogo },
  { name: "Zendesk", src: zendeskLogo },
  { name: "Chatbase", src: chatbaseLogo },
  { name: "Freshworks", src: freshworksLogo },
  { name: "Kustomer", src: kustomerLogo },
  { name: "Gorgias", src: gorgiasLogo },
  { name: "Ada", src: adaLogo },
  // Duplicates for seamless loop
  { name: "Intercom", src: intercomLogo },
  { name: "Help Scout", src: helpscoutLogo },
  { name: "Aircall", src: aircallLogo },
  { name: "Zoho", src: zohoLogo },
  { name: "Zendesk", src: zendeskLogo },
  { name: "Chatbase", src: chatbaseLogo },
  { name: "Freshworks", src: freshworksLogo },
  { name: "Kustomer", src: kustomerLogo },
  { name: "Gorgias", src: gorgiasLogo },
  { name: "Ada", src: adaLogo },
];

const marketingLogos = [
  { name: "Mixpanel", src: mixpanelLogo },
  { name: "Typeform", src: typeformLogo },
  { name: "Figma", src: figmaLogo },
  { name: "Sprout Social", src: sproutsocialLogo },
  { name: "Amplitude", src: amplitudeLogo },
  { name: "Webflow", src: webflowLogo },
  { name: "Semrush", src: semrushLogo },
  { name: "Customer.io", src: customerioLogo },
  { name: "Twilio", src: twilioLogo },
  { name: "Tally", src: tallyLogo },
  { name: "Iterable", src: iterableLogo },
  { name: "Canva", src: canvaLogo },
  { name: "Klaviyo", src: klaviyoLogo },
  { name: "Mailchimp", src: mailchimpLogo },
  { name: "HubSpot", src: marketingHubspotLogo },
  { name: "Google Analytics", src: googleanalyticsLogo },
  { name: "Shopify", src: shopifyLogo },
  { name: "Yotpo", src: yotpoLogo },
  { name: "Trustpilot", src: trustpilotLogo },
  { name: "Smile.io", src: smileioLogo },
  { name: "Sendgrid", src: sendgridLogo },
  // Duplicates for seamless loop
  { name: "Mixpanel", src: mixpanelLogo },
  { name: "Typeform", src: typeformLogo },
  { name: "Figma", src: figmaLogo },
  { name: "Sprout Social", src: sproutsocialLogo },
  { name: "Amplitude", src: amplitudeLogo },
  { name: "Webflow", src: webflowLogo },
  { name: "Semrush", src: semrushLogo },
  { name: "Customer.io", src: customerioLogo },
  { name: "Twilio", src: twilioLogo },
  { name: "Tally", src: tallyLogo },
  { name: "Iterable", src: iterableLogo },
  { name: "Canva", src: canvaLogo },
  { name: "Klaviyo", src: klaviyoLogo },
  { name: "Mailchimp", src: mailchimpLogo },
  { name: "HubSpot", src: marketingHubspotLogo },
  { name: "Google Analytics", src: googleanalyticsLogo },
  { name: "Shopify", src: shopifyLogo },
  { name: "Yotpo", src: yotpoLogo },
  { name: "Trustpilot", src: trustpilotLogo },
  { name: "Smile.io", src: smileioLogo },
  { name: "Sendgrid", src: sendgridLogo },
];

const financeLogos = [
  { name: "Borderless AI", src: borderlessLogo },
  { name: "Deel", src: deelLogo },
  { name: "Square", src: squareLogo },
  { name: "Stripe", src: stripeLogo },
  { name: "Brex", src: brexLogo },
  { name: "Rippling", src: ripplingLogo },
  { name: "Adyen", src: adyenLogo },
  { name: "Venn", src: vennLogo },
  { name: "Tipalti", src: tipaltiLogo },
  { name: "Xero", src: xeroLogo },
  { name: "Ramp", src: rampLogo },
  { name: "Mercury", src: mercuryLogo },
  { name: "QuickBooks", src: quickbooksLogo },
  { name: "Expensify", src: expensifyLogo },
  { name: "Bill", src: billLogo },
  { name: "Klarna", src: klarnaLogo },
  // Duplicates for seamless loop
  { name: "Borderless AI", src: borderlessLogo },
  { name: "Deel", src: deelLogo },
  { name: "Square", src: squareLogo },
  { name: "Stripe", src: stripeLogo },
  { name: "Brex", src: brexLogo },
  { name: "Rippling", src: ripplingLogo },
  { name: "Adyen", src: adyenLogo },
  { name: "Venn", src: vennLogo },
  { name: "Tipalti", src: tipaltiLogo },
  { name: "Xero", src: xeroLogo },
  { name: "Ramp", src: rampLogo },
  { name: "Mercury", src: mercuryLogo },
  { name: "QuickBooks", src: quickbooksLogo },
  { name: "Expensify", src: expensifyLogo },
  { name: "Bill", src: billLogo },
  { name: "Klarna", src: klarnaLogo },
];

import instacartLogo from "@/assets/logos/back-office/instacart.png";
import resyLogo from "@/assets/logos/back-office/resy.png";
import opentableLogo from "@/assets/logos/back-office/opentable.png";
import bitwardenLogo from "@/assets/logos/back-office/bitwarden.png";
import boCanvaLogo from "@/assets/logos/back-office/canva.png";
import gsheetsLogo from "@/assets/logos/back-office/gsheets.png";
import claudeLogo from "@/assets/logos/back-office/claude.png";
import lastpassLogo from "@/assets/logos/back-office/lastpass.png";
import docusignLogo from "@/assets/logos/back-office/docusign.png";
import mondaycomLogo from "@/assets/logos/back-office/mondaycom.png";
import onepasswordLogo from "@/assets/logos/back-office/1password.png";
import asanaLogo from "@/assets/logos/back-office/asana.png";
import trivagoLogo from "@/assets/logos/back-office/trivago.png";
import clickupLogo from "@/assets/logos/back-office/clickup.png";
import geminiLogo from "@/assets/logos/back-office/gemini.png";
import chatgptLogo from "@/assets/logos/back-office/chatgpt.png";
import teamsLogo from "@/assets/logos/back-office/teams.png";
import gslidesLogo from "@/assets/logos/back-office/gslides.png";
import expediaLogo from "@/assets/logos/back-office/expedia.png";
import trelloLogo from "@/assets/logos/back-office/trello.png";
import slackLogo from "@/assets/logos/back-office/slack.png";
import linearLogo from "@/assets/logos/back-office/linear.png";
import gcalLogo from "@/assets/logos/back-office/gcal.png";
import superhumanLogo from "@/assets/logos/back-office/superhuman.png";
import notionLogo from "@/assets/logos/back-office/notion.png";
import calendlyLogo from "@/assets/logos/back-office/calendly.png";
import aftershipLogo from "@/assets/logos/back-office/aftership.png";
import calcomLogo from "@/assets/logos/back-office/calcom.png";
import shipbobLogo from "@/assets/logos/back-office/shipbob.png";
import easyshipLogo from "@/assets/logos/back-office/easyship.png";

const backOfficeLogos = [
  { name: "Instacart", src: instacartLogo },
  { name: "Resy", src: resyLogo },
  { name: "OpenTable", src: opentableLogo },
  { name: "Bitwarden", src: bitwardenLogo },
  { name: "Canva", src: boCanvaLogo },
  { name: "Google Sheets", src: gsheetsLogo },
  { name: "Claude", src: claudeLogo },
  { name: "LastPass", src: lastpassLogo },
  { name: "DocuSign", src: docusignLogo },
  { name: "Monday.com", src: mondaycomLogo },
  { name: "1Password", src: onepasswordLogo },
  { name: "Asana", src: asanaLogo },
  { name: "Trivago", src: trivagoLogo },
  { name: "ClickUp", src: clickupLogo },
  { name: "Gemini", src: geminiLogo },
  { name: "ChatGPT", src: chatgptLogo },
  { name: "Microsoft Teams", src: teamsLogo },
  { name: "Google Slides", src: gslidesLogo },
  { name: "Expedia", src: expediaLogo },
  { name: "Trello", src: trelloLogo },
  { name: "Slack", src: slackLogo },
  { name: "Linear", src: linearLogo },
  { name: "Google Calendar", src: gcalLogo },
  { name: "Superhuman", src: superhumanLogo },
  { name: "Notion", src: notionLogo },
  { name: "Calendly", src: calendlyLogo },
  { name: "AfterShip", src: aftershipLogo },
  { name: "Cal.com", src: calcomLogo },
  { name: "ShipBob", src: shipbobLogo },
  { name: "Easyship", src: easyshipLogo },
  // Duplicates for seamless loop
  { name: "Instacart", src: instacartLogo },
  { name: "Resy", src: resyLogo },
  { name: "OpenTable", src: opentableLogo },
  { name: "Bitwarden", src: bitwardenLogo },
  { name: "Canva", src: boCanvaLogo },
  { name: "Google Sheets", src: gsheetsLogo },
  { name: "Claude", src: claudeLogo },
  { name: "LastPass", src: lastpassLogo },
  { name: "DocuSign", src: docusignLogo },
  { name: "Monday.com", src: mondaycomLogo },
  { name: "1Password", src: onepasswordLogo },
  { name: "Asana", src: asanaLogo },
  { name: "Trivago", src: trivagoLogo },
  { name: "ClickUp", src: clickupLogo },
  { name: "Gemini", src: geminiLogo },
  { name: "ChatGPT", src: chatgptLogo },
  { name: "Microsoft Teams", src: teamsLogo },
  { name: "Google Slides", src: gslidesLogo },
  { name: "Expedia", src: expediaLogo },
  { name: "Trello", src: trelloLogo },
  { name: "Slack", src: slackLogo },
  { name: "Linear", src: linearLogo },
  { name: "Google Calendar", src: gcalLogo },
  { name: "Superhuman", src: superhumanLogo },
  { name: "Notion", src: notionLogo },
  { name: "Calendly", src: calendlyLogo },
  { name: "AfterShip", src: aftershipLogo },
  { name: "Cal.com", src: calcomLogo },
  { name: "ShipBob", src: shipbobLogo },
  { name: "Easyship", src: easyshipLogo },
];

const techStackLabel: Record<string, string> = {
  "customer-support": "OUR CX TECH STACK",
  "sales-gtm": "OUR GTM TECH STACK",
  "marketing": "OUR MARTECH STACK",
  "finance-accounting": "OUR FINTECH STACK",
  "back-office-admin": "OUR ADMIN TECH STACK",
};

const carouselDuration: Record<string, number> = {
  "customer-support": 12,
  "sales-gtm": 12,
  "marketing": 12,
  "finance-accounting": 12,
  "back-office-admin": 20,
};

const serviceLogos: Record<string, typeof salesLogos> = {
  "sales-gtm": salesLogos,
  "customer-support": supportLogos,
  "marketing": marketingLogos,
  "finance-accounting": financeLogos,
  "back-office-admin": backOfficeLogos,
};

const MiniLogoCarousel = ({ carouselLogos, duration = 20 }: { carouselLogos: { name: string; src: string }[]; duration?: number }) => {
  if (carouselLogos.length === 0) return null;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: ["0%", "-50%"], transition: { x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" } } });
  }, [controls, duration]);

  return (
    <div className="relative h-8">
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ backgroundColor: "hsl(102 18% 93%)" }}
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex items-center gap-6 absolute top-0 left-0"
          animate={controls}
        >
          {carouselLogos.map((logo, i) => (
            <div key={`mini-${logo.name}-${i}`} className="flex items-center justify-center shrink-0 h-8" style={{ backgroundColor: "hsl(102 18% 93%)" }}>
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-auto object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="services" className="py-16 md:py-24" style={{ backgroundColor: "hsl(102 18% 93%)" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none mb-8"
            >
              Our<br />Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-sm"
            >
              We build dedicated, fully embedded teams across every core function of your business — so you can focus on what matters most.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-sm"
            >
              As startup people ourselves, our tech stacks cover all the tools you already (or want to) use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground border-b border-foreground pb-0.5 hover:text-sage hover:border-sage transition-colors"
              >
                See How It Works
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <div>
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={service.slug}>
                  <div className="border-t border-border/60" />
                  <div>
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex items-center justify-between w-full py-5 text-left group"
                    >
                      <span className="flex items-center gap-3">
                        <service.icon className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-sage transition-colors duration-200" />
                        <span className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-sage transition-colors duration-200">
                          {service.name}
                        </span>
                      </span>
                      <span className="ml-4 shrink-0 text-muted-foreground group-hover:text-sage transition-colors duration-200">
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 overflow-x-hidden">
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                              {service.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {service.roles.map((role) => (
                                <Link
                                  key={role.slug}
                                  to={`/roles/${role.slug}`}
                                  className="px-3.5 py-1.5 rounded-full border border-border text-sm text-foreground hover:border-sage hover:text-sage transition-colors duration-200"
                                >
                                  {role.name}
                                </Link>
                              ))}
                            </div>

                            <Link
                              to={`/services/${service.slug}`}
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-sage hover:text-sage-dark transition-colors"
                            >
                              View {service.name} roles
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>

                            {/* Mini logo carousel */}
                            {(serviceLogos[service.slug] ?? []).length > 0 && (
                              <p className="text-xs text-muted-foreground/60 uppercase tracking-widest mt-8 mb-2">{techStackLabel[service.slug]}</p>
                            )}
                            <MiniLogoCarousel carouselLogos={serviceLogos[service.slug] ?? []} duration={carouselDuration[service.slug]} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-border/60" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
