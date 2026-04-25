// Page sections — pillars, cases, marquee, footer
const {
  useEffect: useEffSec,
  useRef: useRefSec
} = React;
const PILLARS = [{
  letter: 'K',
  name: 'Key Metrics',
  desc: 'Identificamos as métricas que realmente movem a sua operação. Sem ruído, sem vaidade.',
  num: '01'
}, {
  letter: 'R',
  name: 'Reliability',
  desc: 'Dados 100% confiáveis e auditáveis. Decisões embasadas na verdade do negócio.',
  num: '02'
}, {
  letter: 'Y',
  name: 'Yield & Efficiency',
  desc: 'Maximização de rendimento. Mais resultado com menos esforço operacional.',
  num: '03'
}, {
  letter: 'Z',
  name: 'Zero-Touch',
  desc: 'A "mão invisível" que move dados e dispara ações sem intervenção humana.',
  num: '04'
}, {
  letter: 'O',
  name: 'Optimization',
  desc: 'Melhoria contínua. Cada fluxo aprende, escala e se adapta com você.',
  num: '05'
}, {
  letter: 'N',
  name: 'Now & Next',
  desc: 'Visão do agora em tempo real. Capacidade analítica para o próximo passo.',
  num: '06'
}];
function Pillars() {
  return /*#__PURE__*/React.createElement("section", {
    id: "pilares"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      height: "600px",
      padding: "15px 32px 0px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-tag"
  }, "Metodologia \xB7 06 pilares"), /*#__PURE__*/React.createElement("div", {
    className: "pillars-intro reveal",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      margin: "38px 0px 14px"
    }
  }, "Seis pilares.", /*#__PURE__*/React.createElement("br", null), "Uma ", /*#__PURE__*/React.createElement("em", null, "opera\xE7\xE3o"), /*#__PURE__*/React.createElement("br", null), "sem fric\xE7\xE3o."), /*#__PURE__*/React.createElement("p", {
    style: {
      padding: "20px 0px 0px"
    }
  }, "A metodologia KRYZON \xE9 a clave que organiza dados, pessoas e sistemas em uma sinfonia de opera\xE7\xE3o \u2014 onde cada decis\xE3o \xE9 informada e cada execu\xE7\xE3o \xE9 fluida.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IsoDataFlow, {
    size: 340
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pillars"
  }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "pillar reveal",
    key: p.letter,
    style: {
      transitionDelay: `${i * 60}ms`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillar-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pillar-num"
  }, p.num), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pillar-letter"
  }, p.letter)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pillar-name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "pillar-desc"
  }, p.desc)))))));
}
function Marquee() {
  const items = ['Operações descentralizadas', 'BI em tempo real', 'Automação Zero-Touch', 'Decisões baseadas em dados', 'Fluxos vivos', 'ROI mensurável'];
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, [...items, ...items, ...items].map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "marquee-item",
    key: i
  }, it))));
}
function FlowSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "solucoes",
    className: "flow-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      height: "600px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-tag"
  }, "Como funciona \xB7 arquitetura Flow"), /*#__PURE__*/React.createElement("div", {
    className: "reveal flow-layout",
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--flow-cols, 1fr 1.2fr)',
      gap: '60px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Da planilha avulsa ao ", /*#__PURE__*/React.createElement("em", null, "fluxo vivo"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      fontSize: '17px',
      lineHeight: 1.6
    }
  }, "Conectamos suas ferramentas descentralizadas em uma central de intelig\xEAncia viva. ERPs, CRMs, planilhas \u2014 tudo flui para um lugar s\xF3, e dispara as a\xE7\xF5es certas no momento certo.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FlowDiagram, null)))));
}
const CASES = [{
  industry: 'Varejo · Multi-loja',
  headline: 'De relatórios fechados na sexta a dashboards vivos no celular do CEO.',
  metrics: [{
    v: '+34%',
    l: 'Lucro líquido em 4 meses'
  }, {
    v: '142h',
    l: 'Economizadas/mês'
  }]
}, {
  industry: 'Logística · B2B',
  headline: 'Automação Zero-Touch eliminou 87% das tarefas manuais de conciliação.',
  metrics: [{
    v: '87%',
    l: 'Tarefas automatizadas'
  }, {
    v: '5×',
    l: 'Velocidade de fechamento'
  }]
}, {
  industry: 'Indústria',
  headline: 'KPIs visíveis no chão de fábrica e no board, em tempo real.',
  metrics: [{
    v: '12 dias',
    l: 'Para implementação'
  }, {
    v: '+22%',
    l: 'OEE em 90 dias'
  }]
}, {
  industry: 'Serviços Financeiros',
  headline: 'Alertas inteligentes anteciparam 40% mais oportunidades de margem.',
  metrics: [{
    v: '+40%',
    l: 'Oportunidades capturadas'
  }, {
    v: '0',
    l: 'Erros de digitação'
  }]
}];
function Cases() {
  return /*#__PURE__*/React.createElement("section", {
    id: "casos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      height: "600px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-tag"
  }, "Casos \xB7 resultados reais"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 0.5fr',
      gap: 40,
      alignItems: 'center',
      marginBottom: 'clamp(20px, 3vh, 36px)'
    },
    className: "cases-header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title reveal",
    style: {
      margin: 0
    }
  }, "Quando o fluxo est\xE1 ", /*#__PURE__*/React.createElement("em", null, "certo"), ",", /*#__PURE__*/React.createElement("br", null), "o resultado ", /*#__PURE__*/React.createElement("em", null, "aparece"), "."), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IsoMetrics, {
    size: 300
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cases-grid"
  }, CASES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "case reveal",
    key: i,
    style: {
      transitionDelay: `${i * 80}ms`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "industry"
  }, "\u25C6 ", c.industry), /*#__PURE__*/React.createElement("div", {
    className: "headline"
  }, c.headline), /*#__PURE__*/React.createElement("div", {
    className: "metrics"
  }, c.metrics.map((m, j) => /*#__PURE__*/React.createElement("div", {
    key: j
  }, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, m.v), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, m.l)))))))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-section",
    id: "contato"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-eyebrow reveal"
  }, "\u25CB Vamos conversar"), /*#__PURE__*/React.createElement("h1", {
    className: "cta-title reveal"
  }, "Toda opera\xE7\xE3o tem", /*#__PURE__*/React.createElement("br", null), "uma ", /*#__PURE__*/React.createElement("em", null, "dor real"), "."), /*#__PURE__*/React.createElement("p", {
    className: "cta-sub reveal"
  }, "Antes de qualquer ferramenta, a gente quer entender a sua. Uma conversa de 30 minutos pra ouvir o que trava, o que consome tempo e o que voc\xEA gostaria que rodasse sozinho."), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5543996053976",
    className: "btn btn-primary"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-1.7-.1-1.7-.5-2.8-1.7-2.9-1.8-.1-.1-1.5-2-1.5-3.7s.9-2.6 1.2-2.9c.3-.3.7-.4 1-.4h.7c.2 0 .5-.1.8.6l1 2.4c.1.2.1.4 0 .6l-.4.5-.4.4c-.1.1-.2.3-.1.5l1 1.6c.6.9 1.5 1.5 1.7 1.7.2.1.4.1.6-.1l.7-.8c.1-.2.3-.2.5-.1l2 .9c.3.1.4.2.5.4 0 .2 0 .9-.2 1.5z"
  })), "Falar no WhatsApp")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      marginTop: '80px',
      display: 'flex',
      justifyContent: 'center',
      gap: '60px',
      flexWrap: 'wrap',
      fontFamily: 'Geist Mono, monospace',
      fontSize: '12px',
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "contato@kryzon.com.br"), /*#__PURE__*/React.createElement("div", null, "+55 43 99605-3976"), /*#__PURE__*/React.createElement("div", null, "Londrina \xB7 PR"))));
}
function Footer({
  showBigMark = true
}) {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, showBigMark && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "big-mark"
  }, "kryzon")), /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "logo",
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-white.png",
    alt: "kryzon Flow Tech",
    className: "logo-img"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      maxWidth: '320px',
      lineHeight: 1.6,
      fontSize: "13px"
    }
  }, "Decis\xF5es claras, fluxos inteligentes. BI de alta performance e automa\xE7\xE3o Zero-Touch para empresas que querem operar no modo on.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Solu\xE7\xF5es"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#bi"
  }, "BI Vivo")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#auto"
  }, "Automa\xE7\xE3o Flow")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#diag"
  }, "Diagn\xF3stico")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#imp"
  }, "Implementa\xE7\xE3o")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Empresa"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#sobre"
  }, "Sobre")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#casos"
  }, "Casos")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#blog"
  }, "Conte\xFAdo")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contato"
  }, "Contato")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Idioma"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#pt"
  }, "\uD83C\uDDE7\uD83C\uDDF7 Portugu\xEAs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#es"
  }, "\uD83C\uDDEA\uD83C\uDDF8 Espa\xF1ol")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#en"
  }, "\uD83C\uDDFA\uD83C\uDDF8 English"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 KRYZON \xB7 Flow Tech"), /*#__PURE__*/React.createElement("div", null, "v3.0"))));
}
Object.assign(window, {
  Pillars,
  Marquee,
  FlowSection,
  Cases,
  CTA,
  Footer
});
