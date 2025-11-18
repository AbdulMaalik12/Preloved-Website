# UI Design Preview — Preloved & New Clothing E‑Commerce

## Design System
- Colors: `primary #1E4AE8`, `accent #10B981`, `danger #EF4444`, `bg #F8FAFC`, `text #0F172A`, `muted #64748B`
- Typography: `Inter` — headings 700, body 400, microcopy 300
- Components: Navbar, Footer, Card, Badge, Button, Input, Select, Modal, Stepper, Table, Toast
- Condition badges: `NWT` (accent), `Excellent` (primary), `Good` (indigo), `Fair` (amber)

## Global Navigation
- Navbar: `[Logo] [Search] [Preloved] [New] [Sell] [Cart] [Account]`
- Footer: `[Links] [Policies] [Sustainability] [Socials]`

## Screens

### Home (Landing)
- Layout
  ```
  [Top Nav]
  [Hero: banner, CTA "Shop Preloved" | "Shop New"]
  [Featured Collections: 3–4 cards]
  [Trending Brands: pill list]
  [Sustainability Highlight: info strip]
  [Grid: mixed product cards]
  [Footer]
  ```
- Card content: image, title, brand, price, condition badge, seller rating stars

### Search & Results
- Layout
  ```
  [Nav]
  [Search Bar]
  [Filters Sidebar]
    - Condition | Size | Brand | Category | Price | Color | [Verified Only]
  [Sort: Relevance | Newest | Price]
  [Results Grid: product cards]
  [Pagination]
  ```
- Behavior: sticky filters on desktop; slide‑in drawer on mobile; active filter chips above grid

### Product Detail Page (PDP)
- Layout
  ```
  [Breadcrumb]
  [Gallery]            [Right Panel]
  - thumbnails/zoom    - Title, Brand, Category
                       - Price, Condition Badge
                       - Size/Color selectors
                       - Fit Notes
                       - Seller info (rating, policies)
                       - [Add to Cart] [Buy Now]
  [Tabs: Description | Measurements | Shipping & Returns | Reviews]
  [Related Items]
  ```
- Notes: show condition grade definition inline; verification status if applicable

### Cart
- Layout
  ```
  [Cart Items Table]
  - Image | Title | Seller | Condition | Qty | Price | Remove
  [Summary]
  - Subtotal | Shipping Estimator | Promo Code | [Checkout]
  ```
- Preloved items reserve briefly on add (TTL) to avoid oversells

### Checkout (Stepper)
- Layout
  ```
  [Stepper: 1 Address > 2 Shipping > 3 Payment > 4 Review]
  [Step Content]
  [Order Summary Sidebar]
  ```
- Steps: Address (save for future), Shipping (service levels + ETA/cost), Payment (wallet + 3DS), Review (final breakdown, place order)

### Order Confirmation & Tracking
- Layout
  ```
  [Order #, Status]
  [Items List]
  [Shipment(s): Carrier | Tracking | Status Timeline]
  [Actions: Contact Support | Start Return]
  ```
- Prompt for reviews after delivery

### Buyer Account Dashboard
- Layout
  ```
  [Sidebar]
  - Orders | Addresses | Payments | Saved Items | Settings
  [Main Panel: tables/lists per section]
  ```
- Security: device/session list; MFA toggle

### Seller Onboarding (Wizard)
- Layout
  ```
  [Stepper: Profile > KYC > Bank & Tax > Store Setup > Policies]
  [Form Panels + Progress Save]
  ```
- KYC status indicator; bank account connect via provider

### Seller Dashboard
- Layout
  ```
  [Top Metrics: GMV | Orders | Rating]
  [Tabs: Listings | Orders | Payouts | Analytics]
  [Listings Table: Title | Price | Qty | Condition | Status | Actions]
  [CTA: Create Listing]
  ```
- Bulk upload available for subscription sellers

### Create Listing (Wizard)
- Layout
  ```
  [Stepper: Details > Photos > Pricing > Verification > Publish]
  - Details: title, description, brand, category, size, color, material, is_preloved, condition grade, notes
  - Photos: uploader + quality score, min count per grade
  - Pricing: price, compare at, fee preview
  - Verification: optional service selection
  - Publish: preview card, status
  ```
- Auto checks: normalization, prohibited items detection; inline flags with resolve actions

### Admin Moderation
- Layout
  ```
  [Filters: status, flags, category]
  [Queue Table]
  - Listing | Seller | Flags | Submitted At | Actions
  [Review Panel]
  - Photos | Details | Decision (approve/reject/request changes)
  ```
- Notes: audit log and reason codes

## Mobile Adaptations
- Bottom tab: `Home`, `Search`, `Sell`, `Cart`, `Account`
- Filters open full‑screen modal
- PDP actions sticky at bottom; galleries swipeable

## Accessibility
- Focus states, skip links, high‑contrast badges
- Proper labels and inline error text
- Keyboard‑navigable galleries and steppers
- Alt text and semantic landmarks

## Component Map (client)
- `src/components/Navbar.jsx`: global navigation
- `src/components/ProductCard.jsx`: image, title, brand, price, badges
- `src/components/Filters.jsx`: facets + active chips
- `src/components/Stepper.jsx`: checkout/listing wizard
- `src/pages/Home.jsx`: hero + featured + grid
- `src/pages/Search.jsx`: search + filters + results
- `src/pages/Product.jsx`: PDP
- `src/pages/Cart.jsx`: cart
- `src/pages/Checkout/Address.jsx`
- `src/pages/Checkout/Shipping.jsx`
- `src/pages/Checkout/Payment.jsx`
- `src/pages/Checkout/Review.jsx`
- `src/pages/Account/Index.jsx`: dashboard
- `src/pages/Seller/Onboarding.jsx`
- `src/pages/Seller/Dashboard.jsx`
- `src/pages/Seller/ListingWizard.jsx`
- `src/pages/Admin/Moderation.jsx`

## Route Map
- `/` Home
- `/search` Search & Results
- `/product/:id` PDP
- `/cart` Cart
- `/checkout/address|shipping|payment|review` Checkout steps
- `/account/*` Buyer dashboard
- `/seller/onboarding` Onboarding wizard
- `/seller/dashboard` Seller dashboard
- `/seller/listing/new` Listing wizard
- `/admin/moderation` Moderation queue

## Wireframe Snippets (ASCII)
- Product Card
  ```
  +---------------------------+
  |        [ Image ]          |
  | Brand • Title             |
  | $120       [Excellent]    |
  | ★★★★☆ (124)               |
  +---------------------------+
  ```
- Filters Sidebar
  ```
  +---------------------+
  | Condition           |
  | ( ) NWT  ( ) Excl   |
  | ( ) Good ( ) Fair   |
  | Size                |
  | [XS][S][M][L][XL]   |
  | Brand [search]      |
  | Price [$__ - $__]   |
  | [✓] Verified Only   |
  +---------------------+
  ```
- PDP Layout
  ```
  [Gallery]    [Title + Price + Badge]
               [Selectors + Seller + CTAs]
  [Tabs: Description | Measurements | Shipping & Returns | Reviews]
  [Related Items]
  ```
- Checkout Stepper
  ```
  [1 Address]—[2 Shipping]—[3 Payment]—[4 Review]
  ```

## Implementation Tip
- Start with `Navbar`, `ProductCard`, `Filters`, and `Stepper`; wire routes per the map above.