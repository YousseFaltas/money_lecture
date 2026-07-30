# Next.js Presentation Specification

## Project Title
**Money, Investing & Self-Control**

## Objective
Build a responsive, interactive presentation for a scout-team lecture aimed at Egyptian teenagers aged **15–18**. The presentation will be deployed on **Vercel**.

The deck must contain exactly **22 presentation screens**:

1. One unnumbered opening slide.
2. Twenty numbered lecture slides, labeled **Slide 1** through **Slide 20** exactly as specified below.
3. One unnumbered closing slide.

Do not renumber the lecture slides based on their position in the application. The opening screen comes before lecture Slide 1, and the closing screen comes after lecture Slide 20.

---

# Technical Requirements

- Next.js with App Router.
- TypeScript.
- Tailwind CSS.
- Deployable to Vercel.
- One full-screen slide at a time.
- Responsive on laptops, projectors, tablets, and phones.
- Keyboard navigation:
  - Right Arrow, Space, or Page Down: next slide.
  - Left Arrow, Backspace, or Page Up: previous slide.
  - Home: opening slide.
  - End: closing slide.
- Touch swipe navigation.
- Previous and next buttons.
- Fullscreen button.
- Bottom progress bar.
- URL state such as `/?slide=6`, preserving the current screen after refresh.
- Respect `prefers-reduced-motion`.
- Use accessible HTML, labels, and strong contrast.

## Suggested Structure

```text
app/
  page.tsx
  layout.tsx
  globals.css
components/
  presentation/
    Presentation.tsx
    SlideShell.tsx
    NavigationControls.tsx
    ProgressBar.tsx
  slides/
    OpeningSlide.tsx
    LectureSlide01.tsx
    LectureSlide02.tsx
    ...
    LectureSlide20.tsx
    ClosingSlide.tsx
public/
  screenshots/
  charts/
  images/
data/
  slides.ts
```

---

# Visual Direction

The design should feel modern, youthful, trustworthy, and energetic without looking childish.

Use:

- Deep navy or dark green as the main background.
- Warm gold as the accent.
- Off-white text and cards.
- Green for positive growth concepts.
- Red only for warnings or losses.
- Egyptian pound examples using `EGP` or `ج.م`.
- Subtle scout-inspired elements such as a compass, path, badge, or camp motif.
- Large text suitable for a projector.
- Minimal text and one clear visual idea per slide.

Do not create document-like slides filled with paragraphs.

---

# Content and Safety Rules

- Use simple English suitable for teenagers aged 15–18.
- Use Egyptian market examples where relevant.
- Never promise profits or describe an investment as risk-free.
- State that portfolio allocations are educational examples, not personalized financial advice.
- Do not encourage investing borrowed money.
- Mention that minors may need a parent or legal guardian to open or operate an investment account, depending on the provider’s current rules.

---

# Slide-by-Slide Specification

## Opening Slide — Unnumbered

### Title
**Money, Investing & Self-Control**

### Subtitle
A beginner’s guide to managing money and understanding the Egyptian stock market

### Footer
Scout Team Lecture · Ages 15–18

### Visual
A clean hero illustration combining coins, a growing plant, a simple line chart, and a subtle scout compass or badge.

### Speaker Note
This lecture is not about getting rich quickly. It is about understanding money, making responsible decisions, and learning how patience, honesty, and self-control shape our financial lives.

---

## Lecture Slide 1 — What Is a Stock?

### Title
**1. What Is a Stock?**

### Main Content
A stock, or share, is a small piece of ownership in a real company.

**Example: Scout Snacks**

- The company has 1,000 shares.
- You buy 10 shares.
- You own 1% of the company.

A shareholder may earn money through:

- **Capital gain:** selling a share for more than its purchase price.
- **Dividends:** receiving part of the company’s distributed profits.

Neither is guaranteed.

### Visual
A company divided into 1,000 small pieces with 10 highlighted.

---

## Lecture Slide 2 — What Is the Stock Market?

### Title
**2. What Is the Stock Market?**

### Main Content
The stock market is an organized marketplace where investors buy and sell shares and other investments.

In Egypt:

- **EGX:** the Egyptian Exchange where securities are traded.
- **Broker:** sends your buy and sell orders to the market.
- **Investment app:** the interface used to access the broker.
- **FRA:** regulates Egypt’s non-bank financial markets.

### Essential Terms

- Buy order
- Sell order
- Bid
- Ask
- Pending
- Executed

### Visual
A simple marketplace diagram connecting the investor, app, broker, EGX, and company.

