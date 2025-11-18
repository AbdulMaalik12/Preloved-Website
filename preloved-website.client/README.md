# Preloved & New Clothing E‑Commerce — Project Documentation

## Overview
- Marketplace for both preloved and new apparel with secure payments, standardized condition grading, seller onboarding, verification, search, shipping, and support.
- Roles: Buyer, Seller, Admin.

## 1. Business Requirements
- Target Audience: urban 18–45, sustainability-minded; wants trusted grading, clear photos, accurate sizing, fast mobile checkout.
- Competitive Analysis: Depop/Poshmark/Vinted (social marketplace); eBay/Etsy/ThredUp (indirect). Differentiators: standardized grading, optional verification, hybrid inventory, powerful filters, seller analytics.
- Revenue Model: hybrid (10–15% commission tiered + optional subscription for branding/analytics/promotions); ancillary: promoted listings, verification fees, shipping margin, affiliate.

## 2. Technical Specifications
- Architecture: modular monolith MVP; domains — Auth, Catalog, Listings, Search, Orders, Payments, Shipping, Inventory, Reviews, Support, Admin. Evolves to microservices later.
- Stack (current repo): Frontend React (Vite) in `preloved-website.client`; Backend ASP.NET Core 8 API in `Preloved-Website.Server`.
- Database (key tables): `users`, `roles`, `sellers`, `brands`, `categories`, `products`, `product_variants`, `listings` (is_preloved, condition_grade, verification_status), `photos`, `inventory`, `carts` + `cart_items`, `orders` + `order_items`, `payments`, `shipments`, `reviews`, `disputes`, `promo_codes`.
- Condition Grades: NWT (new with tags), Excellent, Good, Fair.
- AuthN/AuthZ: JWT or ASP.NET Identity; OAuth (Google/Apple); MFA; RBAC (seller‑scoped actions); KYC for sellers before publishing/payout.
- Payments: Stripe Connect/Adyen/PayPal Marketplace; 3DS, split payouts, partial refunds, disputes, robust webhooks; idempotency keys.

## 3. User Flow Analysis
- Customer Journey: landing → discovery (search/filters: brand/size/condition/price/color) → PDP (photos, grading, measurements, seller rating, ETA, returns) → cart → checkout (address, shipping, payment SCA) → order confirmation → tracking → review prompt.
- Seller Onboarding: account + email verify → KYC identity + bank/tax → store setup (branding/policies/shipping) → optional subscription → grading/photos guide.
- Listing & Verification: create listing (details, price, photos, grade) → automated checks (normalization, image quality, prohibited items) → moderation → optional verification center (inspection, escrow release) → publish.
- Search & Filtering: OpenSearch/Elasticsearch facets; synonyms/stemming/typo tolerance; saved searches and alerts; personalization later.

## 4. Implementation Plan
- Roadmap: Phase 0 Discovery (1–2w) → Phase 1 Foundation (3–4w) → Phase 2 Buyer Experience (4–6w) → Phase 3 Seller & Listings (4–6w) → Phase 4 Payments & Shipping (3–4w) → Phase 5 QA & Hardening (2–3w) → Phase 6 Launch Prep (1–2w) → Phase 7 Post‑Launch (ongoing).
- Technology: Frontend React+Vite+TS, Tailwind/CSS Modules; Backend ASP.NET Core 8, Controllers, EF Core, Swashbuckle; Data PostgreSQL, Redis, OpenSearch, S3‑compatible storage; Integrations Stripe Connect, Shippo/EasyPost, Persona/Stripe Identity; Hosting Azure/AWS with CDN.
- QA: unit/integration/E2E (Playwright/Cypress); performance (k6) — p95 API < 400ms, search refresh < 2s; security (CodeQL, ZAP), MFA/authZ tests; accessibility WCAG 2.1 AA.
- Deployment & Monitoring: dev/stage/prod; blue‑green/canary; automated migrations; logs (Serilog JSON), metrics (Prometheus), tracing (OpenTelemetry), dashboards (Grafana), errors (Sentry); alerts on latency/error/payment failures/index lag.

## 5. Operational Considerations
- Inventory: IMS sync for new; per‑listing qty for preloved; reserved stock on cart; low‑stock alerts; reconciliation jobs.
- Shipping: multi‑carrier rates via aggregator; labels and tracking; return labels; address validation; cross‑border duties.
- Support: helpdesk integration (Zendesk/Freshdesk); auto‑triage; SLA tiers; knowledge base; feedback loop to backlog.
- Returns/Refunds: preloved shorter window + restocking optional; new 14–30 days; partial refunds; store credit incentives; fraud checks (photo evidence, device fingerprint, velocity).

## Diagrams (Text)
- Auth: Login/Register → Token (Access+Refresh) → MFA → Protected Routes → Refresh rotation → Revoke on logout/anomaly.
- Checkout: Cart → Address/Shipping → Payment Intent (3DS) → Place Order → Capture/Authorize → Webhook success → Fulfillment → Tracking → Payout → Review.
- Listing: Seller → Create Listing → Auto Checks → Moderation → (Optional) Verification → Publish → Search Index → Sales.

## Versioning & KPIs
- Version Control: trunk‑based, protected `main`, PR reviews, CI required; semantic versioning; migration scripts with rollbacks; doc updates via PRs.
- KPIs: GMV, conversion, AOV, repeat rate; listing quality, moderation turnaround; payment success, dispute rate; search latency, p95 API, uptime; support SLA, CSAT.
- Compliance & Security: GDPR/CCPA, consent; PCI‑DSS via gateway; least privilege, secrets management, encryption at rest/in transit, incident response.

## Code Pointers (Repo)
- API pipeline: `Preloved-Website.Server/Program.cs` — add authentication/authorization and endpoints.
- Controller conventions: `Preloved-Website.Server/Controllers/WeatherForecastController.cs`.
- Client entry: `preloved-website.client/src/main.jsx` — add routes/components for flows above.
