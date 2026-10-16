
import "./App.css";

const features = [
  {
    icon: "⌕",
    title: "Smart PC Scan",
    text: "Scan your system to identify potential junk files and areas that may need attention.",
  },
  {
    icon: "✦",
    title: "Simple Cleanup",
    text: "Review scan results and take control of the files you choose to remove.",
  },
  {
    icon: "◴",
    title: "Clear Insights",
    text: "View scan results in a clean dashboard designed to make PC maintenance simple.",
  },
];

function App() {
  return (
    <div className="site">
      <div className="topbar">
        <span className="status-dot" />
        A simpler way to maintain your Windows PC
      </div>

      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">C</span>
          <span>Clean<span className="brand-accent">Flow</span></span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#features">Why CleanFlow?</a>
          <a href="#how-it-works">How it works</a>
        </nav>

        
<a
  className="nav-download"
  href="https://github.com/Tanish-77/CleanFlow-Website/releases/download/v1.0.0/CleanFlow-Setup.exe"
  target="_blank"
  rel="noopener noreferrer"
>
  Download <span>↗</span>
</a>

      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span>✳</span> YOUR PC, A FRESH START
            </div>

            <h1>
              Give your PC
              <br />
              room to <span>breathe.</span>
            </h1>

            <p className="hero-description">
              Meet CleanFlow — a simple Windows utility that helps you scan
              for unnecessary files and review cleanup opportunities, all in
              one clean, easy-to-use experience.
            </p>

            <div className="hero-actions">
              
<a
  className="nav-download"
  href="https://github.com/Tanish-77/CleanFlow-Website/releases/download/v1.0.0/CleanFlow-Setup.exe"
  target="_blank"
  rel="noopener noreferrer"
>
  Download <span>↗</span>
</a>

              <a className="secondary-button" href="#features">
                Explore features <span>↘</span>
              </a>
            </div>

            <div className="trust-row">
              <span><b>✓</b> Windows desktop app</span>
              <span><b>✓</b> Simple scan workflow</span>
            </div>
          </div>

          <div className="visual-wrap">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="floating-tag tag-top">
              <span className="tag-icon">✦</span>
              <span><b>Easy to use</b><small>Clean and simple UI</small></span>
            </div>

            <div className="app-window">
              <div className="window-header">
                <div className="window-brand">
                  <span className="mini-logo">C</span> CleanFlow
                </div>
                <div className="window-dots"><i /><i /><i /></div>
              </div>

              <div className="window-body">
                <aside className="mock-sidebar">
                  <div className="side-active">▦ <span>Overview</span></div>
                  <div>⌕ <span>PC Scan</span></div>
                  <div>◷ <span>Scan History</span></div>
                  <div>⚙ <span>Settings</span></div>
                  <div className="sidebar-bottom">CLEANFLOW <small>PC CARE</small></div>
                </aside>

                <div className="mock-content">
                  <div className="mock-greeting">YOUR PC AT A GLANCE</div>
                  <h3>System overview</h3>
                  <p className="mock-subtitle">A clearer picture of your PC.</p>

                  <div className="health-card">
                    <div className="health-ring"><span>✓</span></div>
                    <div><small>YOUR NEXT STEP</small><b>Ready when you are</b><p>Start a scan to review your system.</p></div>
                  </div>

                  <div className="stat-grid">
                    <div className="stat-card"><span>⌕</span><small>System scan</small><b>On demand</b><i>Run when needed</i></div>
                    <div className="stat-card"><span>▤</span><small>Scan results</small><b>Easy to review</b><i>You stay in control</i></div>
                  </div>

                  <div className="mock-scan"><span className="scan-symbol">✳</span><div><b>Ready to get started?</b><small>Run CleanFlow on your PC to see scan results.</small></div><span className="scan-arrow">→</span></div>
                </div>
              </div>
            </div>

            <div className="floating-tag tag-bottom">
              <span className="bottom-check">✓</span>
              <span><b>You stay in control</b><small>Review before cleanup</small></span>
            </div>
          </div>
        </section>

        <section className="feature-strip">
          <div><strong>01</strong><span>Scan with clarity</span></div>
          <div><strong>02</strong><span>Review your results</span></div>
          <div><strong>03</strong><span>Choose what to clean</span></div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <div className="eyebrow">DESIGNED FOR EVERYDAY USE</div>
            <h2>Less clutter. <span>More clarity.</span></h2>
            <p>Useful tools for a more straightforward PC maintenance routine.</p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <span className="feature-number">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <a href="#how-it-works">Learn more <span>↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="how-copy">
            <div className="eyebrow">THREE SIMPLE STEPS</div>
            <h2>PC maintenance, <span>made simple.</span></h2>
            <p>CleanFlow keeps the experience straightforward, so you can review scan results and decide what works for you.</p>
          
<a
  className="nav-download"
  href="https://github.com/Tanish-77/CleanFlow-Website/releases/download/v1.0.0/CleanFlow-Setup.exe"
  target="_blank"
  rel="noopener noreferrer"
>
  Download <span>↗</span>
</a>

          </div>
          <div className="steps">
            <div className="step"><span>01</span><div><h3>Download & install</h3><p>Install CleanFlow on your compatible Windows PC.</p></div></div>
            <div className="step"><span>02</span><div><h3>Run a scan</h3><p>Let the app inspect supported cleanup locations.</p></div></div>
            <div className="step"><span>03</span><div><h3>Review & decide</h3><p>Check the results and choose the cleanup action you want.</p></div></div>
          </div>
        </section>

        <section className="download-section" id="download">
          <div className="download-glow" />
          <div className="eyebrow">READY WHEN YOU ARE</div>
          <h2>A fresh start for your PC.</h2>
          <p>Download CleanFlow and explore a simpler PC maintenance experience.</p>
          

<a
  className="nav-download"
  href="https://github.com/Tanish-77/CleanFlow-Website/releases/download/v1.0.0/CleanFlow-Setup.exe"
  target="_blank"
  rel="noopener noreferrer"
>
  Download <span>↗</span>
</a>


          <small>Windows desktop application · Version 1.0.0</small>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-icon">C</span><span>Clean<span className="brand-accent">Flow</span></span></a>
        <p>A straightforward approach to PC maintenance.</p>
        <span>© {new Date().getFullYear()} CleanFlow</span>
      </footer>
    </div>
  );
}

export default App;
