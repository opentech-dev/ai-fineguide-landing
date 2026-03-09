# Fineguide.ai Website Design Brief

## Project Overview

**Client:** Fineguide.ai  
**Industry:** B2B SaaS - AI Customer Interaction Platform  
**Target Audience:** Business owners, operations managers, customer success leaders, and enterprise decision-makers looking for AI-powered customer engagement solutions.

**Core Product:** A unified AI platform that combines:
- AI chatbots and agents for customer support and lead capture
- Human handoff and live support capabilities
- Voice call quality assurance (VoiceQA) for call centers
- Workflow automation via n8n integration
- Conversation analytics and quality scoring

---

# Part 1: Design System & Guidelines

## 1.1 Brand Personality

**Brand Attributes:**
| Attribute | Expression |
|-----------|------------|
| **Intelligent** | Clean, structured layouts with purposeful white space |
| **Trustworthy** | Professional typography, balanced compositions |
| **Innovative** | Subtle modern touches, not gimmicky |
| **Approachable** | Warm accent colors, friendly imagery |
| **Enterprise-Ready** | Sophisticated, not playful or casual |

**Tone of Voice:**
- Confident but not arrogant
- Technical but accessible
- Professional but human
- Direct and clear

**Design Philosophy:**
The design should communicate "enterprise capability with startup agility." Think: Stripe, Linear, Vercel, Notion – sophisticated SaaS brands that feel premium without being cold.

---

## 1.2 Color Palette

### Primary Colors

**Deep Navy (Primary Background)**
```
Name: Midnight
Hex: #0F172A
RGB: 15, 23, 42
Usage: Primary dark backgrounds, hero sections, headers
```

**Rich Indigo (Primary Accent)**
```
Name: Brand Indigo
Hex: #4F46E5
RGB: 79, 70, 229
Usage: Primary buttons, links, key highlights
```

**Vibrant Violet (Secondary Accent)**
```
Name: Electric Violet
Hex: #7C3AED
RGB: 124, 58, 237
Usage: Gradients with indigo, secondary highlights
```

### Secondary Colors

**Success Green**
```
Name: Emerald
Hex: #10B981
RGB: 16, 185, 129
Usage: Success states, positive metrics, CTAs for trials
```

**Warm Amber**
```
Name: Amber
Hex: #F59E0B
RGB: 245, 158, 11
Usage: Warnings, automation features, n8n integration
```

**Professional Blue**
```
Name: Sky
Hex: #0EA5E9
RGB: 14, 165, 233
Usage: Information, support features, secondary actions
```

### Neutral Colors

```
White:        #FFFFFF - Clean backgrounds, cards
Snow:         #F8FAFC - Light section backgrounds
Mist:         #E2E8F0 - Borders, dividers
Slate:        #94A3B8 - Secondary text
Graphite:     #64748B - Muted text
Charcoal:     #334155 - Body text on light backgrounds
Obsidian:     #1E293B - Dark cards, elevated surfaces
```

### Gradient Combinations

**Hero Gradient (Primary)**
```css
background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%);
```

**Button Gradient (CTA)**
```css
background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
```

**Success Gradient**
```css
background: linear-gradient(135deg, #059669 0%, #10B981 100%);
```

**Accent Glow (For emphasis)**
```css
box-shadow: 0 0 60px rgba(79, 70, 229, 0.3);
```

### Color Usage Rules

1. **Dark mode is primary** - The website should be dark-first, not an afterthought
2. **Limit accent colors** - Max 2 accent colors per section
3. **Hierarchy through contrast** - Use color to guide the eye, not decorate
4. **Accessible contrast** - All text must meet WCAG AA standards (4.5:1 for body text)

---

## 1.3 Typography

### Font Stack

