// Animated flow diagram — sources -> KRYZON -> outputs
const { useEffect: useEffectFlow, useState: useStateFlow } = React;

function FlowNode({ label, x, y, kind = 'source' }) {
  if (kind === 'core') {
    // Use the actual Kryzon mascot as the center node
    return (
      <div style={{
        position: 'absolute',
        left: `${x}%`, top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 3,
        textAlign: 'center'
      }}>
        <div style={{
          width: '140px', height: '140px',
          background: 'url(assets/kryzon-mark.png) center/contain no-repeat',
          margin: '0 auto',
          filter: 'drop-shadow(0 0 24px rgba(79,191,192,0.6))',
          animation: 'float-up 4s ease-in-out infinite'
        }} />
        <div style={{
          marginTop: '12px',
          fontFamily: 'Quicksand, sans-serif',
          fontWeight: 700,
          fontSize: '14px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#4FBFC0'
        }}>KRYZON · FLOW</div>
      </div>);

  }

  return (
    <div style={{
      position: 'absolute',
      left: `${x}%`, top: `${y}%`,
      transform: 'translate(-50%, -50%)',
      padding: '12px 18px',
      background: 'rgba(27,37,64,0.92)',
      border: '1px solid rgba(255,255,255,0.16)',
      borderRadius: '12px',
      fontFamily: 'Geist Mono, monospace',
      fontSize: '12px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#F5F1EA',
      whiteSpace: 'nowrap',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
      display: 'flex', alignItems: 'center', gap: '10px',
      zIndex: 2
    }}>
      <span style={{
        width: '7px', height: '7px', borderRadius: '50%',
        background: '#4FBFC0', boxShadow: '0 0 8px #4FBFC0'
      }}></span>
      {label}
    </div>);

}

function FlowDiagram() {
  // animated dots traversing connector paths
  const sources = [
  { label: 'PLANILHAS', y: 18 },
  { label: 'ERP', y: 45 },
  { label: 'CRM', y: 72 }];

  const outputs = [
  { label: 'DASHBOARD AO VIVO', y: 18 },
  { label: 'WHATSAPP / EMAIL', y: 45 },
  { label: 'AÇÕES AUTOMÁTICAS', y: 72 }];


  return (
    <div className="flow-stage" style={{ height: '460px', width: "100%" }}>
      <svg
        viewBox="0 0 100 100" preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        
        <defs>
          <linearGradient id="flowG" x1="0" x2="1">
            <stop offset="0%" stopColor="#4FBFC0" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#4FBFC0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4FBFC0" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="dot">
            <stop offset="0%" stopColor="#7FE8E9" />
            <stop offset="100%" stopColor="#4FBFC0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* incoming connectors */}
        {sources.map((s, i) =>
        <g key={`in${i}`}>
            <path
            d={`M 18,${s.y} C 35,${s.y} 35,50 50,50`}
            stroke="url(#flowG)" strokeWidth="0.3" fill="none"
            vectorEffect="non-scaling-stroke" />
          
            <circle r="0.8" fill="#4FBFC0">
              <animateMotion dur={`${2.4 + i * 0.4}s`} repeatCount="indefinite"
            path={`M 18,${s.y} C 35,${s.y} 35,50 50,50`} />
            </circle>
          </g>
        )}

        {/* outgoing connectors */}
        {outputs.map((o, i) =>
        <g key={`out${i}`}>
            <path
            d={`M 50,50 C 65,50 65,${o.y} 82,${o.y}`}
            stroke="url(#flowG)" strokeWidth="0.3" fill="none"
            vectorEffect="non-scaling-stroke" />
          
            <circle r="0.8" fill="#7FE8E9">
              <animateMotion dur={`${2.6 + i * 0.5}s`} repeatCount="indefinite" begin={`${0.5 + i * 0.3}s`}
            path={`M 50,50 C 65,50 65,${o.y} 82,${o.y}`} />
            </circle>
          </g>
        )}
      </svg>

      {/* nodes */}
      {sources.map((s, i) => <FlowNode key={`s${i}`} label={s.label} x={18} y={s.y} kind="source" />)}
      <FlowNode label="KRYZON Flow" x={50} y={50} kind="core" />
      {outputs.map((o, i) => <FlowNode key={`o${i}`} label={o.label} x={82} y={o.y} kind="output" />)}

      {/* corner labels */}
      <div style={{
        position: 'absolute', top: '20px', left: '24px',
        fontFamily: 'Geist Mono, monospace', fontSize: '10px',
        color: 'rgba(245,241,234,0.4)', letterSpacing: '0.12em'
      }}>FONTES DE DADOS</div>
      <div style={{
        position: 'absolute', top: '20px', right: '24px',
        fontFamily: 'Geist Mono, monospace', fontSize: '10px',
        color: 'rgba(245,241,234,0.4)', letterSpacing: '0.12em'
      }}>ENTREGAS</div>
    </div>);

}

Object.assign(window, { FlowDiagram, FlowNode });