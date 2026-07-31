"use client";

import { useState, type ReactNode } from "react";

type SlideProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

function Slide({ eyebrow, title, children, className = "" }: SlideProps) {
  return (
    <article className={`slide ${className}`}>
      <header className="slide-heading">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
      </header>
      <div className="slide-content">{children}</div>
    </article>
  );
}

function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const icons: Record<string, ReactNode> = {
    chart: <><path d="M4 19V5M4 19h16"/><path d="m7 15 4-4 3 2 5-7"/></>,
    coins: <><ellipse cx="9" cy="7" rx="5" ry="2.5"/><path d="M4 7v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7M4 11v4c0 1.4 2.2 2.5 5 2.5 1 0 2-.2 2.8-.5"/><path d="M14 13h6v6h-6z"/></>,
    building: <><path d="M4 21V6l8-3 8 3v15M8 8h2m4 0h2M8 12h2m4 0h2M8 16h2m4 0h2M3 21h18"/></>,
    people: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c.4-4 2.2-6 5.5-6s5.1 2 5.5 6M14 15c4-.9 6.5.8 7 4"/></>,
    bank: <><path d="m3 9 9-6 9 6M5 10h14M6 10v8m4-8v8m4-8v8m4-8v8M3 21h18M4 18h16"/></>,
    gold: <><path d="m5 18 2-8h10l2 8z"/><path d="M9 10 10 6h4l1 4M8 14h8"/></>,
    shield: <><path d="M12 3 4.5 6v5.5c0 4.7 3.2 7.7 7.5 9.5 4.3-1.8 7.5-4.8 7.5-9.5V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    phone: <><rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M10 5h4m-3 13h2"/></>,
    book: <><path d="M4 4.5c3-.8 5.7-.2 8 1.8v14c-2.3-2-5-2.6-8-1.8z"/><path d="M20 4.5c-3-.8-5.7-.2-8 1.8v14c2.3-2 5-2.6 8-1.8z"/></>,
    heart: <path d="M20.8 5.8c-2-2-5.2-2-7.2 0L12 7.4l-1.6-1.6a5.1 5.1 0 0 0-7.2 7.2L12 21l8.8-8a5.1 5.1 0 0 0 0-7.2Z"/>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></>,
    pause: <><circle cx="12" cy="12" r="9"/><path d="M9.5 8v8m5-8v8"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    compass: <><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></>,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      {icons[name] ?? icons.compass}
    </svg>
  );
}

function Chip({ children, tone = "gold" }: { children: ReactNode; tone?: string }) {
  return <span className={`chip chip-${tone}`}>{children}</span>;
}

