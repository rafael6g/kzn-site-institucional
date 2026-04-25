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
        width: '140px',
        height: '140px',
        background: 'url(assets/kryzon-mark.png) center/contain no-repeat',
        margin: '0 auto',
        filter: 'drop-shadow(0 0 24px rgba(79,191,192,0.6))',
        animation: 'float-up 4s ease-in-out infinite'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '12px',
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: 700,
        fontSize: '14px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#4FBFC0'
      }
    }, "KRYZON \xB7 FLOW"));
  }
  const isRight = kind === 'output';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      // anchor left nodes to left edge, right nodes to right edge — no translate overflow
      ...(isRight ? {
        right: '12px',
        left: 'auto',
        transform: 'translateY(-50%)'
      } : {
        left: '12px',
        right: 'auto',
        transform: 'translateY(-50%)'
      }),
      top: `${y}%`,
      padding: '10px 14px',
      background: 'rgba(27,37,64,0.92)',
      border: '1px solid rgba(255,255,255,0.16)',
      borderRadius: '12px',
      fontFamily: 'Geist Mono, monospace',
      fontSize: '11px',
      letterSpacing: '0.07em',
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
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: '#4FBFC0',
      boxShadow: '0 0 8px #4FBFC0',
      flexShrink: 0
    }
  }), label);
}
function FlowDiagram() {
  const sources = [{
    label: 'PLANILHAS',
    y: 18
  }, {
    label: 'ERP',
    y: 45
  }, {
    label: 'CRM',
    y: 72
  }];
  const outputs = [{
    label: 'DASHBOARD AO VIVO',
    y: 18
  }, {
    label: 'WHATSAPP / EMAIL',
    y: 45
  }, {
    label: 'AÇÕES AUTOMÁTICAS',
    y: 72
  }];

  // SVG paths start/end near the side edges (25/75 in viewBox space)
  // matching the visual position of the anchored nodes
  const srcX = 25;
  const outX = 75;
  const midX = 50;
  const midY = 50;
  return /*#__PURE__*/React.createElement("div", {
    className: "flow-stage",
    style: {
      height: '460px',
      width: '100%',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "flowG",
    x1: "0",
    x2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#4FBFC0",
    stopOpacity: "0.1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#4FBFC0",
    stopOpacity: "0.7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#4FBFC0",
    stopOpacity: "0.1"
  }))), sources.map((s, i) => /*#__PURE__*/React.createElement("g", {
    key: `in${i}`
  }, /*#__PURE__*/React.createElement("path", {
    d: `M ${srcX},${s.y} C ${srcX + 12},${s.y} ${midX - 12},${midY} ${midX},${midY}`,
    stroke: "url(#flowG)",
    strokeWidth: "0.35",
    fill: "none",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "0.9",
    fill: "#4FBFC0"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: `${2.4 + i * 0.4}s`,
    repeatCount: "indefinite",
    path: `M ${srcX},${s.y} C ${srcX + 12},${s.y} ${midX - 12},${midY} ${midX},${midY}`
  })))), outputs.map((o, i) => /*#__PURE__*/React.createElement("g", {
    key: `out${i}`
  }, /*#__PURE__*/React.createElement("path", {
    d: `M ${midX},${midY} C ${midX + 12},${midY} ${outX - 12},${o.y} ${outX},${o.y}`,
    stroke: "url(#flowG)",
    strokeWidth: "0.35",
    fill: "none",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "0.9",
    fill: "#7FE8E9"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: `${2.6 + i * 0.5}s`,
    repeatCount: "indefinite",
    begin: `${0.5 + i * 0.3}s`,
    path: `M ${midX},${midY} C ${midX + 12},${midY} ${outX - 12},${o.y} ${outX},${o.y}`
  }))))), sources.map((s, i) => /*#__PURE__*/React.createElement(FlowNode, {
    key: `s${i}`,
    label: s.label,
    x: srcX,
    y: s.y,
    kind: "source"
  })), /*#__PURE__*/React.createElement(FlowNode, {
    label: "KRYZON Flow",
    x: 50,
    y: 50,
    kind: "core"
  }), outputs.map((o, i) => /*#__PURE__*/React.createElement(FlowNode, {
    key: `o${i}`,
    label: o.label,
    x: outX,
    y: o.y,
    kind: "output"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '16px',
      left: '16px',
      fontFamily: 'Geist Mono, monospace',
      fontSize: '10px',
      color: 'rgba(245,241,234,0.4)',
      letterSpacing: '0.12em',
      pointerEvents: 'none'
    }
  }, "FONTES DE DADOS"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      fontFamily: 'Geist Mono, monospace',
      fontSize: '10px',
      color: 'rgba(245,241,234,0.4)',
      letterSpacing: '0.12em',
      pointerEvents: 'none'
    }
  }, "ENTREGAS"));
}
Object.assign(window, {
  FlowDiagram,
  FlowNode
});
