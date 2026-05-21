# NorthOak SEO/AEO Plan

Working document. Check off items as they ship. Drafted 2026-05-07 after benchmarking against venn.ca and validating against 2025–2026 evidence on AI citation behavior, SPA crawler rendering, and B2B-services content patterns.

---

## Context

**Current state:** Vite + React Router v6 SPA, client-side rendered, deployed on Vercel with `vercel.json` rewriting every route to `index.html`. ~10 routes total. No per-route meta, no structured data, no sitemap, no FAQ, no blog, no case studies. `index.html` still ships Lovable boilerplate (`author=Lovable`, `twitter:site=@Lovable`).

**Single biggest problem:** GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, and AppleBot do not execute JavaScript (confirmed by Vercel's 1.3B-fetch analysis and ALM Corp's 66B-fetch analysis). The site is functionally invisible to AI engines today. Slack, Discord, iMessage, LinkedIn link previews are also broken for the same reason.

**Strategy:** Fix the rendering foundation first, then build commercial-intent content (role pages, comparison pages, named case studies). Skip the blog cadence — it doesn't drive pipeline in this category. Allocate real effort to off-site presence (G2, listicles, podcasts, Reddit), which correlates with AI citation more strongly than backlinks (r=0.664 vs r=0.295, Ahrefs 75K-brand study).

---

## Competitive parity framework

Benchmark drafted 2026-05-07 after auditing six direct competitors: getmagic.com, supportninja.com, growthassistant.com, athena.com, hugoinc.com, keentohire.com. The framework defines what NorthOak must have to be *credible* in this category (table stakes) and where to invest to *stand out* (differentiator picks). Every item below is tracked against an existing P0/P1/P2 task or flagged as a new addition.

### What each competitor is best at (one line)

- **Magic** — scale + breadth (40+ pages, 13+ industry verticals) and an AI-augmentation story (Magic AI). Hero is generic; pricing is hidden.
- **SupportNinja** — risk-conscious / regulated buyers. Strongest compliance posture of the five (SOC 2 Type 2, PCI-DSS 4, HIPAA, GDPR), CEO video, named "Privacy-First" pillar.
- **GrowthAssistant** — *the most copy-pasteable conversion stack of the five.* Published price ($3,500/mo, month-to-month), free replacements anytime, named talent profile cards with achievements, buyer-matched CMO/CRO testimonials, founder-led origin story (Jesse Pujji / Ampush). If we're going to study one site line-by-line, it's this one.
- **Athena** — emotional/benefit-led brand for founders and execs. $3,000/mo published. Cinematic narrative testimonials. Compliance posture is weakest of the five despite the Stripe/Goldman/Sequoia logos.
- **Hugo (hugoinc.com)** — *vertical specialization done right.* Hero: *"Outsourcing+ Built to make you better."* Names "world-class teams" instead of "VAs." Logos: Google, Meta, Faire, Upwork, Outschool, Aurora, Attentive, Topicals. Seven industry pages (Gaming, Crypto, E-commerce, Health & Wellness, SaaS, Fintech, Edtech) — comparable to GA's depth but pointed at non-marketing buyers. Treats Trust & Safety and Data/AI labelling as co-equal service lines, not add-ons. ISO 27001 + MBE + Clutch 100. Weakness: zero founder visibility, no published pricing, no comparison pages, no calculator — same gaps as Magic.
- **Keen (keentohire.com)** — *recruiter-forward positioning.* Hero: *"We hire, manage, and give you direct access to premium talent offshore."* Where the other five lead with matching / embedded teams / pre-vetted pools, Keen leads with the hiring act itself — they recruit for you, then hand over direct access. Frames itself as "the evolution of outdated service models" and explicitly positions against agencies, freelancers, and BPOs ("lack urgency or incentives for your success"). Role breadth skews creative/marketing/sales (Graphic Designer, Social Media Manager, Video Editor, UGC Strategist, Copywriter, Creative Director, UI/UX, CSM, Email Marketing, Sales Agent, Customer Service Agent). Trust posture is thin: three named CEO testimonials (Heritage Cellars, Lancer Skincare, Remote Pharmacy), no client logo wall, no pricing, no compliance badges, no founder visibility, no guarantee. Useful as a positioning reference (recruiter framing) more than a parity benchmark.

### Table stakes — what every credible competitor has