**Primary Font: Inter**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```
*Why Inter:* Designed for screens, excellent readability at all sizes, professional without being cold. Has variable font support for performance.

**Code/Technical Font: JetBrains Mono**
```css
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
```
*Usage:* Code snippets, technical specifications, credit amounts

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|---------------|---------------|--------|-------------|
| H1 (Hero) | 64px / 4rem | 40px / 2.5rem | 700 | 1.1 |
| H2 (Section) | 48px / 3rem | 32px / 2rem | 700 | 1.2 |
| H3 (Subsection) | 32px / 2rem | 24px / 1.5rem | 600 | 1.3 |
| H4 (Card Title) | 24px / 1.5rem | 20px / 1.25rem | 600 | 1.4 |
| H5 (Label) | 18px / 1.125rem | 16px / 1rem | 600 | 1.4 |
| Body Large | 20px / 1.25rem | 18px / 1.125rem | 400 | 1.6 |
| Body | 16px / 1rem | 16px / 1rem | 400 | 1.6 |
| Body Small | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 |
| Caption | 12px / 0.75rem | 12px / 0.75rem | 500 | 1.4 |

### Typography Rules

1. **Headlines:** Short, punchy, benefit-focused
2. **Body text:** Max 65-75 characters per line for readability
3. **Hierarchy:** Clear distinction between levels (min 1.25x scale ratio)
4. **Weight usage:** 
   - 400 (Regular) - Body text
   - 500 (Medium) - Emphasized body, navigation
   - 600 (Semibold) - Subheadings, buttons
   - 700 (Bold) - Headlines only

---

## 1.4 Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight inline spacing |
| `space-2` | 8px | Icon gaps, tight padding |
| `space-3` | 12px | Small component padding |
| `space-4` | 16px | Standard component padding |
| `space-6` | 24px | Card padding, list gaps |
| `space-8` | 32px | Section element gaps |
| `space-12` | 48px | Card gaps in grids |
| `space-16` | 64px | Section internal padding |
| `space-24` | 96px | Section external spacing |
| `space-32` | 128px | Major section breaks |

### Container Widths

```
Max container: 1280px
Content width: 1024px (for text-heavy sections)
Narrow content: 768px (for focused reading)
```

### Grid System

- 12-column grid for complex layouts
- 24px gutters (desktop), 16px (tablet), 12px (mobile)
- Breakpoints: 640px, 768px, 1024px, 1280px

---

## 1.5 Component Specifications

### Buttons

**Primary Button**
```
Background: Gradient (Indigo → Violet)
Text: White, 16px, Semibold
Padding: 16px 32px
Border Radius: 12px
Shadow: 0 4px 14px rgba(79, 70, 229, 0.4)
Hover: Slight scale (1.02), increased shadow
```

**Secondary Button**
```
Background: Transparent
Border: 1px solid rgba(255, 255, 255, 0.2)
Text: White, 16px, Semibold
Padding: 16px 32px
Border Radius: 12px
Hover: Border color lightens, subtle background
```

**Ghost Button**
```
Background: Transparent
Text: Indigo-400, 16px, Medium
Padding: 8px 16px
Hover: Subtle background tint
```

### Cards

**Standard Card**
```
Background: rgba(30, 41, 59, 0.5) with backdrop-blur
Border: 1px solid rgba(79, 70, 229, 0.2)
Border Radius: 16px
Padding: 32px
Shadow: 0 4px 24px rgba(0, 0, 0, 0.2)
Hover: Border color intensifies
```

**Feature Card**
```
Same as standard, plus:
- Gradient accent at top or left
- Icon container with gradient background
- Hover: Subtle lift (translateY -4px)
```

**Pricing Card**
```
Same as standard, plus:
- "Popular" badge option
- Outer glow on hover
- Larger padding (48px)
```

### Form Elements

**Input Field**
```
Background: rgba(30, 41, 59, 0.8)
Border: 1px solid rgba(148, 163, 184, 0.3)
Border Radius: 12px
Padding: 16px 20px
Text: White
Placeholder: Slate-400
Focus: Border color → Indigo-500, subtle glow
```

### Navigation

**Header**
```
Position: Sticky
Background: rgba(15, 23, 42, 0.8) with backdrop-blur
Height: 80px (desktop), 64px (mobile)
Logo: Left aligned
Nav Links: Center
CTA: Right aligned
Mobile: Hamburger menu
```

---

## 1.6 Iconography

**Icon Style:** Line icons with consistent 1.5-2px stroke weight

**Recommended Icon Set:** Lucide Icons (open source, consistent style)
- Matches the technical/modern aesthetic
- Extensive library
- SVG-based for performance

**Icon Sizing:**
```
Inline with text: 16-20px
Navigation: 20-24px
Feature icons: 24-32px
Hero/feature focal: 40-48px
```

**Icon Container Styling:**
```
Background: Gradient matching section theme
Border Radius: 12px (small), 16px (large)
Padding: 12px (small), 16px (large)
Shadow: Colored glow matching icon color
```

---

## 1.7 Imagery & Illustrations

### Photography Style
- **Not recommended for hero sections** - use illustrations or abstract visuals instead
- If used: Real people in professional settings, diverse, natural lighting
- Avoid: Stock photo clichés, fake smiles, outdated tech imagery

### Illustrations
- **Style:** Geometric, clean, using brand colors
- **Approach:** Abstract representations of concepts (data flow, connections, automation)
- **Execution:** Subtle gradients, thin lines, floating elements

### UI Screenshots
- Use actual product screenshots (not mockups)
- Present in device frames (browser window, phone)
- Apply subtle shadow and rounded corners
- Show real data/content, not Lorem ipsum

### Background Treatments
- Subtle gradient meshes
- Geometric patterns (grid dots, lines)
- Ambient color orbs (blurred, low opacity)
- Avoid: Busy patterns, stock textures

---

## 1.8 Motion & Animation

### Principles
1. **Purposeful** - Animation should guide attention, not distract
2. **Subtle** - Prefer micro-interactions over dramatic effects
3. **Fast** - Most transitions 150-300ms
4. **Consistent** - Same easing functions throughout

### Timing Functions
```css
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### Standard Transitions
```css
/* Buttons, links */
transition: all 0.2s var(--ease-out);

/* Cards, panels */
transition: all 0.3s var(--ease-in-out);

/* Page elements on scroll */
transition: opacity 0.5s, transform 0.5s var(--ease-out);
```

