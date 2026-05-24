import type { MetaDescriptor } from "react-router";

export const SITE_URL = "https://northoak.co";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

// Per-route meta descriptors. Includes title, description, OG, Twitter, and a
// canonical link. Each route exports `meta = () => pageMeta(...)`.
export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageMetaInput): MetaDescriptor[] {
  const url = `${SITE_URL}${path}`;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "NorthOak" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { tagName: "link", rel: "canonical", href: url },
  ];
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

// Schema.org Service JSON-LD for role pages. Returned as a meta descriptor
// (`script:ld+json`) so React Router emits it as <script type="application/ld+json">.
export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: ServiceSchemaInput): MetaDescriptor {
  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      serviceType,
      url: `${SITE_URL}${path}`,
      provider: {
        "@type": "Organization",
        name: "NorthOak",
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: "Worldwide",
      },
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): MetaDescriptor {
  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  };
}

type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]): MetaDescriptor {
  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_URL}${c.path}`,
      })),
    },
  };
}