---

## Lecture Slide 3 — Why Do Companies Sell Shares?

### Title
**3. Why Do Companies Sell Shares?**

### Main Content
Companies sell shares to raise **capital**—money used to build and grow the business.

They may use it to:

- Open branches.
- Build factories.
- Purchase equipment.
- Develop products.
- Hire employees.
- Enter new markets.

### Simple Comparison

- **Loan:** borrow money and repay it with interest.
- **Shares:** receive money by selling part of the company’s ownership.

### Visual
A growing company with icons for a branch, factory, employees, technology, and products.

---

## Lecture Slide 4 — What Drives a Stock’s Value?

### Title
**4. What Drives a Stock’s Value?**

### Main Content
A stock’s price is affected by what investors believe the company is worth now and in the future.

### Company Factors

- Revenue and profit
- Growth
- Debt and assets
- Management
- Competitive advantage

### External Factors

- Inflation
- Interest rates
- Exchange rates
- Government decisions
- Industry news
- Investor emotions

### Key Idea
More buyers than sellers can push the price up. More sellers than buyers can push it down.

### Visual
A balance scale showing company performance on one side and market/economic factors on the other.

---

## Lecture Slide 5 — Sectors and Industries

### Title
**5. What Are Sectors and Industries?**

### Main Content
A **sector** is a broad group of companies with similar economic activities.

Examples:

- Banking and financial services
- Real estate
- Healthcare
- Telecommunications
- Food and beverages
- Construction

An **industry** is a more specific group inside a sector.

**Example:**

- Sector: Healthcare
- Industries: Pharmaceuticals, hospitals, and medical services

### Key Idea
Companies in the same sector may react similarly to economic events.

### Visual
A branching diagram from “Egyptian Economy” to sectors and then industries.

---

## Lecture Slide 6 — What Is an Index?

### Title
**6. What Is a Stock Market Index?**

### Main Content
An index measures the performance of a selected group of companies.

Think of it like a pizza:

- Every company is a slice.
- Some slices are larger than others.
- Companies with larger weights affect the index more.
- Companies can enter or leave when they no longer meet the index rules.

### Main EGX Indices

- **EGX30:** 30 of the most liquid and actively traded EGX companies.
- **EGX70 EWI:** 70 active companies outside EGX30 with equal weighting.
- **EGX100 EWI:** combines EGX30 and EGX70 for a wider market view.
- **EGX33 Shariah:** companies meeting Sharia-compliance criteria.
- **EGX35-LV:** eligible companies with relatively lower historical volatility.
- **EGX30 Capped:** EGX30 with a limit on any one company’s weight.
- **EGX30 TR:** EGX30 performance including cash dividends.
- **Sector Indices:** track specific industries.
- **Tamayuz Index:** tracks eligible companies in the SME market.
- **EGX Treasury Bonds Index:** tracks selected Egyptian government bonds.

### Visual
A pizza chart showing unequal slices and one small “company enters/leaves” indicator.

---

## Lecture Slide 7 — What Are Investment Funds?

### Title
**7. What Are Investment Funds?**

### Main Content
An investment fund collects money from many investors and invests it according to a specific strategy.

Funds are created and managed by **asset management firms**. Professional fund managers and analysts research investments, select assets, and manage the portfolio.

Instead of choosing every investment yourself, you buy units in the fund and the experts manage the combined money.

### Visual
Many small investors contributing money into one professionally managed portfolio.

---

## Lecture Slide 8 — Types of Funds in Egypt

### Title
**8. Main Types of Investment Funds**

### Main Content

#### Equity Funds
Invest mainly in shares for long-term growth.

- **Index funds:** follow an index such as EGX30.
- **Sector funds:** focus on one sector such as real estate or banking.
- **Diversified equity funds:** invest across several companies and sectors.

#### Fixed-Income Funds
Invest mainly in Treasury bills, government bonds, bank deposits, and other debt instruments. They generally aim for income and greater stability than equity funds.

#### Metal Funds
Give investors exposure to precious metals, especially gold, without personally buying and storing physical gold.

### Visual
Three large cards: companies, bonds, and gold.

---

## Lecture Slide 9 — Comparing the Fund Types

### Title
**9. Which Role Does Each Fund Play?**

### Main Content

- **Equity funds:** growth potential with higher price movement.
- **Fixed-income funds:** greater stability and income, but usually lower growth potential.
- **Metal funds:** exposure to gold and additional diversification.

### Key Question
Do not ask, “Which fund is always best?”

Ask:

- What is my goal?
- When will I need the money?
- How much price movement can I accept?

### Visual
A simple three-column comparison using Growth, Stability, and Diversification labels.

---

## Lecture Slide 10 — Beginner Investment Strategies

### Title
**10. Beginner Investment Strategies Using Funds**

### Main Content
Use three fund types to balance growth, stability, and diversification.

#### Conservative Example
- 70% fixed income
- 20% metals
- 10% equity

#### Balanced Example
- 50% fixed income
- 20% metals
- 30% equity

#### Growth Example
- 25% fixed income
- 15% metals
- 60% equity

### Equity Allocation Example
Inside the equity portion:

- 50% index funds
- 40% diversified equity funds
- 10% sector funds

### Footer Note
Educational examples only. There is no perfect allocation for everyone.

### Visual
Three portfolio pizzas shown side by side.

---

## Lecture Slide 11 — Explore Funds in Thndr or Telda

### Title
**11. Explore the Available Funds**

### Content Requirement
Leave the main content area intentionally empty.

The user will later provide screenshots of the Thndr or Telda Explore page and Funds page.

### Implementation Requirement
Create clearly labeled screenshot placeholders that are easy to replace:

```text
/public/screenshots/explore-page.png
/public/screenshots/funds-page.png
```

Show two empty device frames or image containers side by side. Do not invent, recreate, or mock the application UI.

### Speaker Note
The presenter will explain how to open the Explore section, locate the Funds category, and compare available products using the real screenshots.

---

## Lecture Slide 12 — Example Fund View

### Title
**12. Understanding a Fund Page**

### Content Requirement
Leave the main content area intentionally empty.

The user will later provide a screenshot of a real fund details page from Thndr or Telda.

### Implementation Requirement
Create one large centered screenshot placeholder:

```text
/public/screenshots/example-fund-view.png
```

Do not invent values, returns, fees, charts, risk ratings, or application UI.

### Speaker Note
The presenter will use the screenshot to identify the fund type, asset allocation, historical performance, risk level, fees, and redemption rules.

---

## Lecture Slide 13 — How to Buy

### Title
**13. How to Buy a Fund**

### Content Requirement
Leave the main content area intentionally empty.

The user will later provide screenshots showing the purchase flow in Thndr or Telda.

### Implementation Requirement
Create replaceable screenshot placeholders for up to three steps:

```text
/public/screenshots/buy-step-1.png
/public/screenshots/buy-step-2.png
/public/screenshots/buy-step-3.png
```

Do not invent or simulate the application interface.

### Small Persistent Disclaimer
Minors may require a parent or legal guardian, depending on the provider’s current rules. Always review the investment details before confirming.

---

## Lecture Slide 14 — Saving vs. Investing

### Title
**14. Saving vs. Investing**

### Main Content

#### Saving
Keeping money safe for emergencies, short-term goals, or something you will need soon.

**Example:** Save EGP 300 monthly for next year’s scout trip or a new phone.

#### Investing
Putting money into an asset that may grow over a longer period while accepting that its value can rise or fall.

**Example:** Invest EGP 300 monthly in a diversified fund for a goal several years away.

### When to Use Each

- Save money you may need soon.
- Invest money for long-term goals after preparing for emergencies.

### Key Message
**Save for what you need soon. Invest for what you want to achieve later.**

### Visual
Two paths: a short path to a nearby goal and a longer path toward a future goal.

---

## Lecture Slide 15 — Wants vs. Needs

### Title
**15. Wants vs. Needs**

### Main Content

#### Needs
Important for daily life, safety, education, or responsibilities.

Examples: food, transport, medicine, school supplies, and necessary clothes.

#### Wants
Enjoyable but not essential.

Examples: a newer phone when the old one works, expensive branded shoes, takeout, games, and subscriptions.

### Key Question
**Do I need this, or do I only want it right now?**

### Visual
A split shopping basket labeled Needs and Wants.

---

## Lecture Slide 16 — Subconscious Buying

### Title
**16. How Marketing Influences Us**

### Main Content
Advertisements are designed to influence emotions and encourage fast decisions.

Examples:

- **Urgency:** “Only two hours left!”
- **Scarcity:** “Only three remaining!”
- **Influencers:** wanting something because a popular person uses it.
- **Social proof:** “Everyone is buying it.”
- **Personalized ads:** repeatedly seeing a product after searching for it once.
- **Lifestyle marketing:** selling popularity, confidence, or success instead of only the product.

### Self-Control Rule
Wait one day before buying something non-essential.

