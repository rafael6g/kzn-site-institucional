// Sparkline live-updating dashboard
const {
  useState,
  useEffect,
  useRef
} = React;
function Sparkline({
  color = '#4FBFC0',
  seed = 0
}) {
  const [points, setPoints] = useState(() => {
    const arr = [];
    let v = 50;
    for (let i = 0; i < 30; i++) {
      v += Math.sin(i * 0.5 + seed) * 8 + (Math.random() - 0.5) * 6;
      v = Math.max(20, Math.min(80, v));
      arr.push(v);
    }
    return arr;
  });
  useEffect(() => {
    const id = setInterval(() => {
      setPoints(prev => {
        const next = prev.slice(1);
        const last = prev[prev.length - 1];
        const v = Math.max(20, Math.min(80, last + (Math.random() - 0.4) * 10));
        next.push(v);
        return next;
      });
    }, 1400);
    return () => clearInterval(id);
  }, []);
  const w = 100,
    h = 40;
  const step = w / (points.length - 1);
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(2)},${(h - p / 100 * h).toFixed(2)}`).join(' ');
  const area = path + ` L${w},${h} L0,${h} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    className: "spark",
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `spk${seed}`,
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.4"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#spk${seed})`
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: color,
    strokeWidth: "1.2",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }));
}
function CountUp({
  to,
  prefix = '',
  suffix = '',
  decimals = 0
}) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let raf;
    let start = null;
    const dur = 1600;
    const step = t => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        raf = requestAnimationFrame(step);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [to]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, prefix, val.toFixed(decimals), suffix);
}
function LiveDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1400);
    return () => clearInterval(id);
  }, []);

  // jiggle stats slightly
  const lucro = 34.2 + Math.sin(tick * 0.6) * 0.4;
  const horas = 142 + Math.floor(Math.cos(tick * 0.4) * 3);
  const fluxos = 1284 + tick * 2;
  return /*#__PURE__*/React.createElement("div", {
    className: "dashboard reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dashboard-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Dashboard \xB7 Cliente A"), /*#__PURE__*/React.createElement("div", {
    className: "live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " Live")), /*#__PURE__*/React.createElement("div", {
    className: "stat-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Lucro l\xEDquido"), /*#__PURE__*/React.createElement("div", {
    className: "value"
  }, "+", /*#__PURE__*/React.createElement(CountUp, {
    to: 34,
    suffix: "%"
  })), /*#__PURE__*/React.createElement("div", {
    className: "delta"
  }, "\u25B2 +5.2 vs. m\xEAs passado")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Horas economizadas"), /*#__PURE__*/React.createElement("div", {
    className: "value"
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: 142
  }), "h"), /*#__PURE__*/React.createElement("div", {
    className: "delta"
  }, "\u2248 18 dias \xFAteis"))), /*#__PURE__*/React.createElement("div", {
    className: "stat",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Fluxos automatizados \xB7 30d"), /*#__PURE__*/React.createElement("div", {
    className: "value",
    style: {
      fontSize: '28px'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: 1284
  }))), /*#__PURE__*/React.createElement("div", {
    className: "delta",
    style: {
      marginTop: 0
    }
  }, "\u25B2 +212% YoY")), /*#__PURE__*/React.createElement(Sparkline, {
    seed: 1
  })), /*#__PURE__*/React.createElement("div", {
    className: "chip",
    style: {
      top: '90px',
      right: '-12px',
      transform: 'rotate(2deg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ind"
  }), " ERP \u2192 BI \xB7 sync ok"), /*#__PURE__*/React.createElement("div", {
    className: "chip",
    style: {
      bottom: '40px',
      left: '-20px',
      transform: 'rotate(-3deg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ind"
  }), " Alerta WhatsApp enviado"));
}
Object.assign(window, {
  LiveDashboard,
  Sparkline,
  CountUp
});