NorthOak must check every box below to be considered seriously. Status reflects what's already shipped, what's tracked elsewhere in this plan, and what's net-new.

| # | Item | Status | Tracked in |
|---|---|---|---|
| 1 | Named-client logo wall (≥5 recognizable buyers) | ✅ have | 20 logos already on homepage |
| 2 | 3+ case studies with hard metrics on dedicated URLs | ⏳ planned | P2 #14 |
| 3 | 5+ testimonials with full name, title, company, photo | ⏳ planned | P1 #10 (homepage), expand in P2 |
| 4 | Multiple role pages (≥5) | ✅ have | 6 role pages, parity with category |
| 5 | "How It Works" page (3-step process, vetting funnel, replacement guarantee) | ❌ new | **Added to P1 below** |
| 6 | Pricing signal — published rate or transparent "starts at $X" | ⚠️ pending | Decision still open (see Decisions section) |
| 7 | Comparison/positioning artifact (vs in-house, vs freelance, vs BPO) | ⏳ planned | P1 #8 (3 `/vs/` pages) |
| 8 | Guarantee statement on home + role pages (free replacement, etc.) | ❌ new | **Added to P1 below** |
| 9 | `/about` page with founder/leadership face + bios | ⏳ planned | P1 #12 |
| 10 | Substantive trust artifact (security page, founder origin, named methodology) | ⏳ planned | P1 #13 (`/security`) + P2 differentiator below |

### Differentiator picks — where NorthOak invests to stand out

Pick **two or three**, not all. Spreading thin matches the bar; depth wins.

1. **Pricing transparency that beats Magic + SupportNinja, equals GrowthAssistant.** Publish a real monthly price + free-replacement guarantee on `/pricing`. Magic ($0 until you hire) and SupportNinja (3 named tiers, no dollars) are vague; GA and Athena look the most confident specifically because they publish. Tracked in Decisions section.
2. **One substantive trust artifact done well.** SupportNinja owns compliance, GA owns founder-origin, Magic owns AI, Hugo owns vertical depth. NorthOak should pick *one* and lead with it:
   - **Compliance** (SOC 2 Type II current or in-progress) — biggest commercial wedge for selling to regulated mid-market. SupportNinja's the bar (SOC 2 Type 2 + PCI-DSS 4 + HIPAA + GDPR); Hugo carries ISO 27001 + MBE as a lighter-weight version. Highest lift, highest payoff. Tracked in P1 #13 + Decisions.
   - **Founder origin story** — GA's Jesse Pujji / Ampush angle is the single most efficient trust move across the five sites. Hugo's omission of any founder face is the cleanest counter-example. Cheap; just needs founder time. Tracked in P1 #12.