### Scroll Animations
- Fade up on scroll (translateY: 20px → 0, opacity: 0 → 1)
- Stagger children by 50-100ms
- Only animate once (not on every scroll direction change)

### Hover States
- Buttons: Scale 1.02, shadow increase
- Cards: Lift 4px, border glow
- Links: Color transition, optional underline reveal
- Icons: Subtle rotate or scale

---

## 1.9 Accessibility Requirements

### Color Contrast
- Body text on dark: minimum 4.5:1
- Large text (24px+): minimum 3:1
- UI components: minimum 3:1

### Interactive Elements
- Focus states visible on all interactive elements
- Touch targets minimum 44x44px
- Keyboard navigation supported

### Content
- Alt text for all images
- Semantic HTML structure
- ARIA labels where needed
- Skip links for navigation

---

# Part 2: Page Structure & Content

## 2.1 Site Architecture

```
Homepage (/)
├── Pricing (/pricing)
├── Platform
│   ├── AI Agents (/ai-agents)
│   ├── Lead Generation (/lead-generation)
│   ├── AI + Human Support (/ai-human-support)
│   ├── Voice QA (/voice-qa)
│   ├── Automation (/automation)
│   └── Analytics (/analytics)
├── Solutions
│   ├── Enterprise (/enterprise)
│   └── Industries (future)
├── Resources
│   ├── Blog (/blog)
│   ├── Case Studies (/case-studies) [future]
│   └── Documentation (external link)
├── Company
│   ├── About (/about)
│   └── Contact (/contact)
└── Legal
    ├── Privacy Policy (/privacy-policy)
    └── Terms of Service (/terms-of-service)
```

---

## 2.2 Homepage Structure

### Section 1: Hero
**Goal:** Immediately communicate value proposition and prompt action

**Layout:** Two-column (content left, visual right)

**Content:**
- Badge/label: "AI Customer Interaction Platform"
- Headline: "AI Assistance & Business Automation Platform" 
- Subheadline: "Unify every customer touchpoint with AI agents, human support, voice analytics, and endless automation. One platform, infinite possibilities."
- Key stats row: "All Channels | AI → Human | ∞ Automation"
- Primary CTA: "Explore the Platform - Free Trial"
- Secondary CTA: "Schedule a Demo"
- Trust line: "✓ No credit card required • ✓ 30-day free trial • ✓ Cancel anytime"

**Visual:** Abstract AI visualization or product interface preview

---

### Section 2: Social Proof Bar
**Goal:** Build immediate credibility

**Layout:** Full-width, minimal height

**Content:**
- "Trusted by 500+ growing companies"
- Scrolling logo carousel (8-10 customer logos)

---

### Section 3: Value Propositions
**Goal:** Answer "What's in it for me?"

**Layout:** 6-card grid (2x3 on desktop, 1x6 on mobile)

**Cards:**
1. "Never Lose Money While You Sleep" - 24/7 AI availability
2. "Brand Voice Control" - Customizable AI personality
3. "CRM Auto-Sync" - Seamless integration
4. "Deploy Instantly" - 5-minute setup
5. "Beat Your Competition" - Speed advantage
6. "Cut Support Costs by 80%" - ROI focus

---

### Section 4: Platform Modules
**Goal:** Explain what the platform does

**Layout:** Alternating left/right sections (5 modules)