function AssetPlaceholder({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const [missing, setMissing] = useState(false);
  return (
    <div className={`asset-placeholder ${className} ${missing ? "is-missing" : ""}`}>
      {!missing && (
        // Deliberately uses a plain image so replacement files work without code edits.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={label} onError={() => setMissing(true)} />
      )}
      {missing && (
        <div className="asset-empty">
          <Icon name="phone" />
          <strong>{label}</strong>
          <span>{src}</span>
        </div>
      )}
    </div>
  );
}

function OpeningSlide() {
  return (
    <article className="slide opening-slide">
      <div className="opening-copy">
        <p className="opening-kicker"><span /> FINANCIAL LITERACY · FIELD GUIDE 01</p>
        <h1>
          Money, Investing
          <span>&amp; Self-Control</span>
        </h1>
        <p className="opening-subtitle">
          A beginner’s guide to managing money and understanding the Egyptian stock market
        </p>
      </div>
      <div className="hero-visual" aria-label="Coins growing into a plant and line chart">
        <div className="hero-compass">
          <span>N</span><span>E</span><span>S</span><span>W</span>
          <i />
        </div>
        <svg className="hero-chart" viewBox="0 0 480 310" aria-hidden="true">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#99ddbd" stopOpacity=".32"/>
              <stop offset="1" stopColor="#99ddbd" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M30 265 118 218l70 12 78-91 67 22 110-115v219H30Z" fill="url(#chartFill)"/>
          <path d="M30 265 118 218l70 12 78-91 67 22 110-115" fill="none" stroke="#99ddbd" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="443" cy="46" r="9" fill="#f4be55"/>
        </svg>
        <div className="plant">
          <div className="leaf leaf-one" />
          <div className="leaf leaf-two" />
          <div className="leaf leaf-three" />
          <div className="stem" />
          <div className="coin-stack"><i/><i/><i/><i/></div>
        </div>
        <div className="hero-badge"><Icon name="chart"/><span>GROW<br/>WISELY</span></div>
      </div>
    </article>
  );
}

function Slide01() {
  return (
    <Slide eyebrow="THE BASICS · OWNERSHIP" title="1. What Is a Stock?">
      <div className="two-column ownership-layout">
        <div>
          <p className="lead">A stock is a <em>small piece of ownership</em> in a real company.</p>
          <div className="example-card">
            <div className="example-title"><span>SS</span><div><small>EXAMPLE</small><strong>Scout Snacks Co.</strong></div></div>
            <div className="ownership-math">
              <div><strong>1,000</strong><span>total shares</span></div>
              <b>→</b><div><strong>10</strong><span>shares you buy</span></div>
              <b>=</b><div className="result"><strong>1%</strong><span>you own</span></div>
            </div>
          </div>
          <div className="earning-row">
            <div><span className="round-icon positive">↗</span><p><strong>Capital gain</strong><small>Sell for more than you paid</small></p></div>
            <div><span className="round-icon gold">⌁</span><p><strong>Dividends</strong><small>A share of distributed profits</small></p></div>
          </div>
          <p className="warning-line">Neither one is guaranteed.</p>
        </div>
        <div className="share-visual">
          <div className="share-label"><span>YOUR 10 SHARES</span><strong>1%</strong></div>
          <div className="share-grid" aria-label="One hundred blocks with one percent highlighted">
            {Array.from({ length: 100 }, (_, index) => <i className={index < 10 ? "owned" : ""} key={index}/>)}
          </div>
          <p><span className="legend-dot"/> Your ownership <span className="legend-dot muted"/> Other shareholders</p>
        </div>
      </div>
    </Slide>
  );
}

function Slide02() {
  const terms = ["BUY ORDER", "SELL ORDER", "BID", "ASK", "PENDING", "EXECUTED"];
  return (
    <Slide eyebrow="THE BASICS · THE MARKET" title="2. What Is the Stock Market?">
      <div className="market-layout">
        <p className="lead">An organized marketplace where investors <em>buy and sell shares</em> and other investments.</p>
        <div className="market-flow">
          <FlowNode icon="people" label="You" note="Investor"/>
          <FlowArrow label="ORDER"/>
          <FlowNode icon="phone" label="App" note="Interface"/>
          <FlowArrow label="ROUTES"/>
          <FlowNode icon="bank" label="Broker" note="Executes"/>
          <FlowArrow label="TRADES"/>
          <FlowNode icon="chart" label="EGX" note="Marketplace" featured/>
          <FlowArrow label="CAPITAL"/>
          <FlowNode icon="building" label="Company" note="Ownership"/>
        </div>
        <div className="fra-strip"><Icon name="shield"/><p><strong>FRA</strong><span>Regulates Egypt’s non-bank financial markets</span></p></div>
        <div className="term-strip">{terms.map((term) => <Chip key={term} tone={term === "EXECUTED" ? "mint" : "soft"}>{term}</Chip>)}</div>
      </div>
    </Slide>
  );
}

function FlowNode({ icon, label, note, featured = false }: { icon: string; label: string; note: string; featured?: boolean }) {
  return <div className={`flow-node ${featured ? "featured" : ""}`}><span><Icon name={icon}/></span><strong>{label}</strong><small>{note}</small></div>;
}
function FlowArrow({ label }: { label: string }) {
  return <div className="flow-arrow"><small>{label}</small><span>→</span></div>;
}

function Slide03() {
  const uses = [["⌂","Open branches"],["▥","Build factories"],["⚙","Buy equipment"],["✦","Develop products"],["♙","Hire employees"],["◎","Enter markets"]];
  return (
    <Slide eyebrow="COMPANIES · CAPITAL" title="3. Why Do Companies Sell Shares?">
      <div className="capital-layout">
        <div className="capital-core">
          <small>SHARES BECOME</small><strong>CAPITAL</strong><p>Money used to build and grow the business</p>
          <div className="capital-ring">{uses.map(([icon,label], i) => <div style={{"--i": i} as React.CSSProperties} key={label}><span>{icon}</span><small>{label}</small></div>)}</div>
        </div>
        <div className="comparison-panel">
          <h2>Two ways to raise money</h2>
          <div className="comparison-row">
            <span className="comparison-icon">%</span>
            <div><strong>LOAN</strong><p>Borrow money</p></div><b>→</b><small>Repay it<br/>with interest</small>
          </div>
          <div className="or-divider"><span>OR</span></div>
          <div className="comparison-row highlight">
            <span className="comparison-icon">◫</span>
            <div><strong>SHARES</strong><p>Receive money</p></div><b>→</b><small>Sell part of<br/>the ownership</small>
          </div>
          <p className="panel-note">Capital fuels the next stage of the company’s journey.</p>
        </div>
      </div>
    </Slide>
  );
}

function Slide04() {
  const company = ["Revenue & profit","Growth","Debt & assets","Management","Competitive edge"];
  const external = ["Inflation","Interest rates","Exchange rates","Government decisions","Industry news","Investor emotions"];
  return (
    <Slide eyebrow="VALUATION · SUPPLY & DEMAND" title="4. What Drives a Stock’s Value?">
      <div className="value-layout">
        <p className="lead centered">Price reflects what investors believe a company is worth <em>now and in the future.</em></p>
        <div className="balance-visual">
          <FactorCard title="COMPANY FACTORS" icon="building" items={company}/>
          <div className="scale"><div className="scale-beam"/><div className="scale-post">↕</div><small>PRICE</small></div>
          <FactorCard title="EXTERNAL FACTORS" icon="compass" items={external}/>
        </div>
        <div className="buyers-sellers">
          <div><span>MORE BUYERS</span><strong>PRICE CAN RISE</strong><b>↗</b></div>
          <p>Supply meets demand</p>
          <div className="negative"><span>MORE SELLERS</span><strong>PRICE CAN FALL</strong><b>↘</b></div>
        </div>
      </div>
    </Slide>
  );
}

function FactorCard({ title, icon, items }: { title: string; icon: string; items: string[] }) {
  return <div className="factor-card"><h2><Icon name={icon}/>{title}</h2><div>{items.map((item) => <span key={item}><b>✓</b>{item}</span>)}</div></div>;
}

function Slide05() {
  const sectors = [
    ["BANKING","Banks","Fintech"],
    ["REAL ESTATE","Developers","Property"],
    ["HEALTHCARE","Pharma","Hospitals"],
    ["TELECOM","Networks","Services"],
    ["FOOD & DRINK","Producers","Retail"],
    ["CONSTRUCTION","Materials","Engineering"],
  ];
  return (
    <Slide eyebrow="THE ECONOMY · CLASSIFICATION" title="5. What Are Sectors and Industries?">
      <div className="sector-layout">
        <div className="tree-root"><Icon name="bank"/><span>EGYPTIAN ECONOMY</span></div>
        <div className="tree-line"/>
        <div className="sector-grid">
          {sectors.map(([sector, ...industries], i) => (
            <div className="sector-card" key={sector}>
              <span className={`sector-num n${i}`}>{String(i + 1).padStart(2,"0")}</span>
              <strong>{sector}</strong>
              <div>{industries.map((industry) => <small key={industry}>{industry}</small>)}</div>
            </div>
          ))}
        </div>
        <div className="definition-row">
          <p><strong>SECTOR</strong> broad group of similar economic activity</p>
          <span>→</span>
          <p><strong>INDUSTRY</strong> more specific group inside a sector</p>
          <aside>Companies in one sector may react similarly to economic events.</aside>
        </div>
      </div>
    </Slide>
  );
}

function Slide06() {
  const indices = [
    ["EGX30","30 liquid leaders"],["EGX70 EWI","70 active · equal weight"],["EGX100 EWI","Wider market view"],
    ["EGX33 SHARIAH","Sharia criteria"],["EGX35-LV","Lower historical volatility"],["EGX30 CAPPED","Company weight limit"],
    ["EGX30 TR","Includes cash dividends"],["SECTOR INDICES","Specific industries"],["TAMAYUZ","SME market"],
    ["TREASURY BONDS","Selected gov. bonds"],
  ];
  return (
    <Slide eyebrow="MEASURING THE MARKET · INDICES" title="6. What Is a Stock Market Index?">
      <div className="index-layout">
        <div className="pizza-panel">
          <p className="lead">An index measures a <em>selected group</em> of companies.</p>
          <div className="pizza" aria-label="Five companies with unequal index weights" />
          <div className="pizza-legend" aria-label="Example company weights">
            <span><i className="slice-a" />A · 38%</span>
            <span><i className="slice-b" />B · 24%</span>
            <span><i className="slice-c" />C · 20%</span>
            <span><i className="slice-d" />D · 12%</span>
            <span><i className="slice-e" />E · 6%</span>
          </div>
          <div className="pizza-notes"><span>Different weights</span><span>Enter ↔ Leave</span></div>
          <p className="small-copy">Like pizza slices, some companies have more weight — so they move the index more.</p>
        </div>
        <div className="indices-panel">
          <h2>MAIN EGX INDICES <span>10</span></h2>
          <div className="indices-grid">{indices.map(([name,note],i) => <div className={i < 3 ? "major" : ""} key={name}><strong>{name}</strong><small>{note}</small></div>)}</div>
        </div>
      </div>
    </Slide>
  );
}

function Slide07() {
  return (
    <Slide eyebrow="FUNDS · THE BIG IDEA" title="7. What Are Investment Funds?">
      <div className="fund-funnel-layout">
        <p className="lead centered">Many investors. One shared pool. <em>A professional strategy.</em></p>
        <div className="fund-system">
          <div className="investor-cluster">
            {["YOU","INVESTOR","INVESTOR","INVESTOR","INVESTOR"].map((name,i) => <div key={`${name}${i}`}><span><Icon name="people"/></span><small>{name}</small><b>EGP</b></div>)}
          </div>
          <div className="money-stream"><span>→</span><small>COMBINED MONEY</small></div>
          <div className="fund-pool"><span>FUND</span><strong>EGP</strong><small>UNITS</small></div>
          <div className="money-stream"><span>→</span><small>STRATEGY</small></div>
          <div className="manager-card"><Icon name="shield"/><strong>PROFESSIONAL TEAM</strong><small>Fund managers + analysts</small><p>Research · Select · Manage</p></div>
        </div>
        <div className="fund-result"><Icon name="chart"/><p>You buy <strong>units in the fund.</strong><br/>Experts manage the combined portfolio.</p></div>
      </div>
    </Slide>
  );
}

function Slide08() {
  const cards = [
    {type:"EQUITY",icon:"building",tone:"green",title:"Companies",copy:"Long-term growth potential",items:["Index funds","Sector funds","Diversified equity"]},
    {type:"FIXED INCOME",icon:"bank",tone:"gold",title:"Bonds & debt",copy:"Income and greater stability",items:["Treasury bills","Government bonds","Bank deposits"]},
    {type:"METALS",icon:"gold",tone:"cream",title:"Precious metals",copy:"Gold exposure without storage",items:["Gold funds","Diversification","No physical storage"]},
  ];
  return (
    <Slide eyebrow="FUNDS · CHOOSE A ROLE" title="8. Main Types of Investment Funds">
      <div className="fund-type-grid">
        {cards.map((card,index) => <div className={`fund-type-card ${card.tone}`} key={card.type}>
          <div className="card-top"><span>0{index+1}</span><Icon name={card.icon}/></div>
          <small>{card.type}</small><h2>{card.title}</h2><p>{card.copy}</p>
          <div className="fund-list">{card.items.map((item) => <span key={item}><b>✓</b>{item}</span>)}</div>
          <div className="risk-meter"><small>{index===0?"MORE MOVEMENT":index===1?"MORE STABILITY":"DIVERSIFIER"}</small><i/><i/><i className={index===1?"off":""}/></div>
        </div>)}
      </div>
    </Slide>
  );
}

function Slide09() {
  return (
    <Slide eyebrow="FUNDS · COMPARE THE ROLE" title="9. Which Role Does Each Fund Play?">
      <div className="role-layout">
        <div className="role-table">
          <div className="role-head"><span>FUND TYPE</span><span>GROWTH</span><span>STABILITY</span><span>DIVERSIFICATION</span></div>
          <RoleRow icon="building" name="Equity funds" sub="Higher price movement" values={[3,1,2]}/>
          <RoleRow icon="bank" name="Fixed income" sub="Income focus" values={[1,3,2]}/>
          <RoleRow icon="gold" name="Metal funds" sub="Gold exposure" values={[2,1,3]}/>
        </div>
        <div className="question-panel">
          <span className="question-mark">?</span>
          <p>Don’t ask</p><h2>“Which fund is always best?”</h2>
          <div className="ask-divider">ASK INSTEAD</div>
          {["What is my goal?","When will I need the money?","How much movement can I accept?"].map((q,i)=><div className="question-item" key={q}><span>0{i+1}</span><strong>{q}</strong></div>)}
        </div>
      </div>
    </Slide>
  );
}
function RoleRow({icon,name,sub,values}:{icon:string;name:string;sub:string;values:number[]}) {
  return <div className="role-row"><div><Icon name={icon}/><p><strong>{name}</strong><small>{sub}</small></p></div>{values.map((value,i)=><span className="dot-rating" key={i}>{[1,2,3].map(n=><i className={n<=value?"on":""} key={n}/>)}</span>)}</div>;
}

function Slide10() {
  const portfolios = [
    {name:"CONSERVATIVE",fi:70,metal:20,equity:10,note:"More stability"},
    {name:"BALANCED",fi:50,metal:20,equity:30,note:"Middle ground"},
    {name:"GROWTH",fi:25,metal:15,equity:60,note:"More movement"},
  ];
  return (
    <Slide eyebrow="STRATEGY · EDUCATIONAL EXAMPLES" title="10. Beginner Strategies Using Funds">
      <div className="strategy-layout">
        <div className="portfolio-grid">{portfolios.map((p,i)=><div className={`portfolio-card p${i}`} key={p.name}>
          <div className="donut" style={{"--fi": `${p.fi*3.6}deg`,"--metal": `${(p.fi+p.metal)*3.6}deg`} as React.CSSProperties}><span>{p.name.charAt(0)}</span></div>
          <h2>{p.name}</h2><p>{p.note}</p>
          <div className="allocation"><span><i className="fi"/><b>{p.fi}%</b> Fixed income</span><span><i className="metal"/><b>{p.metal}%</b> Metals</span><span><i className="equity"/><b>{p.equity}%</b> Equity</span></div>
        </div>)}</div>
        <div className="equity-split"><strong>INSIDE THE EQUITY PORTION</strong><div><span style={{width:"50%"}}>50% INDEX</span><span style={{width:"40%"}}>40% DIVERSIFIED</span><span style={{width:"10%"}}>10%</span></div><small>Sector funds ↑</small></div>
        <p className="disclaimer">Educational examples only. There is no perfect allocation for everyone.</p>
      </div>
    </Slide>
  );
}

function Slide11() {
  const screenshots = [
    { src: "/screenshots/1.jpeg", step: "01", label: "Explore" },
    { src: "/screenshots/2.jpeg", step: "02", label: "Fund types" },
    { src: "/screenshots/3.jpeg", step: "03", label: "Available funds" },
  ];

  return (
    <Slide eyebrow="LIVE WALKTHROUGH · EXPLORE" title="11. Explore the Available Funds" className="media-slide">
      <div className="screenshots-layout three-devices">
        {screenshots.map((screenshot) => (
          <figure className="screen-sequence" key={screenshot.src}>
            <figcaption>
              <span>{screenshot.step}</span>
              <strong>{screenshot.label}</strong>
            </figcaption>
            <AssetPlaceholder
              src={screenshot.src}
              label={`${screenshot.label} screenshot`}
            />
          </figure>
        ))}
      </div>
    </Slide>
  );
}

function Slide12() {
  const fundViews = [
    { src: "/screenshots/4.jpeg", step: "01", label: "EGX70 fund" },
    { src: "/screenshots/5.jpeg", step: "02", label: "Real estate fund" },
    { src: "/screenshots/11.jpeg", step: "03", label: "Gold fund" },
  ];

  return (
    <Slide eyebrow="LIVE WALKTHROUGH · FUND DETAILS" title="12. Understanding a Fund Page" className="media-slide">
      <div className="screenshots-layout three-devices">
        {fundViews.map((fund) => (
          <figure className="screen-sequence" key={fund.src}>
            <figcaption>
              <span>{fund.step}</span>
              <strong>{fund.label}</strong>
            </figcaption>
            <AssetPlaceholder src={fund.src} label={`${fund.label} screenshot`} />
          </figure>
        ))}
      </div>
    </Slide>
  );
}

function Slide13() {
  const purchaseScreens = [
    { src: "/screenshots/8.jpeg", label: "Choose a method" },
    { src: "/screenshots/9.jpeg", label: "Enter cash" },
    { src: "/screenshots/10.jpeg", label: "Enter units" },
  ];

  return (
    <Slide eyebrow="LIVE WALKTHROUGH · PURCHASE FLOW" title="13. How to Buy a Fund" className="media-slide">
      <div className="purchase-slide-layout">
        <div className="screenshots-layout three-devices">
          {purchaseScreens.map((screen, index) => (
            <figure className="screen-sequence" key={screen.src}>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{screen.label}</strong>
              </figcaption>
              <AssetPlaceholder src={screen.src} label={`${screen.label} screenshot`} />
            </figure>
          ))}
        </div>
        <p className="persistent-disclaimer"><Icon name="shield"/>Minors may require a parent or legal guardian, depending on the provider’s current rules. Always review the investment details before confirming.</p>
      </div>
    </Slide>
  );
}

function Slide14() {
  return (
    <Slide eyebrow="MONEY HABITS · TIME HORIZON" title="14. Saving vs. Investing">
      <div className="paths-layout">
        <div className="path-card save">
          <div className="path-icon"><Icon name="shield"/></div><small>SHORT PATH · SOON</small><h2>Saving</h2>
          <p>Keep money safe for emergencies or goals you’ll need soon.</p>
          <div className="goal-example"><strong>EGP 300 / month</strong><span>Next year’s scout trip</span></div>
          <div className="route short"><i/><i className="goal">⚑</i></div>
        </div>
        <div className="path-card invest">
          <div className="path-icon"><Icon name="chart"/></div><small>LONG PATH · LATER</small><h2>Investing</h2>
          <p>Accept ups and downs for a goal several years away.</p>
          <div className="goal-example"><strong>EGP 300 / month</strong><span>Diversified fund</span></div>
          <div className="route long"><i/><i/><i/><i className="goal">⚑</i></div>
        </div>
        <div className="path-message"><strong>Save</strong> for what you need soon. <strong>Invest</strong> for what you want to achieve later.</div>
      </div>
    </Slide>
  );
}

function Slide15() {
  const needs = ["Food","Transport","Medicine","School supplies","Necessary clothes"];
  const wants = ["Newer phone","Branded shoes","Takeout","Games","Subscriptions"];
  return (
    <Slide eyebrow="SMART SPENDING · PAUSE & LABEL" title="15. Wants vs. Needs">
      <div className="basket-layout">
        <Basket type="NEEDS" note="Daily life · Safety · Responsibilities" items={needs} icon="shield"/>
        <div className="basket-question"><span>BEFORE YOU BUY</span><strong>Do I need this,</strong><em>or do I only want it right now?</em><div className="pause-mini"><Icon name="pause"/>PAUSE</div></div>
        <Basket type="WANTS" note="Enjoyable · Not essential" items={wants} icon="heart"/>
      </div>
    </Slide>
  );
}
function Basket({type,note,items,icon}:{type:string;note:string;items:string[];icon:string}) {
  return <div className={`basket-card ${type.toLowerCase()}`}><div className="basket-handle"/><Icon name={icon}/><small>{note}</small><h2>{type}</h2><div>{items.map(item=><span key={item}><b>✓</b>{item}</span>)}</div></div>;
}

function Slide16() {
  const ads = [["URGENCY","Only 2 hours left!"],["SCARCITY","Only 3 remaining!"],["INFLUENCERS","Everyone has it"],["SOCIAL PROOF","12k people bought this"],["PERSONALIZED","Still thinking about it?"],["LIFESTYLE","Be more successful"]];
  return (
    <Slide eyebrow="BEHAVIOR · MARKETING" title="16. How Marketing Influences Us">
      <div className="marketing-layout">
        <div className="ad-orbit">
          {ads.map(([title,copy],i)=><div className={`ad-bubble ad${i}`} key={title}><small>{title}</small><strong>{copy}</strong></div>)}
          <div className="phone-core"><Icon name="phone"/><span className="heart-pop">♥</span><span className="sale-pop">SALE</span></div>
          <div className="pause-button"><Icon name="pause"/><strong>24h</strong><small>PAUSE</small></div>
        </div>
        <div className="control-copy">
          <Chip tone="coral">DESIGNED FOR A FAST REACTION</Chip>
          <h2>Marketing uses emotion.<br/><em>You can use time.</em></h2>
          <p>Wait one day before buying something non-essential.</p>
          <div className="reaction-flow"><span>SEE IT</span><b>→</b><span>FEEL IT</span><b>→</b><span className="active">PAUSE</span><b>→</b><span>DECIDE</span></div>
          <blockquote>“Self-control gives you time to choose.”</blockquote>
        </div>
      </div>
    </Slide>
  );
}

function Slide17() {
  return (
    <Slide eyebrow="BUDGETING · A SIMPLE START" title="17. The 50–30–20 Rule">
      <div className="budget-layout">
        <div className="budget-donut">
          <div className="donut-large"><span><small>MONTHLY</small><strong>EGP 1,000</strong></span></div>
          <div className="donut-callout c50"><strong>50%</strong><span>NEEDS</span></div>
          <div className="donut-callout c30"><strong>30%</strong><span>WANTS</span></div>
          <div className="donut-callout c20"><strong>20%</strong><span>SAVE + INVEST</span></div>
        </div>
        <div className="budget-example">
          <h2>GIVE EVERY POUND A JOB</h2>
          <BudgetRow number="500" label="Needs" tone="mint" width="100%"/>
          <BudgetRow number="300" label="Wants" tone="gold" width="60%"/>
          <BudgetRow number="200" label="Saving & investing" tone="cream" width="40%"/>
          <p>The percentages can change. The goal is to <em>decide before the money disappears.</em></p>
        </div>
      </div>
    </Slide>
  );
}
function BudgetRow({number,label,tone,width}:{number:string;label:string;tone:string;width:string}) {
  return <div className="budget-row"><div><strong>EGP {number}</strong><span>{label}</span></div><i><b className={tone} style={{width}}/></i></div>;
}

function Slide18() {
  const skills = [["LANGUAGE","A"],["COMMUNICATION","⌁"],["PRACTICAL SKILL","⚙"],["READING","▤"],["HEALTH","♥"],["LEADERSHIP","✦"]];
  return (
    <Slide eyebrow="YOUR FUTURE · HUMAN CAPITAL" title="18. You Are Your Most Important Asset">
      <div className="self-layout">
        <div className="skill-tree">
          <div className="person-core"><span>YOU</span><strong>YOUR BIGGEST<br/>PROJECT</strong></div>
          {skills.map(([name,icon],i)=><div className={`skill-node skill${i}`} key={name}><span>{icon}</span><strong>{name}</strong></div>)}
          <svg viewBox="0 0 600 400" aria-hidden="true"><path d="M300 200 120 70M300 200 300 35M300 200 480 70M300 200 120 330M300 200 300 365M300 200 480 330"/></svg>
        </div>
        <div className="asset-copy">
          <p>Stocks, funds, and gold may grow.</p>
          <h2>Your abilities can improve your opportunities <em>for your entire life.</em></h2>
          <div className="big-question"><small>DON’T ONLY ASK</small><del>“Which stock should I buy?”</del><span>ALSO ASK</span><strong>“Which skill will make me more valuable?”</strong></div>
        </div>
      </div>
    </Slide>
  );
}

function Slide19() {
  return (
    <Slide eyebrow="TIME · PATIENCE · CONSISTENCY" title="19. The Magic of Compound Growth">
      <div className="compound-layout">
        <AssetPlaceholder src="/charts/compound-growth.png" label="Linear vs. compound growth graph" className="graph-placeholder"/>
        <div className="compound-copy">
          <p>Previous returns stay invested and begin generating <em>additional returns.</em></p>
          <div className="compound-formula"><span>START EARLY</span><b>+</b><span>INVEST REGULARLY</span><b>+</b><span>TIME</span></div>
          <blockquote>Compound growth rewards <strong>patience</strong> more than excitement.</blockquote>
        </div>
      </div>
    </Slide>
  );
}

function Slide20() {
  const actions = ["Not taking money that is not ours","Returning extra change","Being truthful about spending","Keeping receipts & returning unused money","Avoiding scams and dishonest profit","Repaying what we owe"];
  return (
    <Slide eyebrow="CHARACTER · RESPONSIBILITY" title="20. Faithful With Little">
      <div className="faith-layout">
        <blockquote className="verse">
          <span>“</span>
          <p>One who is faithful in a very little is also faithful in much, and one who is dishonest in a very little is also dishonest in much.</p>
          <cite>LUKE 16:10</cite>
        </blockquote>
        <div className="honesty-panel">
          <div className="ledger-icon"><Icon name="book"/><span>✓</span></div>
          <h2>HONESTY WITH MONEY</h2>
          <div className="honesty-grid">{actions.map(item=><span key={item}><b>✓</b>{item}</span>)}</div>
        </div>
        <div className="trust-question"><small>DISCUSS</small><strong>Would you trust someone with <em>EGP 10,000</em> if they were dishonest with <em>EGP 100?</em></strong></div>
        <p className="faith-message">Faithful with a little → trusted with more.</p>
      </div>
    </Slide>
  );
}

function ClosingSlide() {
  const actions = [
    ["01","KNOWLEDGE","Invest in yourself for 30 minutes every day."],
    ["02","SELF-CONTROL","Use 50–30–20 and pause before non-essential purchases."],
    ["03","RESPONSIBILITY","Learn first. Never invest money you cannot afford to lose."],
  ];
  return (
    <article className="slide closing-slide">
      <div className="closing-copy">
        <p className="eyebrow">YOUR NEXT STEP · START TODAY</p>
        <h1>Start Small.<br/><span>Stay Patient.</span><br/>Be Responsible.</h1>
        <p>Your habits today shape your choices tomorrow.</p>
      </div>
      <div className="milestone-path">
        <div className="path-line"/>
        {actions.map(([number,title,copy],i)=><div className={`milestone m${i}`} key={title}><span>{number}</span><div><small>{title}</small><strong>{copy}</strong></div></div>)}
        <div className="destination"><Icon name="compass"/><strong>YOUR<br/>FUTURE</strong></div>
      </div>
      <footer className="closing-footer"><span>QUESTIONS &amp; DISCUSSION</span><i/><strong>THANK YOU</strong></footer>
    </article>
  );
}

export const slides = [
  <OpeningSlide key="opening" />,
  <Slide01 key="1" />,
  <Slide02 key="2" />,
  <Slide03 key="3" />,
  <Slide04 key="4" />,
  <Slide05 key="5" />,
  <Slide06 key="6" />,
  <Slide07 key="7" />,
  <Slide08 key="8" />,
  <Slide09 key="9" />,
  <Slide10 key="10" />,
  <Slide11 key="11" />,
  <Slide12 key="12" />,
  <Slide13 key="13" />,
  <Slide14 key="14" />,
  <Slide15 key="15" />,
  <Slide16 key="16" />,
  <Slide17 key="17" />,
  <Slide18 key="18" />,
  <Slide19 key="19" />,
  <Slide20 key="20" />,
  <ClosingSlide key="closing" />,
];