**Marketing creates an immediate reaction. Self-control gives you time to decide.**

### Visual
A phone surrounded by advertising messages, with a pause button in front of it.

---

## Lecture Slide 17 — The 50–30–20 Rule

### Title
**17. The 50–30–20 Rule**

### Main Content
A simple way to plan monthly income or allowance:

- **50% Needs**
- **30% Wants**
- **20% Saving and investing**

### Example with EGP 1,000

- EGP 500 for needs
- EGP 300 for wants
- EGP 200 for saving and investing

### Key Message
The percentages can be adjusted. The goal is to decide where your money will go before it disappears.

### Visual
A large 50–30–20 doughnut chart with labels and the EGP 1,000 example.

---

## Lecture Slide 18 — Invest in Yourself

### Title
**18. You Are Your Most Important Asset**

### Main Content
Stocks, funds, and gold may grow, but your knowledge and abilities can improve your opportunities for your entire life.

You are your biggest project.

Invest in yourself by:

- Learning a language
- Improving communication
- Learning programming, design, or another practical skill
- Reading and taking courses
- Improving health and fitness
- Developing leadership and teamwork

### Key Question
Instead of only asking, “Which stock should I buy?” also ask:

**“Which skill can I learn that will make me more valuable?”**

### Visual
A person at the center with skills growing outward like branches or investment assets.

---

## Lecture Slide 19 — The Magic of Compound Growth

### Title
**19. The Magic of Compound Growth**

### Content Requirement
Keep the slide visually minimal. The user will provide the final graph.

Reserve a large graph area comparing:

- Linear growth
- Compound growth

### Graph Placeholder

```text
/public/charts/compound-growth.png
```

Do not generate a replacement graph unless the user later requests it.

### Small Supporting Text
Compound growth happens when previous returns remain invested and begin generating additional returns.

### Key Message
**Compound growth rewards patience more than excitement.**

### Speaker Notes
Explain that the lines may look similar at first. Over time, the compound line becomes steeper. The main ingredients are starting early, investing regularly, leaving enough time, and being patient.

---

## Lecture Slide 20 — Faithfulness and Honesty

### Title
**20. Faithful With Little**

### Bible Verse
> “One who is faithful in a very little is also faithful in much, and one who is dishonest in a very little is also dishonest in much.”
>
> **Luke 16:10**

### Main Content
Honesty with small amounts prepares us for greater responsibilities.

Honesty with money includes:

- Not taking money that is not ours.
- Returning extra change received by mistake.
- Being truthful about how money was spent.
- Keeping receipts and returning unused shared money.
- Avoiding scams, manipulation, and dishonest profit.
- Repaying what we owe.

### Discussion Question
**Would you trust someone with EGP 10,000 if they were dishonest with EGP 100?**

### Key Message
Money is a blessing and a responsibility. Being faithful with a little prepares us to be trusted with more.

### Visual
A simple illustration of a scout responsibly recording expenses and returning the remaining money.

---

## Closing Slide — Unnumbered

### Title
**Start Small. Stay Patient. Be Responsible.**

### Three Actions

1. Invest in yourself for at least 30 minutes every day.
2. Apply the 50–30–20 rule and pause before non-essential purchases.
3. Learn before investing and never invest money you cannot afford to lose.

### Closing Line
**Your habits today shape your choices tomorrow.**

### Optional Footer
Questions and discussion

### Visual
A path leading toward three milestones: Knowledge, Self-Control, and Responsibility.

---

# Screenshot and Graph Handling

The following slides must remain empty until the user supplies assets:

- Lecture Slide 11: Thndr or Telda Explore and Funds pages.
- Lecture Slide 12: Example fund details page.
- Lecture Slide 13: Fund purchase steps.
- Lecture Slide 19: Compound-growth graph.

Codex must create the specified placeholder paths and gracefully display a neutral placeholder when an image is missing. Do not generate fake screenshots, app screens, fund data, or a substitute compound graph.

---

# Final Quality Checklist

Before completion, verify that:

- There are exactly 22 presentation screens.
- The sequence is Opening → Lecture Slides 1–20 → Closing.
- The visible lecture numbering exactly matches this document.
- Slide 9 exists as the fund-comparison bridge.
- Slides 11–13 contain only replaceable screenshot placeholders.
- Slide 19 contains a replaceable graph placeholder.
- Text is readable on a projector.
- No slide is overcrowded.
- Navigation works with keyboard, buttons, touch, and URLs.
- The project builds without errors using `npm run build`.
- The project is ready for Vercel deployment.
