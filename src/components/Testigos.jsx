import { FaWhatsapp, FaExclamationTriangle } from 'react-icons/fa';
import checkEngineImg from '../assets/check-engine.png';
import aceiteImg from '../assets/aceite.png';

// OEM ISO 7000 WARNING ICONS
const TempIcon = () => (
  <svg viewBox="0 0 80 80" fill="currentColor" width="1.15em" height="1.15em" style={{ display: 'inline-block' }}>
    <path d="M38 10 C34 10 32 13 32 17 L32 44 C27 47 25 53 27 59 C29 65 35 69 41 69 C47 69 53 65 55 59 C57 53 55 47 50 44 L50 17 C50 13 48 10 44 10 Z" />
    <path d="M39 20 L43 20 L43 47 L45 49 C48 52 48 57 45 60 C42 63 38 63 35 60 C32 57 32 52 35 49 L37 47 Z" fill="#0e1219" />
    <rect x="54" y="18" width="9" height="3" rx="1.5" />
    <rect x="54" y="26" width="6" height="3" rx="1.5" />
    <rect x="54" y="34" width="9" height="3" rx="1.5" />
    <path d="M10 55 C14 52 18 52 22 55 C26 58 30 58 34 55 L34 59 C30 62 26 62 22 59 C18 56 14 56 10 59 Z" />
    <path d="M48 55 C52 52 56 52 60 55 C64 58 68 58 72 55 L72 59 C68 62 64 62 60 59 C56 56 52 56 48 59 Z" />
    <path d="M10 64 C14 61 18 61 22 64 C26 67 30 67 34 64 L34 68 C30 71 26 71 22 68 C18 65 14 65 10 68 Z" />
    <path d="M48 64 C52 61 56 61 60 64 C64 67 68 67 72 64 L72 68 C68 71 64 71 60 68 C56 65 52 65 48 68 Z" />
  </svg>
);

const BatteryIcon = () => (
  <svg viewBox="0 0 90 70" fill="currentColor" width="1.15em" height="0.85em" style={{ display: 'inline-block' }}>
    <rect x="18" y="10" width="12" height="8" rx="1" />
    <rect x="60" y="10" width="12" height="8" rx="1" />
    <rect x="10" y="18" width="70" height="46" rx="4" />
    <rect x="20" y="32" width="10" height="3.5" fill="#0e1219" rx="1" />
    <rect x="58" y="32" width="12" height="3.5" fill="#0e1219" rx="1" />
    <rect x="62.25" y="27.75" width="3.5" height="12" fill="#0e1219" rx="1" />
  </svg>
);

const BrakeIcon = () => (
  <svg viewBox="0 0 80 80" fill="currentColor" width="1.1em" height="1.1em" style={{ display: 'inline-block' }}>
    <circle cx="40" cy="40" r="21" fill="none" stroke="currentColor" strokeWidth="5.5" />
    <rect x="37.5" y="26" width="5" height="17" rx="2.5" />
    <circle cx="40" cy="50" r="3.2" />
    <path d="M17 24 C11 33 11 47 17 56" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
    <path d="M63 24 C69 33 69 47 63 56" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
  </svg>
);

function Testigos() {
  const testigosData = [
    {
      id: 'check-engine',
      nombre: 'Check Engine',
      color: '#f59e0b',
      icon: (
        <img
          src={checkEngineImg}
          alt="Check Engine"
          style={{ width: '50px', height: '40px', objectFit: 'contain' }}
        />
      )
    },
    {
      id: 'aceite',
      nombre: 'Presión Aceite',
      color: '#ef4444',
      icon: (
        <img
          src={aceiteImg}
          alt="Presión de Aceite"
          style={{ width: '56px', height: '38px', objectFit: 'contain' }}
        />
      )
    },
    {
      id: 'bateria',
      nombre: 'Batería / Carga',
      color: '#ef4444',
      icon: <BatteryIcon />
    },
    {
      id: 'temperatura',
      nombre: 'Temperatura',
      color: '#ef4444',
      icon: <TempIcon />
    },
    {
      id: 'frenos',
      nombre: 'Frenos / ABS',
      color: '#ef4444',
      icon: <BrakeIcon />
    }
  ];

  return (
    <section id="testigos" style={{
      padding: '90px 24px',
      backgroundColor: '#07090e',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid #1f2737'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Top Tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#f87171',
          fontFamily: 'var(--font-tech)',
          fontWeight: 700,
          fontSize: '14px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}>
          <FaExclamationTriangle /> DIAGNÓSTICO DE TABLERO
        </div>

        {/* Main Section Title */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 900,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          margin: '0 0 16px 0'
        }}>
          ¿SE TE ENCENDIÓ ALGUNA DE <span style={{ color: '#ef4444' }}>ESTAS ADVERTENCIAS</span>?
        </h2>

        <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '650px', margin: '0 auto 45px auto', lineHeight: 1.6 }}>
          Si tenés alguna luz de alerta prendida en el instrumental, traelo al taller o escribinos y lo solucionamos con diagnóstico certero.
        </p>

        {/* Dashboard cluster cards (5 direct clickable cards) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '18px',
          marginBottom: '45px'
        }}>
          {testigosData.map((t) => (
            <a
              key={t.id}
              href={`https://wa.me/5491127270479?text=Hola%20Jorge%20e%20Hijo,%20se%20me%20encendi%C3%B3%20en%20el%20tablero%20el%20testigo%20de%20${encodeURIComponent(t.nombre)}`}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'rgba(15, 20, 30, 0.75)',
                border: '1px solid #283344',
                borderRadius: '8px',
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                minWidth: '145px',
                textDecoration: 'none',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.color;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${t.color}35`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#283344';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontSize: '44px',
                color: t.color,
                filter: `drop-shadow(0 0 10px ${t.color}80)`,
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {t.icon}
              </div>
              <span style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '13px',
                fontWeight: 700,
                color: '#e2e8f0',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                {t.nombre}
              </span>
            </a>
          ))}
        </div>

        {/* Direct Consultation Button below the 5 cards */}
        <div>
          <a
            href="https://wa.me/5491127270479?text=Hola%20Jorge%20e%20Hijo,%20tengo%20una%20luz%20prendida%20en%20el%20tablero%20y%20necesito%20revisarla"
            target="_blank"
            rel="noreferrer"
            className="btn-mechanical-primary"
            style={{ padding: '14px 32px', fontSize: '18px' }}
          >
            <FaWhatsapp style={{ fontSize: '22px' }} />
            <span>Consultar por Advertencias en Tablero</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Testigos;
