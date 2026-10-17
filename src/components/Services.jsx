import { FaWrench, FaBolt, FaWhatsapp, FaCogs } from 'react-icons/fa';
import alternadorImg from '../assets/alternador.jpg';
import motorImg from '../assets/motor-hero.jpg';
import herramientasBg from '../assets/mecanico-herramientas.jpg';

function Services() {
  const electricItems = [
    'Motores de arranque (burros de arranque)',
    'Alternadores y banco de pruebas de carga',
    'Encendido electrónico, bobinas y bujías',
    'Instalación eléctrica completa y fusileras',
    'Luces reglamentarias, LED y electroventiladores'
  ];

  const mechanicItems = [
    'Kits de distribución (correa, tensores y bomba)',
    'Embragues completos y despieces',
    'Frenos integrales (discos, pastillas y cintas)',
    'Tren delantero, bujes y amortiguación',
    'Mantenimiento preventivo y service de motor'
  ];

  return (
    <section id="servicios" style={{
      padding: '100px 24px',
      backgroundColor: '#0b0d13',
      borderBottom: '1px solid #1f2737',
      backgroundImage: `linear-gradient(180deg, rgba(11, 13, 19, 0.94) 0%, rgba(11, 13, 19, 0.88) 50%, rgba(11, 13, 19, 0.96) 100%), url(${herramientasBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#f97316',
            fontFamily: 'var(--font-tech)',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            <FaCogs /> SERVICIOS ESPECIALIZADOS
          </div>
          
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(34px, 5.5vw, 56px)',
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 0 16px 0'
          }}>
            MECÁNICA <span style={{ color: '#f97316' }}>& ELECTRICIDAD</span>
          </h2>
          
          <p style={{
            color: '#cbd5e1',
            maxWidth: '580px',
            margin: '0 auto',
            fontSize: '17px',
            lineHeight: 1.6
          }}>
            Especialistas en alternadores, motores de arranque, distribución y mecánica general.
          </p>
        </div>

        {/* 2 Clean & Spacious Workstation Cards with Real Photos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '36px'
        }}>
          
          {/* Card 1: Electricidad (Alternador y Motor de Arranque) */}
          <div className="metal-card" style={{
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(19, 23, 32, 0.94)',
            backdropFilter: 'blur(8px)',
            border: '1px solid #283548'
          }}>
            {/* Real Alternator / Starter Motor Image Header */}
            <div style={{
              height: '170px',
              backgroundImage: `linear-gradient(180deg, rgba(2, 132, 199, 0.25) 0%, rgba(13, 16, 23, 0.95) 100%), url(${alternadorImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '16px 24px'
            }}>
              <span style={{
                backgroundColor: 'rgba(2, 132, 199, 0.9)',
                color: '#ffffff',
                fontFamily: 'var(--font-tech)',
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1.5px',
                padding: '4px 10px',
                borderRadius: '3px',
                textTransform: 'uppercase'
              }}>
                ALTERNADORES & MOTORES DE ARRANQUE
              </span>
            </div>

            <div style={{ padding: '32px', position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="rivet-corner rivet-tl" style={{ top: '15px' }} />
              <div className="rivet-corner rivet-tr" style={{ top: '15px' }} />
              <div className="rivet-corner rivet-bl" />
              <div className="rivet-corner rivet-br" />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    boxShadow: '0 0 16px rgba(2, 132, 199, 0.4)'
                  }}>
                    <FaBolt />
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-tech)', color: '#38bdf8', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }}>
                      LABORATORIO ELÉCTRICO
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: '#ffffff', fontSize: '25px', fontWeight: 800, margin: 0 }}>
                      ELECTRICIDAD AUTOMOTRIZ
                    </h3>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 35px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {electricItems.map((item, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#e2e8f0',
                      fontSize: '16px',
                      borderBottom: '1px solid #1a2230',
                      paddingBottom: '10px'
                    }}>
                      <span style={{ color: '#38bdf8', fontSize: '18px' }}>&rsaquo;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/5491127270479?text=Hola%20Jorge%20e%20Hijo,%20quisiera%20consultar%20por%20un%20servicio%20de%20Alternador%20o%20Motor%20de%20Arranque"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: 'rgba(2, 132, 199, 0.15)',
                  border: '1px solid #0284c7',
                  color: '#38bdf8',
                  padding: '14px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '17px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0284c7';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.15)';
                  e.currentTarget.style.color = '#38bdf8';
                }}
              >
                <FaWhatsapp style={{ fontSize: '20px' }} />
                <span>Consultar Alternador / Arranque</span>
              </a>
            </div>
          </div>

          {/* Card 2: Mecánica (Motor y Distribución) */}
          <div className="metal-card" style={{
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(19, 23, 32, 0.94)',
            backdropFilter: 'blur(8px)',
            border: '1px solid #283548'
          }}>
            {/* Real Engine Image Header */}
            <div style={{
              height: '170px',
              backgroundImage: `linear-gradient(180deg, rgba(234, 88, 12, 0.25) 0%, rgba(13, 16, 23, 0.95) 100%), url(${motorImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '16px 24px'
            }}>
              <span style={{
                backgroundColor: 'rgba(234, 88, 12, 0.9)',
                color: '#ffffff',
                fontFamily: 'var(--font-tech)',
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1.5px',
                padding: '4px 10px',
                borderRadius: '3px',
                textTransform: 'uppercase'
              }}>
                MOTORES & DISTRIBUCIÓN
              </span>
            </div>

            <div style={{ padding: '32px', position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="rivet-corner rivet-tl" style={{ top: '15px' }} />
              <div className="rivet-corner rivet-tr" style={{ top: '15px' }} />
              <div className="rivet-corner rivet-bl" />
              <div className="rivet-corner rivet-br" />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    boxShadow: '0 0 16px rgba(234, 88, 12, 0.4)'
                  }}>
                    <FaWrench />
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-tech)', color: '#fb923c', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }}>
                      ÁREA MECÁNICA
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: '#ffffff', fontSize: '25px', fontWeight: 800, margin: 0 }}>
                      MECÁNICA GENERAL 
                    </h3>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 35px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {mechanicItems.map((item, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#e2e8f0',
                      fontSize: '16px',
                      borderBottom: '1px solid #1a2230',
                      paddingBottom: '10px'
                    }}>
                      <span style={{ color: '#fb923c', fontSize: '18px' }}>&rsaquo;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/5491127270479?text=Hola%20Jorge%20e%20Hijo,%20quisiera%20consultar%20por%20un%20servicio%20de%20Mecánica%20de%20Motor"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: 'rgba(234, 88, 12, 0.15)',
                  border: '1px solid #ea580c',
                  color: '#fb923c',
                  padding: '14px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '17px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ea580c';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(234, 88, 12, 0.15)';
                  e.currentTarget.style.color = '#fb923c';
                }}
              >
                <FaWhatsapp style={{ fontSize: '20px' }} />
                <span>Consultar Mecánica / Motor</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;