3. **Named structural concept.** Every competitor has one (Magic's "Magic Match" + "Magic 24/7", SupportNinja's "MaaS / TaaS", GA's "First-Match Rate", Athena's "compounding partnership", Hugo's "Outsourcing+"). It gives sales something to point at and reporters something to cite. NorthOak does not have one yet — **added to P2 below**.
4. **Named AI-augmentation story.** Every competitor has one (Magic AI, NinjaAI, GAI). Becoming table-stakes-adjacent — needs a named version within 6 months, even if the underlying capability is light. **Added to P2 below.**

### What to deliberately skip (category over-investments)

- **13+ industry vertical pages (Magic-style).** NorthOak ships 2 in P2, only paired with case studies. Programmatic grids without authority are penalized. *(Hugo's 7 verticals are the realistic mid-state — useful reference if/when we expand past 2.)*
- **Refer-a-friend incentive program (Magic).** Low-ROI mechanic for B2B services with long sales cycles.
- **Email-gated lead magnets early (SupportNinja's 2026 CX Outsourcing Report).** Build trust through ungated case studies first; gating belongs to companies with brand authority to trade for the email.

### Honest scoring of NorthOak today vs the six

- **Stronger than Athena on:** logo wall caliber (NorthOak's 20 logos compete with Athena's), role-page breadth.
- **At parity with Hugo on:** logo caliber (both name Google/Meta-tier brands) and role-page breadth — but Hugo wins on industry depth (7 verticals vs our 0) and weak compliance posture (ISO 27001).
- **Stronger than nobody on:** trust artifacts, conversion clarity, founder visibility, content depth.
- **Closing the gap is mostly already in the plan.** P1 (testimonials, comparison pages, /about, /security, calculator) plus P2 (case studies + verticals) gets us to credible parity. The two new items below are the only structural gaps the framework surfaced.

---

## What we explicitly are NOT doing (and why)

- **Migrating to Next.js.** App Router would force `"use client"` on every framer-motion component, hydration boundaries on Tanstack Query, and `@supabase/ssr`. Pure overhead for ~10 routes.
- **Adding `llms.txt`.** 2025 server-log audits confirm no major AI engine fetches it. Cargo cult.
- **Listing AI bots in robots.txt as `Allow:`.** Allowing isn't a positive signal — it's just the absence of a block. Default permissive is correct.
- **Publishing 2 blog posts/week.** AI citation evidence rewards short structured passages and tables, not 1500-word filler. B2B services category evidence shows generic blogs don't drive pipeline.
- **Programmatic role × industry grids.** Risks thin-content penalties without site authority. Revisit after 50+ pages of real content.
- **`Review` JSON-LD.** Skip until we have real, named, attributed testimonials to mark up.
- **A 13+ industry-page sprawl** (Magic-style). 2 verticals max in P2, paired with case studies.
- **Refer-a-friend program** and **early email-gated lead magnets**. Both are category over-investments for our stage.

---

## P0 — Foundation (this week)

Highest-leverage technical work. Unlocks everything in P1.

- [x] **Migrate to React Router v7 framework mode with `prerender: true`** *(2026-05-07, branch `seo/rr-v7-migration`)*
  - Swapped `react-router-dom@6` for `react-router@7` + `@react-router/dev` + `@react-router/node` + `@react-router/serve`
  - Added `react-router.config.ts` with `ssr: false, prerender: true, appDirectory: "src"` so we keep the existing `src/` layout instead of reorganizing under `app/`
  - Replaced `vite.config.ts`'s `react()` plugin with `reactRouter()`; package scripts use `react-router build` / `react-router dev` (Vite alone doesn't trigger the prerender step)
  - Created `src/root.tsx` (HTML shell + `<Meta>`/`<Links>`/`<Outlet>`/`<Scripts>`/`<ScrollRestoration>`, providers wrapping `<Outlet>`, ErrorBoundary) and `src/routes.ts` (config-based routes pointing at the existing `src/pages/*`)
  - Updated all 12 component imports from `react-router-dom` → `react-router`
  - Deleted: `index.html`, `src/main.tsx`, `src/App.tsx`, `src/components/ScrollToTop.tsx` (replaced by RR v7's built-in `<ScrollRestoration>`)
  - Replaced the SPA-only `vercel.json` rewrite with `outputDirectory: "build/client"` + `cleanUrls: true`
  - Did NOT install `@vercel/react-router` — only needed when `ssr: true`; with `ssr: false + prerender: true` the output is plain static HTML that Vercel serves natively
  - **Verified:** build emits real HTML for all 12 routes; `bun run dev` serves each route with populated `<head>` + body content; no remaining `react-router-dom` imports; `tsc` clean
- [x] **Per-route meta via RR v7 `meta` export** *(2026-05-07)* — added `src/lib/seo.ts` with a `pageMeta()` helper; every page module now exports `meta = () => pageMeta({...})` with its own title, description, canonical URL, OG and Twitter cards. All 12 routes verified to emit unique `<title>` and canonical in prerendered HTML.
- [x] **Strip Lovable boilerplate from `index.html`** *(2026-05-07)*
  - Removed `<meta name="author" content="Lovable" />` and `<meta name="twitter:site" content="@Lovable" />`
  - Removed leftover TODO comments and the 28 stray blank lines between meta tags
  - Replaced the `storage.googleapis.com/gpt-engineer-file-uploads/...` OG image with `https://northoak.co/og-image.png` (placeholder logo — see open items below)
  - Tightened title and description with category keywords ("Operations Outsourcing for High-Growth Teams"); added `og:url`, `og:site_name`, `<link rel="canonical">`
- [x] **Generate `sitemap.xml` at build time** *(2026-05-07)* — `scripts/generate-sitemap.ts` walks `build/client/` for prerendered `index.html` files and emits `build/client/sitemap.xml`; wired up as a `postbuild` script so the sitemap always reflects what was actually shipped (no separate route list to keep in sync). 12 URLs in the current sitemap. `__spa-fallback.html` excluded.
- [x] **Update `robots.txt`** *(2026-05-07)* — collapsed redundant per-bot `Allow:` blocks down to a single default-allow + `Sitemap: https://northoak.co/sitemap.xml`.
- [x] **JSON-LD on every page** *(2026-05-07)*
  - `Organization` (name, url, logo, description, contactPoint with sales email) — emitted on every page via `<script>` in `src/root.tsx`'s `Layout` (literal element so it survives child-route meta overrides)
  - `WebSite` — same approach. `SearchAction` not added because the site has no search; revisit if/when one ships.
  - `Service` (with `serviceType`, `provider`, `areaServed`) on each of the 6 role pages via `serviceSchema()` helper in `src/lib/seo.ts`
  - `BreadcrumbList` on each role page via `breadcrumbSchema()` helper
  - `sameAs` LinkedIn URL not added yet — see open items below for the LinkedIn URL gap.
- [x] **Fix two real bugs** *(2026-05-07)*
  - `Footer.tsx` — broken LinkedIn `href="#"` social-icon block removed (add back when LinkedIn URL is provided)
  - `Footer.tsx` — "View all" link to `/roles` (404) removed; the 5 individual role links remain

**P0 acceptance check:** `curl -A "GPTBot" https://northoak.co/roles/crm-management` returns the role page's actual content in the HTML body (not an empty `<div id="root">`). Slack/LinkedIn link unfurls show the correct title and OG image per route.

### Open items from completed P0 work

- ~~**OG image is a placeholder.**~~ *(Resolved 2026-05-07)* — replaced with a 1200×630 NorthOak team photo at `public/og-image.png` (324KB, optimized).
- ~~**LinkedIn URL needed.**~~ *(Resolved 2026-05-07)* — `https://www.linkedin.com/company/northoak`. Footer icon restored (with `target="_blank"` + `rel="noopener noreferrer"`); URL added to `Organization` JSON-LD `sameAs` in `src/root.tsx`.
- ~~**Branch `seo/rr-v7-migration` not yet merged.**~~ *(Resolved 2026-05-07)* — merged to `main` via PR #1 after fixing a Vercel build failure caused by stale pre-migration lockfiles (`package-lock.json` + `bun.lockb`); both removed, only `bun.lock` remains. Vercel preview deploy passed before merge.

### Issues surfaced by post-merge P0 review (2026-05-07)

- **Framer Motion `initial={{ opacity: 0 }}` is baked into prerendered HTML as `style="opacity:0"`.** 64 occurrences on the homepage, including every animated H1/H2 (e.g. "Unblocking bottlenecks so you can focus on growth", "Work with the best"). Role pages are affected too — the `<h1>CRM Management</h1>` ships with `opacity:0` baked in. The text content is still in the DOM, so pure text-extracting crawlers (most AI bots) should see it; CSS-aware extractors might treat it as hidden. Likely fine but unverified — confirm post-deploy with `curl -sA "GPTBot" https://northoak.co/roles/crm-management | grep -c "CRM Management"` (expect ≥1) and a text-extraction spot check (`lynx -dump` or similar). If the verification suggests text isn't being seen, swap `motion.h1`/`motion.h2` → static elements with Tailwind enter animations that don't bake `opacity:0` into the SSR output.
- **`Index.tsx` (homepage) has no own `meta` export.** It inherits `root.tsx`'s default meta — works today, but fragile. Anyone editing root meta affects every page that doesn't override (currently homepage + 404). Fix: add an explicit `meta = () => pageMeta({...})` to `Index.tsx` and treat root meta as a fallback-only safety net.
- **`NotFound.tsx` has no `meta` export and no `noindex`.** It currently inherits the homepage title/description, which is misleading. Add a `meta` export with `{ name: "robots", content: "noindex" }` so any URL that resolves to it isn't indexed.
- **404 HTTP status code behavior is unverified.** RR v7 emits `__spa-fallback.html`, but `vercel.json` has no rewrite using it — so Vercel serves its default 404 page for unknown URLs. SEO is fine (correct 404 status), but the branded `NotFound.tsx` only renders during client-side navigation. Verify with `curl -I https://northoak.co/does-not-exist` (expect `HTTP/2 404`). Optional follow-up: wire a Vercel rewrite to serve `__spa-fallback.html` for unknown paths *with status 404* if we want the branded experience.
- **`Pricing.tsx` already has 5 FAQs but no `FAQPage` JSON-LD.** Quick P1 win — wrap the existing FAQs with schema markup to capture LLM citations.

### Shipped 2026-05-21 — canonical domain fix, intake UX, email backend migration

- [x] **Canonical domain corrected to `northoak.co`** *(2026-05-21)*. A live audit caught that `northoak.com` resolves to an unrelated property-management company in Los Angeles — so every canonical URL, sitemap entry, JSON-LD `url`, robots `Sitemap:` line, and contact email the site was emitting pointed AI crawlers and link previews at the wrong host. Updated `SITE_URL` in `src/lib/seo.ts` + `scripts/generate-sitemap.ts`, the `Sitemap:` line in `public/robots.txt`, and the contact email (now `hello@northoak.co`) across `src/root.tsx` (Organization JSON-LD), `Footer`, `PrivacyPolicy`, `TermsOfService`. P0 acceptance check above updated to `northoak.co` and re-verified post-deploy.
- [x] **Multi-step "Build Your Dream Team" intake on `/get-started`** *(2026-05-21)*. Replaced the single-page BookingForm with a 5-step flow modeled on hugoinc.com's intake (services → timeline → team size → outsourcing journey → contact). UX choices: single-select cards with auto-advance, no Continue button, centered Back+Submit row with a subtle pill on Back, fixed `min-h` so the footer doesn't jump between steps, wrapped in the same sage-gradient container + mouse-tracking orbs as the rest of the site's hero sections. Hero CTA copy now reads "Build Your Dream Team" and routes here. `src/components/MultiStepIntake.tsx` (new) + slimmed `src/pages/GetStarted.tsx`. `BookingForm.tsx` is retained for the homepage `CTASection` and shares the same backend.
- [x] **Email backend moved off Supabase onto Vercel + Resend** *(2026-05-21)*. The original Supabase edge function (`send-contact-form`) lived in a Lovable-provisioned project we don't have admin access to (403 on `supabase functions deploy`). Replaced with `api/contact.ts` — a Vercel serverless function that calls Resend directly, with cleaner conditional row rendering, HTML-escaping of user input, and a subject line that now includes the submitter's name when present. Both forms (`MultiStepIntake` + `BookingForm`) now POST to `/api/contact`; the Supabase edge function under `supabase/functions/` is dead code we can delete once we're confident the migration is stable. Added `resend` + `@vercel/node` deps; `@supabase/supabase-js` is no longer referenced anywhere.
- [x] **Copy polish on the homepage hero** *(2026-05-21)*. CTA "Speak With an Expert" → "Build Your Dream Team"; subhead refreshed to "Quickly and seamlessly scale your team with a talent system specifically designed for high-growth teams"; secondary heading "A vetted team of global operations experts" → "Which function are you hiring for?" to set up the multi-step intake flow. Footer copyright now reads "© NorthOak {year}, All Rights Reserved" (dynamic year).
- [x] **Keen (keentohire.com) added to the competitive parity framework** *(2026-05-21)* — recruiter-forward positioning ("We hire, manage, and give you direct access to premium talent offshore"); useful as a positioning reference more than a parity benchmark (thin trust posture: no logos, no pricing, no compliance, no founder, no guarantee).

### Open items from the 2026-05-21 work

- **Resend deliverability dependent on user-controlled config.** `RESEND_API_KEY` is now an environment variable in Vercel; `northoak.co` needs to be a verified sending domain at Resend for the `no-reply@northoak.co` `from:` address to deliver. If Resend was set up by a third party we can't reach, fall back to `from: "NorthOak <onboarding@resend.dev>"` (Resend's pre-verified test domain) in `api/contact.ts` until DNS verification clears.
- **Dead Supabase edge function** under `supabase/functions/send-contact-form/index.ts` is no longer reachable from the site. Safe to delete once the new path is verified.
- **Repo move redirect.** `git push` is going through GitHub's redirect from `northoak-co/northoakv2` to `northoak-co/northoak-website`. Update the remote URL when convenient: `git remote set-url origin https://github.com/northoak-co/northoak-website.git`.

---

## P1 — Content surface (next 2–3 weeks)

Build the bottom-of-funnel pages. Commercial-intent content drives almost all qualified traffic in this category; informational top-of-funnel converts at 0.1–0.5% vs ~7% for comparison/alternatives content (CXL, First Page Sage benchmarks).

- [ ] **Deepen each role page from ~150 to ~600–900 words**, structured for AI citation:
  - TL;DR answer in the first 60 words (front-loading captures 44% of LLM citations per Profound's analysis)
  - "What a [role] does day-to-day" — bulleted task list
  - "Tools they're proficient in" (HubSpot, Salesforce, QuickBooks, Zendesk, Gorgias, etc. — searched terms)
  - **Cost section** — comparison table "Domestic [role] vs NorthOak" (tables get 4.2× more LLM citations than prose)
  - "How fast you can hire" timeline
  - 5–6 role-specific FAQs at the bottom
  - Roles to update: CRM Management, Customer Support, HR Admin, Virtual Assistant, Finance & Accounting, Back Office Admin
- [ ] **Three comparison pages** (highest-cited content type per Profound's data — ~32.5% of AI citations)
  - [ ] `/vs/upwork-fiverr` — vetting, replacement, account management, payroll/compliance
  - [ ] `/vs/domestic-hire` — loaded cost, time-to-hire, flexibility (embeds the calculator from #11)
  - [ ] `/vs/traditional-bpo` — dedicated vs pooled, no minimums, smaller team
  - Each page: comparison table, FAQ section, `FAQPage` JSON-LD
  - Skip `vs Belay/Athena/Time Etc` for now — small sites don't win branded competitor SEO
- [ ] **Homepage FAQ section, 8–10 questions** wrapped with `FAQPage` JSON-LD
  - What is NorthOak?
  - How does NorthOak differ from Upwork/Fiverr/freelancers?
  - Where are NorthOak specialists based?
  - How fast can I hire?
  - What does it cost?
  - Who owns the work / IP?
  - How are specialists vetted?
  - What time zones do you cover?
  - How do contracts and termination work?
  - What roles do you not staff?
- [ ] **Three named, attributed testimonials on homepage** with role + company. We have 20 logos and zero quotes — easiest trust unlock available.
- [ ] **One calculator: "Loaded cost of a US hire vs NorthOak"**
  - Inputs: role + base salary
  - Output: fully-loaded domestic cost (benefits, taxes, PTO, equipment, recruiting cost) vs NorthOak monthly fee
  - Live on `/vs/domestic-hire`
  - Almost no competitor in this category has built this well
- [ ] **`/about` page** with founder names, photos, bios, LinkedIn links, where specialists are based, year founded. AI engines need an entity to attribute claims to. *(Parity item; also delivers on the differentiator pick if we lean into a founder-origin story like GrowthAssistant's Jesse Pujji / Ampush angle.)*
- [ ] **`/security` page** — SOC 2 status (current or roadmap), NDA/IP assignment language, data handling, device policy. Sales-cycle gate for mid-market deals. *(Differentiator opportunity — only SupportNinja has compliance badges across the four competitors.)*
- [ ] **`/how-it-works` page** *(parity gap surfaced by competitive review)* — 3-step process (intake → vetted match → embedded specialist), visualized vetting funnel ("top X% of applicants accepted"), match SLA (days to first interview), replacement guarantee. Every credible competitor has this page; NorthOak does not.
- [ ] **Guarantee statement on home + every role page** *(parity gap)* — visible above the fold somewhere. GrowthAssistant: *"If it's not a fit, we go back to work. Free, every time."* Magic: *"$0 until you hire."* Athena: replacement support. NorthOak needs its own one-line version. Drives conversion + closes a credibility gap that's free to fix.

---

## P2 — Trust + earned media (weeks 4–10)

Brand mentions correlate with AI citation at r=0.664 — strongest single factor in Ahrefs' 75K-brand study, ahead of backlinks (r=0.295) and DR (r=0.326). For a young brand this is leverage that on-site work alone can't replicate.

- [ ] **Case-study cadence: one named case study per month**
  - Format: client name (or pseudonym + industry/size), starting state, role staffed, KPIs (hours saved, $ saved, output volume), client quote
  - Aim: 6 in the first 6 months, pulled from the existing 20-logo wall
  - Each gets its own URL, JSON-LD, and is internally linked from the relevant role page and vertical page
- [ ] **Two vertical landing pages** — only the two with the strongest existing case studies
  - Likely candidates from current logo wall:
    - **E-commerce / DTC** (Italist, Verishop, Stylight, MyBestBrands, EGO, Hewi)
    - **SaaS / operations** (BlueJ, Venn, FlipGive, DOZR, Bonsai)
  - Each must embed a real case study from that vertical
- [ ] **Off-site presence — three bets**
  - [ ] G2 / Capterra listing under "BPO Services" or "Virtual Assistant Services"
  - [ ] Get on 3–5 existing "best [role] outsourcing companies" listicles (outreach to listicle authors)
  - [ ] One founder podcast appearance per quarter (Built to Sell, Operations with Sean Lane, etc.)
- [ ] **Reddit/Quora seeding** — 2–3 substantive answers/month in r/smallbusiness, r/startups, r/CustomerSuccess. NorthOak mentioned only when genuinely relevant. Perplexity especially weights Reddit citations.
- [ ] **Define and name a structural concept** *(differentiator pick from competitive review)*. Every credible competitor has one — Magic Match / Magic 24/7, SupportNinja's MaaS / TaaS, GrowthAssistant's First-Match Rate, Athena's compounding partnership. Goal: one named methodology or pod structure that sales can point at and reporters can cite. Document the choice on `/how-it-works`, then weave it across the homepage, comparison pages, and case studies.
- [ ] **Define and name an AI-augmentation story** *(differentiator pick)*. Every competitor has one (Magic AI, NinjaAI, GAI). Becoming table-stakes-adjacent. Even a light version — "every NorthOak specialist is trained on \[named tool/SOP\] and ships output reviewed by AI before delivery" — is enough at this stage. Skipping this for too long looks behind by 2026.

---

## P3 — After P0–P2 ship

- [ ] Submit sitemap to Google Search Console + Bing Webmaster Tools. Monitor coverage and which queries cite us.
- [ ] **Glossary section** (`/glossary/[term]`) — "BPO," "offshore staffing," "fractional operations," "loaded cost," "managed services vs staff augmentation," etc. Glossary/definitional pages are heavily cited by ChatGPT.
- [ ] **Consider a blog — only after ~6 case studies exist.** Cadence: 1 deep linkable asset per month, not 8 thin ones. Citation-friendly topics:
  - "[Role] cost in 2026" pricing posts
  - "[Tool A] vs [Tool B]" comparison posts
  - "How to onboard a [role]" SOPs

---

## Target sitemap after P0–P2

~18 pages, all bottom-of-funnel commercial intent:

- `/` (home)
- `/how-it-works`
- `/pricing`
- `/about`
- `/security`
- `/get-started`
- `/careers`
- `/roles/crm-management`
- `/roles/customer-support`
- `/roles/hr-admin`
- `/roles/virtual-assistant`
- `/roles/finance-accounting`
- `/roles/back-office-admin`
- `/vs/upwork-fiverr`
- `/vs/domestic-hire`
- `/vs/traditional-bpo`
- `/industries/ecommerce`
- `/industries/saas-startups`
- `/case-studies/[slug]` × 3+
- `/terms-of-service`, `/privacy-policy`

---

## Decisions still to make

- [x] ~~RR v7 vs Astro for the rendering migration~~ — picked RR v7 framework mode, shipped 2026-05-07.
- [ ] Pick the two verticals for P2 #2 — depends on which 2 case studies we can publish first.
- [x] ~~Decide whether to publish pricing on `/pricing` or keep it as a "Talk to us" funnel.~~ *(Already decided — `/pricing` publishes $20/hr ad-hoc, $2,000/mo Junior Associate, $2,500/mo Senior Associate, $3,500/mo Team Lead. Aligns with GrowthAssistant ($3,500/mo) and Athena ($3,000/mo) as category leaders; differentiates from Magic + SupportNinja's hidden pricing. Re-evaluate as a differentiator pick — see below.)*
- [ ] SOC 2 status — is NorthOak SOC 2 Type II, in progress, or neither? Wording on `/security` depends on this.
- [x] ~~Provide the canonical NorthOak LinkedIn company URL.~~ *(2026-05-07: `https://www.linkedin.com/company/northoak`)*
- [x] ~~Provide a designed 1200×630 OG image.~~ *(2026-05-07: NorthOak team photo, 1200×630, 324KB)*
- [ ] **Pick 2 differentiators from the parity framework.** Which two of {pricing transparency, SOC 2 / compliance lead, founder origin story, named structural concept, named AI story} do we lead with? Other three become "table stakes; do them, don't lead with them."
- [ ] Define the actual guarantee statement (e.g., "Free replacement within 30 days, no questions asked"). Wording goes on home + role pages once decided.

---

## Sources

**SPA rendering / AI crawlers:**
- [Vercel: The rise of the AI crawler](https://vercel.com/blog/the-rise-of-the-ai-crawler)
- [Passionfruit: Can LLMs Read Your SPA?](https://www.getpassionfruit.com/blog/javascript-rendering-and-ai-crawlers-can-llms-read-your-spa)
- [ALM Corp: 66B-request crawler analysis](https://almcorp.com/blog/openai-search-crawler-coverage-analysis-66-billion-bot-requests/)
- [React Router pre-rendering docs](https://reactrouter.com/how-to/pre-rendering)
- [React Router on Vercel](https://vercel.com/docs/frameworks/frontend/react-router)

**llms.txt and robots.txt:**
- [Longato: 2025 server-log audit of llms.txt](https://www.longato.ch/llms-recommendation-2025-august/)
- [PPC.land: llms.txt adoption stalls](https://ppc.land/llms-txt-adoption-stalls-as-major-ai-platforms-ignore-proposed-standard/)
- [Cloudflare: who's crawling in 2025](https://blog.cloudflare.com/from-googlebot-to-gptbot-whos-crawling-your-site-in-2025/)

**AI citation patterns:**
- [Profound: AI Platform Citation Patterns](https://www.tryprofound.com/blog/ai-platform-citation-patterns)
- [Digital Bloom: 2025 AI Citation Report](https://thedigitalbloom.com/learn/2025-ai-citation-llm-visibility-report/)
- [Am I Cited: passage length study](https://www.amicited.com/blog/optimal-passage-length-ai-citations/)
- [Ahrefs 75K-brand AI Overviews study (via Chris Long)](https://www.linkedin.com/posts/chris-long-marketing_seo-data-study-an-analysis-from-ahrefs-found-activity-7334185782213033986-NI0k)
- [Frase: FAQ schema and AI search](https://www.frase.io/blog/faq-schema-ai-search-geo-aeo)

**B2B services category evidence:**
- [First Page Sage: B2B content conversion benchmarks](https://firstpagesage.com/marketing/b2b-content-marketing-conversion-rates/)
- [CXL: bottom-of-funnel B2B SEO](https://cxl.com/blog/bottom-of-funnel-content-b2b-seo/)
- [CMI: 2025 B2B Content Marketing Trends](https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research-2025)
- [QXAccounting: SOC 2 as outsourcing standard](https://qxaccounting.com/usa/blog/soc-2-type-ii-zero-trust-non-negotiable-security-standards-for-outsourcing)

**Competitor reference:**
- [Belay Solutions](https://www.belaysolutions.com/) — vertical pages, vetting claims
- [Athena](https://www.athena.com/) — published $3,000/mo, narrative testimonials, weak compliance posture
- [Time Etc](https://www.timeetc.com/) — task-ideas wizard, comparison content
- [Somewhere](https://somewhere.com/roles) — role-page depth (~70 roles)
- [Magic (getmagic.com)](https://getmagic.com/) — AI-augmentation story, 13+ industry pages, "$0 until you hire" offer
- [SupportNinja](https://www.supportninja.com/) — strongest compliance posture (SOC 2 Type 2, PCI-DSS 4, HIPAA, GDPR), CEO video, "Privacy-First" pillar
- [GrowthAssistant](https://growthassistant.com/) — most copy-pasteable conversion stack (published $3,500/mo, free replacements, named talent cards, founder-led origin)
- [Hugo (hugoinc.com)](https://hugoinc.com/) — vertical specialization done right; Google/Meta/Faire/Upwork logo caliber; "Outsourcing+" named methodology; ISO 27001 + MBE; treats Trust & Safety + Data/AI as co-equal service lines
- [Keen (keentohire.com)](https://keentohire.com/) — recruiter-forward positioning ("We hire, manage, and give you direct access to premium talent offshore"); leans on the hiring act itself rather than matching/pre-vetted-pool framing; thin trust artifacts (no logos, pricing, compliance, founder, or guarantee); 3 named CEO testimonials
