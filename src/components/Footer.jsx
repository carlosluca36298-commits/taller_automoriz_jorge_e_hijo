import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaWhatsapp, FaDirections, FaWrench } from 'react-icons/fa';

function Footer() {
  const mapUrl = "https://maps.google.com/maps?q=San+Mat%C3%ADas+74,+Rafael+Castillo,+Provincia+de+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=San+Mat%C3%ADas+74,+Rafael+Castillo";

  return (
    <footer id="contacto" style={{
      backgroundColor: '#07090e',
      color: '#ffffff',
      borderTop: '2px solid #232c3d',
      padding: '80px 24px 40px 24px'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '50px'
        }}>
          
          {/* Col 1: Datos de Contacto */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)',
                color: '#ffffff',
                width: '38px',
                height: '38px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>
                <FaWrench />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '26px',
                fontWeight: 900,
                color: '#ffffff',
                margin: 0,
                letterSpacing: '1px'
              }}>
                JORGE <span style={{ color: '#f97316' }}>E HIJO</span>
              </h3>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
              Mecánica general y electricidad automotriz en Rafael Castillo. Tradición familiar y diagnóstico de confianza.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px', color: '#e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaMapMarkerAlt style={{ color: '#f97316' }} />
                <span>San Matías 74, Rafael Castillo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaClock style={{ color: '#f97316' }} />
                <span>Lun a Vie: 08:00 a 19:00 hs &bull; Sáb: 08:00 a 13:00 hs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaPhoneAlt style={{ color: '#f97316' }} />
                <a href="tel:1127270479" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>11 2727-0479</a>
              </div>
            </div>
          </div>

          {/* Col 2: Mapa GPS */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontFamily: 'var(--font-tech)', fontSize: '13px', color: '#94a3b8', fontWeight: 700, letterSpacing: '1px' }}>
                UBICACIÓN EN MAPA
              </span>
              <a href={directionsUrl} target="_blank" rel="noreferrer" style={{ color: '#f97316', fontSize: '13px', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FaDirections /> Cómo Llegar
              </a>
            </div>

            <div style={{
              width: '100%',
              height: '210px',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid #232c3d'
            }}>
              <iframe 
                title="Ubicación Taller Jorge e Hijo"
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid #1a2230',
          paddingTop: '25px',
          textAlign: 'center',
          fontSize: '13px',
          color: '#64748b'
        }}>
          &copy; {new Date().getFullYear()} Taller Automotriz Jorge e Hijo &bull; Rafael Castillo. Todos los derechos reservados.
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5491127270479?text=Hola%20Jorge%20e%20Hijo,%20quisiera%20hacer%20una%20consulta" 
        target="_blank" 
        rel="noreferrer" 
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#22c55e',
          color: '#ffffff',
          borderRadius: '50px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 6px 20px rgba(34, 197, 94, 0.45)',
          zIndex: 9999,
          textDecoration: 'none',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '16px',
          letterSpacing: '1px',
          border: '1px solid rgba(255,255,255,0.3)'
        }}
      >
        <FaWhatsapp style={{ fontSize: '22px' }} />
        <span>WhatsApp</span>
      </a>

    </footer>
  );
}

export default Footer;