**Modules:**
1. **AI Agents** (Green accent)
   - Icon: CPU
   - Stats: 30% more leads, 5 min setup, 24/7, 40+ languages
   - CTA: "Explore AI Agent Capabilities →"

2. **AI + Human Support** (Blue accent)
   - Icon: Headphones
   - Stats: Instant handoff, 40% higher CSAT, 100% context, Real-time
   - CTA: "Explore AI + Human Support →"

3. **Voice Quality Assurance** (Purple accent)
   - Icon: Microphone
   - Stats: 100% coverage, 60% better conversions, Real-time scoring
   - CTA: "Discover Voice QA →"

4. **Endless Automation** (Amber accent)
   - Icon: Zap
   - Stats: 1000+ integrations, Zero manual work, Visual builder, Free n8n
   - CTA: "Explore Automation →"

5. **Conversation Analytics** (Emerald accent)
   - Icon: Trending Up
   - Stats: 100% rated, Real-time scoring, Trend analysis, Auto-improve
   - CTA: "Explore Analytics →"

---

### Section 5: Integration Ecosystem
**Goal:** Show connectivity and flexibility

**Layout:** Integration grid + n8n partnership highlight

**Content:**
- "Powered by n8n" partnership badge
- Grid of 10-12 integration icons (HubSpot, Slack, Salesforce, Telegram, Teams, Gmail, Discord, WhatsApp, Mailchimp, Shopify)
- "1000+ Ready-to-use Integrations" badge
- Category tags: CRM & Sales, Communication, Marketing, Analytics, E-commerce, Productivity

---

### Section 6: Industry Use Cases
**Goal:** Help visitors self-identify

**Layout:** 4-card grid

**Cards:**
1. SaaS & Technology - "Increased qualified demos by 250%"
2. E-commerce & Retail - "Recovered 40% of abandoned carts"
3. Real Estate - "Increased qualified leads by 180%"
4. Financial Services - "Accelerated loan processing 60%"

**Footer:** "Don't see your industry? Our platform adapts to any business model."

---

### Section 7: FAQ
**Goal:** Overcome objections

**Layout:** Accordion-style, max 6 questions

**Questions:**
1. How quickly can I deploy an AI agent?
2. What makes Fineguide different from other chatbots?
3. Is my data secure and compliant?
4. What integrations are available?
5. What kind of support do you provide?
6. Can I cancel anytime?

---

### Section 8: Final CTA
**Goal:** Convert interested visitors

**Layout:** Centered, high-contrast section

**Content:**
- Headline: "Ready to Get 3x More Qualified Leads?"
- Subheadline: "Join 500+ companies already using Fineguide AI to capture and qualify leads 24/7."
- Primary CTA: "Start Free Trial Now"
- Stats row: 3x More Leads | 5 min Setup | 24/7 Capture
- Trust elements: 30-day trial, no credit card, cancel anytime

---

### Section 9: Footer
**Goal:** Navigation and trust

**Layout:** 4-column grid

**Columns:**
1. Company info, logo, trust badges, social links
2. Platform links (all product pages)
3. Solutions links (Enterprise, Pricing)
4. Company links (About, Contact, Blog, Status)

**Bottom bar:** Copyright, Privacy Policy, Terms of Service

---

## 2.3 Individual Page Briefs

### Pricing Page

**Hero:**
- Badge: "Credit-based pricing"
- Headline: "Pricing built for growing teams"
- Subheadline: "Start free, scale as you grow. One subscription per organization with access to all AI modules."
- Trust indicators: No setup fees, Cancel anytime, 30-day free trial

**Pricing Cards (3 tiers):**
1. Starter - $99/mo - 10,000 credits - 5 team members
2. Business - $199/mo - 23,000 credits - 10 team members (POPULAR)
3. Premium - $499/mo - 65,000 credits - 20 team members

**Credit Explanation Section:**
- AI Conversations: 1-2 credits
- VoiceQA: 12 credits/min
- Platform features: Free

**Enterprise CTA:** Custom pricing for high-volume needs

**FAQ:** 5 questions about credits, expiration, switching plans

---

### AI Agents Page

**Hero:**
- Headline: "Intelligent AI Agents for Every Business Need"
- Focus: Customer-facing and internal operations use cases

**Sections:**
1. Business Solutions (Customer-Facing vs Internal)
2. AI Technology (Multi-LLM, Proprietary Algorithms, Accuracy)
3. What Your AI Agents Can Do (24/7, Sales, Knowledge Base)
4. Implementation Options (Widget, Messengers, Webhooks, n8n)
5. Custom Actions & External Execution
6. Final CTA

