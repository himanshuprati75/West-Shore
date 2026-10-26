# Westshore Mechanical Landing Page Architecture & CRO Audit (`web.md`)

## 1. Executive Summary & Brand Identity
- **Business Name**: Westshore Mechanical (Westshore Mechanical of Spring Lake)
- **Official URL**: https://www.westshoremechanical.com/
- **Headquarters**: 530 Elm St Suite A, Spring Lake, MI 49456
- **Emergency Telephone**: (616) 837-8088 (`tel:6168378088`)
- **Direct Email**: `dispatch@westshoremechanical.com`
- **Operating Hours**: Mon – Fri: 8:00 AM – 5:00 PM | 24/7/365 Emergency Dispatch
- **Accreditations & Partnerships**:
  - Trane Comfort Specialist (Top 5% dealer designation)
  - Michigan Saves Authorized Contractor (0% APR / low-rate financing)
  - NiceJob & Google 5.0 Star Rated (180+ verified reviews)
  - 2023 People's Choice Winner
  - Utility Rebate Partners: Consumers Energy, Michigan Gas Utilities, DTE Energy, Grand Haven Board of Light & Power (BLP).

---

## 2. Authentic Photos Extracted from Main Website (`public/images/`)
1. **Hero Background (`hero-tech.jpg`)**: Real Westshore technician servicing a residential HVAC system with atmospheric vignette overlay.
2. **Headquarters & Fleet (`facility-location.jpg`)**: Real facility photo of 530 Elm St Suite A, Spring Lake MI with Westshore service trucks.
3. **In-House Team Crew (`team-crew.jpg`)**: Real photo of Westshore Mechanical's background-checked, non-commission certified technicians and dispatchers.
4. **Trane High-Efficiency Installation (`trane-install.jpg`)**: Authentic job photo of a Trane heat pump/AC system installed in Grand Haven, MI.
5. **Gas Furnace & Custom Sheet Metal (`furnace-install.jpg`)**: Real furnace replacement with custom in-house sheet metal ducting in Spring Lake, MI.
6. **Air Duct Cleaning System (`duct-cleaning.jpg`)**: Negative air duct cleaning machine and dryer vent cleanout equipment in Muskegon, MI.
7. **2023 People's Choice Award (`peoples-choice.jpg`)**: Official award banner recognizing Westshore Mechanical as #1 HVAC provider.
8. **Trane Comfort Specialist Badge (`trane-badge.png`)**: Official factory certification logo.
9. **Michigan Saves Partner Badge (`michigan-saves.jpg`)**: Authorized green energy financing badge.

---

## 3. Global Styling & Color Psychology ("The Taste")
- **Backgrounds**:
  - Deep Authority Navy: `#0A1C3C` (`navy-900`) & `#050F22` (`navy-950`) — anchor of trust, stability, and maritime lakeshore heritage.
  - Section Contrast Surface: `#F8FAFC` (`slate-50`) & `#FFFFFF` (`white`) — clean, medical-grade clarity for readability.
- **Action & Urgency (Brand Orange)**:
  - Official Westshore & Trane Safety Orange: `#FB4D0E` (`rescue-500`), hover `#E03E00` (`rescue-600`), active `#BA3200` (`rescue-700`).
  - Psychological intent: High-visibility urgency trigger without inducing panic. Glow animation `.btn-emergency-glow` restricted specifically to Hero CTA and Mobile Sticky Bar.
- **Accents & Trust**:
  - Lakeshore Cool Cyan: `#0284C7` (`lakeshore-500`) / `#38BDF8` (`lakeshore-400`) — represents icy air conditioning, fresh air scrubbers, and relief from heat.
  - High-Efficiency Green: `#10B981` (`emerald-500`) — represents verified dispatch status, energy rebates, and Michigan Saves financing.
  - Review Gold: `#FBBF24` (`amber-400`) — represents 5-star rating and People's Choice badge.

---

## 4. Psychological Architecture & CRO Reciprocity Flow
1. **Header (`Header.jsx`)**: Sticky lifeline navigation with slim mobile trust bar (`??? Trane Comfort Specialist • Spring Lake, MI`), desktop live operator indicator, and direct call trigger.
2. **Hero Section (`Hero.jsx`)**: The 3-second hook promising `< 45-Min Arrival` in Spring Lake, Grand Haven, and Muskegon, backed by the real technician background and Trane Comfort Specialist badge.
3. **Trust Shield (`TrustShield.jsx`)**: Immediate credibility reinforcement highlighting Trane Comfort Specialist, Michigan Saves Authorized Partner, 24/7 Lakeshore Dispatch, and 2023 People's Choice Award.
4. **Cost & Arrival Calculator (`CostCalculator.jsx`)**: Reciprocity value delivered *before* requesting contact info. Homeowners select their exact issue (furnace, AC, water heater, Trane replacement, or tune-up) and immediately view typical pricing, $0 overtime fee guarantee, and response times.
5. **Lead Capture Form (`LeadCaptureForm.jsx`)**: Seamlessly state-synchronized with the calculator. Auto-applies a `$50 OFF Web Dispatch Voucher` and offers 1-click dispatch requests.
6. **Services Grid (`ServicesGrid.jsx`)**: Hick's Law compliant with 4 top services with real job photos, plus an interactive toggle to expand all 11 heating, cooling, geothermal, mini-split, duct cleaning, IAQ, and sheet metal fabrication services.
7. **Craftsmanship Gallery Strip**: 4 real installation photos with location tags (Grand Haven, Spring Lake, Muskegon).
8. **About Us (`AboutUs.jsx`)**: Authentic Spring Lake heritage featuring real photos of the 530 Elm St facility, fleet vehicles, and the in-house team crew.
9. **Testimonials (`Testimonials.jsx`)**: Authentic homeowner reviews from Spring Lake, Grand Haven, Norton Shores, Allendale, and Whitehall.
10. **Service Areas (`ServiceAreas.jsx`)**: Interactive responsive tag cloud displaying all 16 coverage municipalities simultaneously with quick search.
11. **Footer (`Footer.jsx`)**: Complete NAP, operating hours, SEO schema markup, and municipal directory.
