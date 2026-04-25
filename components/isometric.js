// Isometric SVG illustration placeholders — Rocketseat-style
// Built with line + flat shapes, using --teal accent

function IsoDataFlow({
  size = 360
}) {
  // Stacked data layers + connecting lines + floating cubes
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 400",
    width: size,
    height: size,
    fill: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "iso-glow-1",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#4FBFC0",
    stopOpacity: "0.3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#4FBFC0",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("g", {
    opacity: "0.18",
    stroke: "#4FBFC0",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200 360 L 60 280 L 200 200 L 340 280 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200 320 L 100 260"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200 320 L 300 260"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 130 300 L 270 220"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 270 300 L 130 220"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 200 280 L 80 220 L 200 160 L 320 220 Z",
    fill: "#0d0f14",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 80 220 L 80 240 L 200 300 L 200 280 Z",
    fill: "#1a1d24",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 320 220 L 320 240 L 200 300 L 200 280 Z",
    fill: "#050608",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0,-50)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200 280 L 110 235 L 200 190 L 290 235 Z",
    fill: "#0d0f14",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 110 235 L 110 250 L 200 295 L 200 280 Z",
    fill: "#1a1d24",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 290 235 L 290 250 L 200 295 L 200 280 Z",
    fill: "#050608",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "280",
    r: "3",
    fill: "#7FE8E9"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0,-110)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200 250 L 160 230 L 200 210 L 240 230 Z",
    fill: "#4FBFC0",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 160 230 L 160 245 L 200 265 L 200 250 Z",
    fill: "#3FA8A9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 240 230 L 240 245 L 200 265 L 200 250 Z",
    fill: "#2D8788"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#4FBFC0"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "120",
    r: "3",
    opacity: "0.6"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    values: "120;110;120",
    dur: "3s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "100",
    r: "2",
    opacity: "0.4"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    values: "100;90;100",
    dur: "2.5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "350",
    cy: "180",
    r: "2.5",
    opacity: "0.5"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    values: "180;170;180",
    dur: "3.5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "170",
    r: "2",
    opacity: "0.5"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    values: "170;160;170",
    dur: "3s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/React.createElement("g", {
    stroke: "#4FBFC0",
    strokeWidth: "1",
    strokeDasharray: "3 3",
    opacity: "0.5"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "200",
    y1: "155",
    x2: "200",
    y2: "190"
  })));
}
function IsoFlowDesk({
  size = 360
}) {
  // Isometric desk + monitor with code lines (Rocketseat-ish)
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 400",
    width: size,
    height: size,
    fill: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "200",
    cy: "340",
    rx: "170",
    ry: "20",
    fill: "#4FBFC0",
    opacity: "0.06"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 80 280 L 200 220 L 320 280 L 200 340 Z",
    fill: "#0d0f14",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 80 280 L 80 295 L 200 355 L 200 340 Z",
    fill: "#1a1d24",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 320 280 L 320 295 L 200 355 L 200 340 Z",
    fill: "#050608",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 180 250 L 220 270 L 220 280 L 180 260 Z",
    fill: "#1a1d24",
    stroke: "#4FBFC0",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 195 245 L 205 250 L 205 265 L 195 260 Z",
    fill: "#1a1d24",
    stroke: "#4FBFC0",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 130 165 L 240 110 L 280 130 L 170 185 Z",
    fill: "#0d0f14",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 130 165 L 170 185 L 170 250 L 130 230 Z",
    fill: "#1a1d24",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 280 130 L 280 195 L 170 250 L 170 185 Z",
    fill: "#050608",
    stroke: "#4FBFC0",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "60",
    height: "2",
    fill: "#4FBFC0",
    opacity: "0.9",
    transform: "translate(150 175) skewY(-26)"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0.4;0.9;0.4",
    dur: "2s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "40",
    height: "2",
    fill: "#7FE8E9",
    opacity: "0.7",
    transform: "translate(150 187) skewY(-26)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "70",
    height: "2",
    fill: "#4FBFC0",
    opacity: "0.5",
    transform: "translate(150 199) skewY(-26)"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0.3;0.7;0.3",
    dur: "2.4s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "30",
    height: "2",
    fill: "#4FBFC0",
    opacity: "0.6",
    transform: "translate(150 211) skewY(-26)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "55",
    height: "2",
    fill: "#7FE8E9",
    opacity: "0.8",
    transform: "translate(150 223) skewY(-26)"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0.4;0.9;0.4",
    dur: "1.8s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/React.createElement("g", {
    transform: "translate(310 80)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20 L 20 10 L 40 20 L 20 30 Z",
    fill: "#4FBFC0",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 20 L 0 28 L 20 38 L 20 30 Z",
    fill: "#3FA8A9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 40 20 L 40 28 L 20 38 L 20 30 Z",
    fill: "#2D8788"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(60 100)",
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 15 L 15 7 L 30 15 L 15 23 Z",
    fill: "#4FBFC0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 15 L 0 23 L 15 31 L 15 23 Z",
    fill: "#3FA8A9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 30 15 L 30 23 L 15 31 L 15 23 Z",
    fill: "#2D8788"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "#4FBFC0",
    strokeWidth: "1",
    strokeDasharray: "2 4",
    opacity: "0.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 80 110 Q 120 100 150 130",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 320 100 Q 290 110 270 140",
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#7FE8E9"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "350",
    cy: "200",
    r: "2"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    values: "200;190;200",
    dur: "3s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "180",
    r: "2",
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    values: "180;170;180",
    dur: "2.5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "370",
    cy: "60",
    r: "1.5",
    opacity: "0.6"
  })));
}
function IsoMetrics({
  size = 360
}) {
  // Isometric bar chart growing
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 400",
    width: size,
    height: size,
    fill: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 60 320 L 200 250 L 340 320 L 200 390 Z",
    fill: "#0d0f14",
    opacity: "0.5",
    stroke: "#4FBFC0",
    strokeWidth: "1",
    strokeOpacity: "0.3"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-60 0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200 280 L 220 270 L 220 235 L 200 245 Z",
    fill: "#1a1d24",
    stroke: "#4FBFC0",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 220 270 L 240 280 L 240 245 L 220 235 Z",
    fill: "#0d0f14",
    stroke: "#4FBFC0",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200 245 L 220 235 L 240 245 L 220 255 Z",
    fill: "#4FBFC0",
    opacity: "0.4"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 200 280 L 220 270 L 220 215 L 200 225 Z",
    fill: "#1a1d24",
    stroke: "#4FBFC0",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 220 270 L 240 280 L 240 225 L 220 215 Z",
    fill: "#0d0f14",
    stroke: "#4FBFC0",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200 225 L 220 215 L 240 225 L 220 235 Z",
    fill: "#4FBFC0",
    opacity: "0.6"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(60 0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200 280 L 220 270 L 220 175 L 200 185 Z",
    fill: "#1a1d24",
    stroke: "#4FBFC0",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 220 270 L 240 280 L 240 185 L 220 175 Z",
    fill: "#0d0f14",
    stroke: "#4FBFC0",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200 185 L 220 175 L 240 185 L 220 195 Z",
    fill: "#4FBFC0"
  }))), /*#__PURE__*/React.createElement("g", {
    stroke: "#7FE8E9",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 160 240 L 220 220 L 280 170"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 268 165 L 280 170 L 275 182"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#4FBFC0"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "120",
    r: "2.5",
    opacity: "0.6"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    values: "120;110;120",
    dur: "3s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "340",
    cy: "110",
    r: "2",
    opacity: "0.5"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    values: "110;100;110",
    dur: "2.5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "360",
    cy: "220",
    r: "2",
    opacity: "0.4"
  })));
}
Object.assign(window, {
  IsoDataFlow,
  IsoFlowDesk,
  IsoMetrics
});