---

### Voice QA Page

**Hero:**
- Headline: "AI-Powered Call Center Quality Assurance"
- Focus: PBX integration, configurable evaluation

**Sections:**
1. How Voice QA Works (Connect → Configure → Get Insights)
2. Call Center Types (Cold Calling, Support)
3. Configurable Evaluation Rules
4. Real-Time Performance Insights
5. CTA: Schedule a Demo

---

### Enterprise Page

**Hero:**
- Headline: "Enterprise AI Platform for Secure Environments"
- Focus: On-premises, isolated, compliant

**Sections:**
1. Enterprise Features (Isolation, On-Prem, Custom Integration)
2. Enterprise Support & SLA
3. Enterprise Benefits (Data Sovereignty, Compliance, Scale)
4. Contact Form

---

### About Page

**Hero:**
- Headline: "Revolutionizing Business Communication"
- Mission statement

**Sections:**
1. Our Story
2. Mission & Vision (two columns)
3. Our Values (6 cards)
4. Our Impact (stats)
5. CTA: Join Our Mission

---

## 2.4 Content Guidelines

### Headlines
- Lead with benefits, not features
- Use action words
- Include numbers when possible
- Keep under 10 words

**Good:** "Get 3x More Qualified Leads in 5 Minutes"
**Bad:** "Our AI-Powered Lead Generation Solution"

### Body Copy
- Short paragraphs (3-4 sentences max)
- One idea per paragraph
- Active voice
- Avoid jargon unless defined

### CTAs
- Action-oriented verbs
- Specific outcomes
- Create urgency without pressure

**Good:** "Start Free Trial - Get More Leads Now"
**Bad:** "Submit" or "Learn More"

### Social Proof
- Use specific numbers
- Name companies when possible
- Include role/title with testimonials
- Show real results

---

## 2.5 Responsive Breakpoints

```
Mobile:     < 640px   (1 column, stacked)
Tablet:     640-1024px (2 columns, adjusted spacing)
Desktop:    > 1024px   (full layout)
Large:      > 1280px   (max container, more spacing)
```

### Mobile Considerations
- Hamburger menu for navigation
- Full-width cards
- Larger touch targets
- Reduced animation
- Sticky CTA bar (optional)

---

## 2.6 Performance Requirements

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s

### Optimization Priorities
1. Critical CSS inline
2. Lazy load images below fold
3. Preload fonts
4. Compress all assets
5. Use modern image formats (WebP, AVIF)

---

# Part 3: Deliverables Checklist

## Phase 1: Design System
- [ ] Color palette with usage guidelines
- [ ] Typography scale with examples
- [ ] Spacing system documentation
- [ ] Component library (buttons, cards, forms, navigation)
- [ ] Icon set selection and guidelines
- [ ] Motion/animation specifications

## Phase 2: Page Designs
- [ ] Homepage (desktop + mobile)
- [ ] Pricing page (desktop + mobile)
- [ ] One product page template (desktop + mobile)
- [ ] About page (desktop + mobile)
- [ ] Contact page (desktop + mobile)

## Phase 3: Extended Pages
- [ ] All product pages (AI Agents, Lead Gen, Voice QA, Automation, Analytics)
- [ ] Enterprise page
- [ ] Blog list + article template
- [ ] Legal pages (Privacy, Terms)

## Phase 4: Assets
- [ ] All icons as SVG
- [ ] Illustrations/graphics
- [ ] Social media preview images
- [ ] Favicon set
- [ ] Email template (optional)

---

# Notes for Designer

1. **Reference Sites for Inspiration:**
   - Stripe.com (clean, professional, dark mode)
   - Linear.app (modern SaaS, beautiful dark theme)
   - Vercel.com (developer-focused, sophisticated)
   - Notion.so (approachable, well-organized)
   - Intercom.com (competitor, customer support focus)

2. **What to Avoid:**
   - Generic AI imagery (robot hands, blue brains)
   - Overused gradients (especially purple-to-pink everywhere)
   - Cluttered layouts with too much information
   - Trendy effects that will age quickly
   - Stock photography with obvious models

3. **Key Differentiators to Highlight:**
   - Multi-LLM architecture (not just one AI model)
   - n8n integration for unlimited automation
   - Voice QA as unique offering
   - Enterprise-ready with on-premises option
   - Human handoff capability (not AI-only)

4. **Priority:**
   Start with the design system (Part 1) to establish the foundation, then move to Homepage design. Once Homepage is approved, use it as the template for all other pages.

