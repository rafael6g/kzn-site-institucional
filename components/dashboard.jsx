// Sparkline live-updating dashboard
const { useState, useEffect, useRef } = React;

function Sparkline({ color = '#4FBFC0', seed = 0 }) {
  const [points, setPoints] = useState(() => {
    const arr = [];
    let v = 50;
    for (let i = 0; i < 30; i++) {
      v += (Math.sin(i * 0.5 + seed) * 8) + (Math.random() - 0.5) * 6;
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

  const w = 100, h = 40;
  const step = w / (points.length - 1);
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(2)},${(h - (p / 100) * h).toFixed(2)}`).join(' ');
  const area = path + ` L${w},${h} L0,${h} Z`;

  return (
    <svg className="spark" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`spk${seed}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#spk${seed})`} />
      <path d={path} fill="none" stroke={color} strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function CountUp({ to, prefix = '', suffix = '', decimals = 0 }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let raf;
    let start = null;
    const dur = 1600;
    const step = (t) => {
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
    return () => { cancelAnimationFrame(raf); obs.disconnect(); };
  }, [to]);
  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
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

  return (
    <div className="dashboard reveal">
      <div className="dashboard-head">
        <div className="title">Dashboard · Cliente A</div>
        <div className="live"><span className="dot"></span> Live</div>
      </div>

      <div className="stat-grid">
        <div className="stat">
          <div className="label">Lucro líquido</div>
          <div className="value">+<CountUp to={34} suffix="%" /></div>
          <div className="delta">▲ +5.2 vs. mês passado</div>
        </div>
        <div className="stat">
          <div className="label">Horas economizadas</div>
          <div className="value"><CountUp to={142} />h</div>
          <div className="delta">≈ 18 dias úteis</div>
        </div>
      </div>

      <div className="stat" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="label">Fluxos automatizados · 30d</div>
            <div className="value" style={{ fontSize: '28px' }}>
              <CountUp to={1284} />
            </div>
          </div>
          <div className="delta" style={{ marginTop: 0 }}>▲ +212% YoY</div>
        </div>
        <Sparkline seed={1} />
      </div>

      {/* floating chips */}
      <div className="chip" style={{ top: '90px', right: '-12px', transform: 'rotate(2deg)' }}>
        <span className="ind"></span> ERP → BI · sync ok
      </div>
      <div className="chip" style={{ bottom: '40px', left: '-20px', transform: 'rotate(-3deg)' }}>
        <span className="ind"></span> Alerta WhatsApp enviado
      </div>
    </div>
  );
}

Object.assign(window, { LiveDashboard, Sparkline, CountUp });
