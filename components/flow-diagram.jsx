// Animated flow diagram — flexbox layout, zero clipping risk
const { useRef: useRefFlow, useEffect: useEffectFlow } = React;

function FlowDiagram() {
  const sources = [
    { label: 'PLANILHAS', y: 20 },
    { label: 'ERP',       y: 50 },
    { label: 'CRM',       y: 80 },
  ];
  const outputs = [
    { label: 'DASHBOARD AO VIVO',  y: 20 },
    { label: 'WHATSAPP / EMAIL',   y: 50 },
    { label: 'AÇÕES AUTOMÁTICAS',  y: 80 },
  ];

  const nodeStyle = {
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
  };

  const dotStyle = {
    width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
    background: '#4FBFC0', boxShadow: '0 0 8px #4FBFC0',
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: '16px',
    zIndex: 2,
    position: 'relative',
  };

  return (
    <div className="flow-stage" style={{ width: '100%', padding: '32px 16px', boxSizing: 'border-box' }}>

      {/* Corner labels */}
      <div style={{ position: 'absolute', top: '10px', left: '14px',
        fontFamily: 'Geist Mono, monospace', fontSize: '9px',
        color: 'rgba(245,241,234,0.35)', letterSpacing: '0.12em', pointerEvents: 'none' }}>
        FONTES DE DADOS
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '14px',
        fontFamily: 'Geist Mono, monospace', fontSize: '9px',
        color: 'rgba(245,241,234,0.35)', letterSpacing: '0.12em', pointerEvents: 'none' }}>
        ENTREGAS
      </div>

      {/* Main 3-column layout */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, minHeight: '340px', marginTop: '16px' }}>

        {/* LEFT — source nodes */}
        <div style={{ ...colStyle, flex: '0 0 auto', alignItems: 'flex-start' }}>
          {sources.map((s, i) => (
            <div key={i} style={nodeStyle}>
              <span style={dotStyle} />
              {s.label}
            </div>
          ))}
        </div>

        {/* CENTER — SVG lines + mascot */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* SVG connecting lines, fills the center column */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
            <defs>
              <linearGradient id="flowG" x1="0" x2="1">
                <stop offset="0%"   stopColor="#4FBFC0" stopOpacity="0.1" />
                <stop offset="50%"  stopColor="#4FBFC0" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#4FBFC0" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* incoming — from left edge (0) to center (50) */}
            {sources.map((s, i) => (
              <g key={`in${i}`}>
                <path d={`M 0,${s.y} C 25,${s.y} 25,50 50,50`}
                  stroke="url(#flowG)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
                <circle r="1" fill="#4FBFC0">
                  <animateMotion dur={`${2.4 + i * 0.4}s`} repeatCount="indefinite"
                    path={`M 0,${s.y} C 25,${s.y} 25,50 50,50`} />
                </circle>
              </g>
            ))}
            {/* outgoing — from center (50) to right edge (100) */}
            {outputs.map((o, i) => (
              <g key={`out${i}`}>
                <path d={`M 50,50 C 75,50 75,${o.y} 100,${o.y}`}
                  stroke="url(#flowG)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
                <circle r="1" fill="#7FE8E9">
                  <animateMotion dur={`${2.6 + i * 0.5}s`} repeatCount="indefinite" begin={`${0.5 + i * 0.3}s`}
                    path={`M 50,50 C 75,50 75,${o.y} 100,${o.y}`} />
                </circle>
              </g>
            ))}
          </svg>

          {/* Mascot — centered */}
          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
            <div style={{
              width: '110px', height: '110px',
              background: 'url(assets/kryzon-mark.png) center/contain no-repeat',
              margin: '0 auto',
              filter: 'drop-shadow(0 0 24px rgba(79,191,192,0.6))',
              animation: 'float-up 4s ease-in-out infinite',
            }} />
            <div style={{
              marginTop: '10px', fontFamily: 'Quicksand, sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4FBFC0',
            }}>KRYZON · FLOW</div>
          </div>
        </div>

        {/* RIGHT — output nodes */}
        <div style={{ ...colStyle, flex: '0 0 auto', alignItems: 'flex-end' }}>
          {outputs.map((o, i) => (
            <div key={i} style={nodeStyle}>
              <span style={dotStyle} />
              {o.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FlowDiagram });
