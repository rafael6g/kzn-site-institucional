// App root
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "teal",
  "heroStyle": "split",
  "showDashboard": true,
  "showMarquee": true,
  "showBigMark": true,
  "animatedGrid": true
} /*EDITMODE-END*/;

const ACCENTS = {
  teal: { c: '#4FBFC0', soft: '#6FD3D4', glow: '#7FE8E9' },
  amber: { c: '#E8A857', soft: '#F0BC75', glow: '#FAD193' },
  violet: { c: '#9B7BFF', soft: '#B49CFF', glow: '#CFBEFF' },
  lime: { c: '#B8E04A', soft: '#C9E771', glow: '#DCEF95' }
};

function applyTheme(t) {
  const r = document.documentElement.style;
  const a = ACCENTS[t.accent] || ACCENTS.teal;
  r.setProperty('--teal', a.c);
  r.setProperty('--teal-soft', a.soft);
  r.setProperty('--teal-glow', a.glow);

  if (t.theme === 'light') {
    r.setProperty('--navy', '#F4F4F5');
    r.setProperty('--navy-deep', '#FAFAFA');
    r.setProperty('--navy-ink', '#FFFFFF');
    r.setProperty('--cream', '#0E1428');
    r.setProperty('--line', 'rgba(14,20,40,0.08)');
    r.setProperty('--line-strong', 'rgba(14,20,40,0.16)');
    r.setProperty('--muted', 'rgba(14,20,40,0.55)');
    r.setProperty('--nav-bg', 'rgba(255,255,255,0.7)');
    r.setProperty('--nav-bg-scrolled', 'rgba(255,255,255,0.92)');
  } else {
    r.setProperty('--navy', '#2E3D62');
    r.setProperty('--navy-deep', '#1B2540');
    r.setProperty('--navy-ink', '#0E1428');
    r.setProperty('--cream', '#F5F1EA');
    r.setProperty('--line', 'rgba(255,255,255,0.08)');
    r.setProperty('--line-strong', 'rgba(255,255,255,0.16)');
    r.setProperty('--muted', 'rgba(245,241,234,0.55)');
    r.setProperty('--nav-bg', 'rgba(5,6,8,0.7)');
    r.setProperty('--nav-bg-scrolled', 'rgba(5,6,8,0.92)');
  }
}

function Nav() {
  const [scrolled, setScrolled] = useStateApp(false);
  useEffectApp(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`top ${scrolled ? 'scrolled' : ''}`} style={{ backgroundColor: "rgb(32, 47, 78)" }}>
      <div className="wrap inner" style={{ height: "50px" }}>
        <a href="#" className="logo">
          <img src="assets/logo-white.png" alt="kryzon Flow Tech" className="logo-img" />
        </a>
        <div className="links">
          <a href="#solucoes" style={{ color: "rgb(255, 255, 255)" }}>Soluções</a>
          <a href="#pilares" style={{ color: "rgb(252, 252, 252)" }}>Pilares</a>
          <a href="#casos" style={{ color: "rgb(255, 255, 255)" }}>Casos</a>
          <a href="#contato" style={{ color: "rgb(255, 255, 255)" }}>Contato</a>
        </div>
      </div>
    </nav>);

}

