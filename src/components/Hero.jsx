import { FaWhatsapp, FaWrench, FaPhoneAlt, FaMapMarkerAlt, FaCogs } from 'react-icons/fa';
import motorV8Bg from '../assets/motor-v8.jpg';

function Hero() {
  return (
    <section id="inicio" style={{
      position: 'relative',
      backgroundColor: '#0a0d14',
      overflow: 'hidden',
      borderBottom: '1px solid #1f2737',
      backgroundImage: `linear-gradient(180deg, rgba(8, 10, 15, 0.88) 0%, rgba(8, 10, 15, 0.72) 45%, rgba(8, 10, 15, 0.96) 100%), url(${motorV8Bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 24px 100px 24px'
    }}>
      
      {/* Decorative mechanical watermarks */}
      <div style={{
        position: 'absolute',
        top: '12%',
        right: '4%',
        fontSize: '260px',
        color: 'rgba(249, 115, 22, 0.05)',
        transform: 'rotate(25deg)',
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        <FaWrench />
      </div>

      <div style={{
        position: 'absolute',
        bottom: '8%',
        left: '3%',
        fontSize: '220px',
        color: 'rgba(255, 255, 255, 0.02)',
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        <FaCogs />
      </div>

      {/* Ambient background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '420px',
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.18) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1050px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Main Title - Spacious, bold and mechanical */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(46px, 7.5vw, 84px)',
          fontWeight: 900,
          lineHeight: 1.08,
          textTransform: 'uppercase',
          color: '#ffffff',
          letterSpacing: '2px',
          margin: '0 0 24px 0',
          textShadow: '0 4px 20px rgba(0,0,0,0.8)'
        }}>
          TALLER AUTOMOTRIZ <br />
          <span style={{ color: '#f97316' }}>JORGE E HIJO</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'var(--font-tech)',
          fontSize: 'clamp(18px, 2.8vw, 24px)',
          color: '#e2e8f0',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '20px'
        }}>
          Mecánica General &bull; Electricidad &bull; Diagnóstico Computarizado
        </p>

        <p style={{
          fontSize: '17px',
          lineHeight: 1.7,
          color: '#cbd5e1',
          maxWidth: '650px',
          margin: '0 auto 25px auto'
        }}>
          Más de 30 años de experiencia y seriedad familiar cuidando tu vehículo. Especialistas en motores, alternadores, motores de arranque, frenos y tren delantero.
        </p>

        {/* Promo Distribución */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px 12px',
          backgroundColor: 'rgba(249, 115, 22, 0.12)',
          border: '1px solid rgba(249, 115, 22, 0.5)',
          borderRadius: '6px',
          padding: '12px 24px',
          margin: '0 auto 45px auto',
          maxWidth: '750px',
          boxShadow: '0 4px 20px rgba(249, 115, 22, 0.15)'
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(17px, 2.4vw, 21px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#ffffff'
          }}>
            Cambio kit distribución para todos los autos a
          </span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 3vw, 28px)',
            fontWeight: 900,
            color: '#f97316',
            letterSpacing: '1px'
          }}>
            $60.000
          </span>
          <span style={{
            fontFamily: 'var(--font-tech)',
            fontSize: '17px',
            fontWeight: 700,
            color: '#cbd5e1',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            + repuestos
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '60px'
        }}>
          <a
            href="https://wa.me/5491127270479?text=Hola%20Jorge%20e%20Hijo,%20necesito%20pedir%20un%20turno%20o%20hacer%20una%20consulta"
            target="_blank"
            rel="noreferrer"
            className="btn-mechanical-primary"
            style={{ padding: '16px 36px', fontSize: '20px' }}
          >
            <FaWhatsapp style={{ fontSize: '24px' }} />
            <span>Pedir Turno por WhatsApp</span>
          </a>

          <a
            href="#servicios"
            className="btn-mechanical-secondary"
            style={{ padding: '16px 32px', fontSize: '18px' }}
          >
            <span>Ver Servicios</span>
          </a>
        </div>

        {/* Quick Highlights */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          borderTop: '1px solid #1f2737',
          paddingTop: '35px',
          color: '#e2e8f0',
          fontFamily: 'var(--font-tech)',
          fontSize: '15px',
          letterSpacing: '1px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaMapMarkerAlt style={{ color: '#f97316' }} />
            <span>San Matías 74, Rafael Castillo</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaPhoneAlt style={{ color: '#f97316' }} />
            <span>11 2727-0479</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaWrench style={{ color: '#f97316' }} />
            <span>Atención Multimarca</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
