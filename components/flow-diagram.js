// Animated flow diagram — sources -> KRYZON -> outputs
const {
  useEffect: useEffectFlow,
  useState: useStateFlow
} = React;
function FlowNode({
  label,
  x,
  y,
  kind = 'source'
}) {
  if (kind === 'core') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 3,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '120px',
        height: '120px',
        background: 'url(assets/kryzon-mark.png) center/contain no-repeat',
        margin: '0 auto',
        filter: 'drop-shadow(0 0 24px rgba(79,191,192,0.6))',
        animation: 'float-up 4s ease-in-out infinite'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '10px',
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: 700,
        fontSize: '13px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#4FBFC0'
      }
    }, "KRYZON \xB7 FLOW"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)',
      padding: '10px 14px',
      background: 'rgba(27,37,64,0.92)',
      border: '1px solid rgba(255,255,255,0.16)',
      borderRadius: '10px',
      fontFamily: 'Geist Mono, monospace',
      fontSize: '11px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#F5F1EA',
      whiteSpace: 'nowrap',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      flexShrink: 0,
      background: '#4FBFC0',
      boxShadow: '0 0 8px #4FBFC0'
    }
  }), label);
}
function FlowDiagram() {
  // x positions with safe margins so nodes don't clip with overflow:hidden
  // left nodes at 21%, right nodes at 79%, center at 50%
  const SX = 21,
    OX = 79,
    MX = 50,
    MY = 50;
  const sources = [{
    label: 'PLANILHAS',
    y: 20
  }, {
    label: 'ERP',
    y: 50
  }, {
    label: 'CRM',
    y: 80
  }];
  const outputs = [{
    label: 'DASHBOARD AO VIVO',
    y: 20
  }, {
    label: 'WHATSAPP / EMAIL',
    y: 50
  }, {
    label: 'AÇÕES AUTOMÁTICAS',
    y: 80
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "flow-stage",
    style: {
      height: '420px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "flowG",
    x1: "0",
    x2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#4FBFC0",
    stopOpacity: "0.08"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#4FBFC0",
    stopOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#4FBFC0",
    stopOpacity: "0.08"
  }))), sources.map((s, i) => /*#__PURE__*/React.createElement("g", {
    key: `in${i}`
  }, /*#__PURE__*/React.createElement("path", {
    d: `M ${SX},${s.y} C ${SX + 10},${s.y} ${MX - 10},${MY} ${MX},${MY}`,
    stroke: "url(#flowG)",
    strokeWidth: "0.4",
    fill: "none",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "0.9",
    fill: "#4FBFC0"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: `${2.4 + i * 0.4}s`,
    repeatCount: "indefinite",
    path: `M ${SX},${s.y} C ${SX + 10},${s.y} ${MX - 10},${MY} ${MX},${MY}`
  })))), outputs.map((o, i) => /*#__PURE__*/React.createElement("g", {
    key: `out${i}`
  }, /*#__PURE__*/React.createElement("path", {
    d: `M ${MX},${MY} C ${MX + 10},${MY} ${OX - 10},${o.y} ${OX},${o.y}`,
    stroke: "url(#flowG)",
    strokeWidth: "0.4",
    fill: "none",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "0.9",
    fill: "#7FE8E9"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: `${2.6 + i * 0.5}s`,
    repeatCount: "indefinite",
    begin: `${0.5 + i * 0.3}s`,
    path: `M ${MX},${MY} C ${MX + 10},${MY} ${OX - 10},${o.y} ${OX},${o.y}`
  }))))), sources.map((s, i) => /*#__PURE__*/React.createElement(FlowNode, {
    key: `s${i}`,
    label: s.label,
    x: SX,
    y: s.y,
    kind: "source"
  })), /*#__PURE__*/React.createElement(FlowNode, {
    label: "KRYZON Flow",
    x: MX,
    y: MY,
    kind: "core"
  }), outputs.map((o, i) => /*#__PURE__*/React.createElement(FlowNode, {
    key: `o${i}`,
    label: o.label,
    x: OX,
    y: o.y,
    kind: "output"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '12px',
      left: '14px',
      fontFamily: 'Geist Mono, monospace',
      fontSize: '9px',
      color: 'rgba(245,241,234,0.35)',
      letterSpacing: '0.12em',
      pointerEvents: 'none'
    }
  }, "FONTES DE DADOS"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '12px',
      right: '14px',
      fontFamily: 'Geist Mono, monospace',
      fontSize: '9px',
      color: 'rgba(245,241,234,0.35)',
      letterSpacing: '0.12em',
      pointerEvents: 'none'
    }
  }, "ENTREGAS"));
}
Object.assign(window, {
  FlowDiagram,
  FlowNode
});
