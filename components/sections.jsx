// Page sections — pillars, cases, marquee, footer
const { useEffect: useEffSec, useRef: useRefSec } = React;

const PILLARS = [
{ letter: 'K', name: 'Key Metrics', desc: 'Identificamos as métricas que realmente movem a sua operação. Sem ruído, sem vaidade.', num: '01' },
{ letter: 'R', name: 'Reliability', desc: 'Dados 100% confiáveis e auditáveis. Decisões embasadas na verdade do negócio.', num: '02' },
{ letter: 'Y', name: 'Yield & Efficiency', desc: 'Maximização de rendimento. Mais resultado com menos esforço operacional.', num: '03' },
{ letter: 'Z', name: 'Zero-Touch', desc: 'A "mão invisível" que move dados e dispara ações sem intervenção humana.', num: '04' },
{ letter: 'O', name: 'Optimization', desc: 'Melhoria contínua. Cada fluxo aprende, escala e se adapta com você.', num: '05' },
{ letter: 'N', name: 'Now & Next', desc: 'Visão do agora em tempo real. Capacidade analítica para o próximo passo.', num: '06' }];


function Pillars() {
  return (
    <section id="pilares">
      <div className="wrap" style={{ height: "600px", padding: "15px 32px 0px" }}>
        <div className="section-tag">Metodologia · 06 pilares</div>
        <div className="pillars-intro reveal" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="section-title" style={{ margin: "38px 0px 14px" }}>
              Seis pilares.<br />Uma <em>operação</em><br />sem fricção.
            </h2>
            <p style={{ padding: "20px 0px 0px" }}>
              A metodologia KRYZON é a clave que organiza dados, pessoas e sistemas em
              uma sinfonia de operação — onde cada decisão é informada e cada execução é fluida.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IsoDataFlow size={340} />
          </div>
        </div>

        <div className="pillars">
          {PILLARS.map((p, i) =>
          <div className="pillar reveal" key={p.letter} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="pillar-glow"></div>
              <div className="pillar-num">{p.num}</div>
              <div>
                <div className="pillar-letter">{p.letter}</div>
              </div>
              <div>
                <div className="pillar-name">{p.name}</div>
                <div className="pillar-desc">{p.desc}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Marquee() {
  const items = ['Operações descentralizadas', 'BI em tempo real', 'Automação Zero-Touch', 'Decisões baseadas em dados', 'Fluxos vivos', 'ROI mensurável'];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((it, i) =>
        <div className="marquee-item" key={i}>{it}</div>
        )}
      </div>
    </div>);

}

function FlowSection() {
  return (
    <section id="solucoes" className="flow-section">
      <div className="wrap" style={{ height: "600px" }}>
        <div className="section-tag">Como funciona · arquitetura Flow</div>
        <div className="reveal flow-layout" style={{ display: 'grid', gridTemplateColumns: 'var(--flow-cols, 1fr 1.2fr)', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 className="section-title">Da planilha avulsa ao <em>fluxo vivo</em>.</h2>
            <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: 1.6 }}>
              Conectamos suas ferramentas descentralizadas em uma central de inteligência viva.
              ERPs, CRMs, planilhas — tudo flui para um lugar só, e dispara as ações certas no momento certo.
            </p>
          </div>
          <div>
            <FlowDiagram />
          </div>
        </div>
      </div>
    </section>);

}

const CASES = [
{
  industry: 'Varejo · Multi-loja',
  headline: 'De relatórios fechados na sexta a dashboards vivos no celular do CEO.',
  metrics: [{ v: '+34%', l: 'Lucro líquido em 4 meses' }, { v: '142h', l: 'Economizadas/mês' }]
},
{
  industry: 'Logística · B2B',
  headline: 'Automação Zero-Touch eliminou 87% das tarefas manuais de conciliação.',
  metrics: [{ v: '87%', l: 'Tarefas automatizadas' }, { v: '5×', l: 'Velocidade de fechamento' }]
},
{
  industry: 'Indústria',
  headline: 'KPIs visíveis no chão de fábrica e no board, em tempo real.',
  metrics: [{ v: '12 dias', l: 'Para implementação' }, { v: '+22%', l: 'OEE em 90 dias' }]
},
{
  industry: 'Serviços Financeiros',
  headline: 'Alertas inteligentes anteciparam 40% mais oportunidades de margem.',
  metrics: [{ v: '+40%', l: 'Oportunidades capturadas' }, { v: '0', l: 'Erros de digitação' }]
}];


function Cases() {
  return (
    <section id="casos">
      <div className="wrap" style={{ height: "600px" }}>
        <div className="section-tag">Casos · resultados reais</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.5fr', gap: 40, alignItems: 'center', marginBottom: 'clamp(20px, 3vh, 36px)' }} className="cases-header">
          <h2 className="section-title reveal" style={{ margin: 0 }}>
            Quando o fluxo está <em>certo</em>,<br />o resultado <em>aparece</em>.
          </h2>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <IsoMetrics size={300} />
          </div>
        </div>

        <div className="cases-grid">
          {CASES.map((c, i) =>
          <div className="case reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="industry">◆ {c.industry}</div>
              <div className="headline">{c.headline}</div>
              <div className="metrics">
                {c.metrics.map((m, j) =>
              <div key={j}>
                    <div className="v">{m.v}</div>
                    <div className="l">{m.l}</div>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function CTA() {
  return (
    <section className="cta-section" id="contato">
      <div className="wrap">
        <div className="cta-eyebrow reveal">○ Vamos conversar</div>
        <h1 className="cta-title reveal">
          Toda operação tem<br />uma <em>dor real</em>.
        </h1>
        <p className="cta-sub reveal">
          Antes de qualquer ferramenta, a gente quer entender a sua.
          Uma conversa de 30 minutos pra ouvir o que trava, o que consome tempo
          e o que você gostaria que rodasse sozinho.
        </p>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/5543996053976" className="btn btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-1.7-.1-1.7-.5-2.8-1.7-2.9-1.8-.1-.1-1.5-2-1.5-3.7s.9-2.6 1.2-2.9c.3-.3.7-.4 1-.4h.7c.2 0 .5-.1.8.6l1 2.4c.1.2.1.4 0 .6l-.4.5-.4.4c-.1.1-.2.3-.1.5l1 1.6c.6.9 1.5 1.5 1.7 1.7.2.1.4.1.6-.1l.7-.8c.1-.2.3-.2.5-.1l2 .9c.3.1.4.2.5.4 0 .2 0 .9-.2 1.5z" /></svg>
            Falar no WhatsApp
          </a>
        </div>

        <div className="reveal" style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', fontFamily: 'Geist Mono, monospace', fontSize: '12px', color: 'var(--muted)' }}>
          <div>contato@kryzon.com.br</div>
          <div>+55 43 99605-3976</div>
          <div>Londrina · PR</div>
        </div>
      </div>
    </section>);

}

function Footer({ showBigMark = true }) {
  return (
    <footer>
      <div className="wrap">
        {showBigMark &&
        <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
            <div className="big-mark">kryzon</div>
          </div>
        }

        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: '20px' }}>
              <img src="assets/logo-white.png" alt="kryzon Flow Tech" className="logo-img" />
            </div>
            <p style={{ color: 'var(--muted)', maxWidth: '320px', lineHeight: 1.6, fontSize: "13px" }}>
              Decisões claras, fluxos inteligentes. BI de alta performance e automação Zero-Touch
              para empresas que querem operar no modo on.
            </p>
          </div>
          <div>
            <h4>Soluções</h4>
            <ul>
              <li><a href="#bi">BI Vivo</a></li>
              <li><a href="#auto">Automação Flow</a></li>
              <li><a href="#diag">Diagnóstico</a></li>
              <li><a href="#imp">Implementação</a></li>
            </ul>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#casos">Casos</a></li>
              <li><a href="#blog">Conteúdo</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4>Idioma</h4>
            <ul>
              <li><a href="#pt">🇧🇷 Português</a></li>
              <li><a href="#es">🇪🇸 Español</a></li>
              <li><a href="#en">🇺🇸 English</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 KRYZON · Flow Tech</div>
          <div>v3.0</div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Pillars, Marquee, FlowSection, Cases, CTA, Footer });