function Hero({ tweaks }) {
  const t = tweaks || {};
  const showDash = t.showDashboard !== false;
  const style = t.heroStyle || 'editorial';

  // BIG mode: huge headline, dashboard below as a wide strip
  if (style === 'big') {
    return (
      <section className="hero" style={{ paddingTop: 160, paddingBottom: 80, alignItems: 'flex-start' }}>
        <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="badge reveal" style={{ marginBottom: 32 }}>
            <span className="dot"></span> flow tech · v3.0
          </div>
          <h1 className="hero-title reveal" style={{ fontSize: 'clamp(64px, 12vw, 200px)', marginBottom: 48 }}>
            Decisões claras,<br /><em>fluxos inteligentes</em>.
          </h1>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: showDash ? 60 : 0 }}>
            <p className="hero-sub" style={{ maxWidth: 'none' }}>
              Automatize sua operação e visualize o sucesso em tempo real. BI de alta performance
              e automação Zero-Touch para empresas que querem operar no modo on.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'flex-end', display: 'none' }}></div>
          </div>
          {showDash && <div className="reveal"><LiveDashboard /></div>}
        </div>
      </section>);

  }

  // SPLIT mode: dashboard on left, content on right
  if (style === 'split') {
    return (
      <section className="hero">
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid" style={{ gridTemplateColumns: showDash ? '1.1fr 1fr' : '1fr', alignItems: 'center', gap: 'clamp(32px, 5vw, 80px)' }}>
            <div>
              <div className="badge reveal"><span className="dot"></span> flow tech · v3.0</div>
              <h1 className="hero-title reveal" style={{ margin: "120px 0px 14.8224px", padding: "37px 0px 0px" }}>Decisões claras,<br /><em>fluxos inteligentes</em>.</h1>
              <p className="hero-sub reveal" style={{ padding: "16px 0px 0px" }}>
                Automatize sua operação e visualize o sucesso em tempo real. BI de alta performance
                e automação Zero-Touch para empresas que querem operar no modo on.
              </p>
            </div>
            {showDash && <div style={{ position: 'relative' }}><LiveDashboard /></div>}
          </div>
        </div>
      </section>);

  }

  // EDITORIAL (default) — Rocketseat-style centered layout
  return (
    <section className="hero">
      <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div className="badge reveal" style={{ margin: '0 auto 32px' }}>
          <span className="dot"></span>
          flow tech · v3.0
        </div>

        <h1 className="hero-title reveal" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: '18ch' }}>
          Decisões claras,<br />
          <em>fluxos inteligentes</em>.
        </h1>

        <p className="hero-sub reveal" style={{ marginInline: 'auto', textAlign: 'center', maxWidth: '60ch', marginTop: '32px', marginBottom: '40px' }}>
          Automatize sua operação e visualize o sucesso em tempo real. BI de alta performance
          e automação Zero-Touch para empresas que querem operar no modo on.
        </p>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', fontSize: '12px', color: 'var(--muted)', fontFamily: 'Geist Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '64px' }}>
          <div>◆ Implementação 12 dias</div>
          <div>◆ ROI mensurável</div>
          <div>◆ Sem lock-in</div>
        </div>

        {showDash &&
        <div className="reveal" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <LiveDashboard />
          </div>
        }
      </div>
    </section>);

}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffectApp(() => {applyTheme(t);}, [t.theme, t.accent]);

  // reveal-on-scroll observer
  useEffectApp(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [t.heroStyle, t.showDashboard]);

  return (
    <>
      <Nav />
      <Hero tweaks={t} />
      <Pillars />
      {t.showMarquee && <Marquee />}
      <FlowSection />
      <Cases />
      <CTA />
      <Footer showBigMark={t.showBigMark} />

      <TweaksPanel title="Tweaks · KRYZON">
        <TweakSection label="Tema" />
        <TweakRadio label="Cor de acento" value={t.accent}
        options={['teal', 'amber', 'violet', 'lime']}
        onChange={(v) => setTweak('accent', v)} />

        <TweakSection label="Hero" />
        <TweakRadio label="Estilo do hero" value={t.heroStyle}
        options={['editorial', 'big', 'split']}
        onChange={(v) => setTweak('heroStyle', v)} />
        <TweakToggle label="Mostrar dashboard ao vivo" value={t.showDashboard}
        onChange={(v) => setTweak('showDashboard', v)} />

        <TweakSection label="Seções" />
        <TweakToggle label="Marquee horizontal" value={t.showMarquee}
        onChange={(v) => setTweak('showMarquee', v)} />
        <TweakToggle label="Wordmark gigante no footer" value={t.showBigMark}
        onChange={(v) => setTweak('showBigMark', v)} />
      </TweaksPanel>
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);