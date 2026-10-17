import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaWrench, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(11, 13, 19, 0.96)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #232c3d'
    }}>
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #f97316 0%, #ea580c 100%)' }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Brand */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            background: 'linear-gradient(135deg, #f97316, #c2410c)',
            color: '#ffffff',
            width: '40px',
            height: '40px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px'
          }}>
            <FaWrench />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '24px',
              fontWeight: 900,
              letterSpacing: '1px',
              color: '#ffffff',
              lineHeight: 1
            }}>
              JORGE <span style={{ color: '#f97316' }}>E HIJO</span>
            </div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '11px', letterSpacing: '2px', color: '#94a3b8', textTransform: 'uppercase' }}>
              Mecánica &bull; Electricidad Automotriz
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '30px' }} className="desktop-nav">
          <style>{`
            @media (min-width: 820px) {
              .desktop-nav { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {[
            { label: 'INICIO', href: '#inicio' },
            { label: 'SERVICIOS', href: '#servicios' },
            { label: 'CONTACTO', href: '#contacto' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '1px',
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f97316')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="tel:1127270479"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#161d2a',
              border: '1px solid #283548',
              color: '#ffffff',
              padding: '8px 14px',
              borderRadius: '4px',
              fontSize: '13px',
              fontFamily: 'var(--font-tech)',
              fontWeight: 700,
              textDecoration: 'none'
            }}
            className="header-phone"
          >
            <style>{`
              @media (min-width: 550px) {
                .header-phone { display: inline-flex !important; }
              }
            `}</style>
            <FaPhoneAlt style={{ color: '#f97316' }} />
            <span>11 2727-0479</span>
          </a>

          <a
            href="https://wa.me/5491127270479?text=Hola%20Jorge%20e%20Hijo,%20necesito%20hacer%20una%20consulta"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#22c55e',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              letterSpacing: '1px',
              textDecoration: 'none'
            }}
          >
            <FaWhatsapp style={{ fontSize: '18px' }} />
            <span>TURNO</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-toggle"
            style={{
              background: '#1a202c',
              border: '1px solid #334155',
              color: '#ffffff',
              padding: '8px 12px',
              borderRadius: '4px',
              fontSize: '18px',
              cursor: 'pointer'
            }}
            aria-label="Menú"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          backgroundColor: '#0c0f16',
          borderBottom: '2px solid #f97316',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {[
            { label: 'INICIO', href: '#inicio' },
            { label: 'SERVICIOS', href: '#servicios' },
            { label: 'CONTACTO', href: '#contacto' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 700,
                color: '#e2e8f0',
                textDecoration: 'none',
                padding: '6px 0',
                borderBottom: '1px solid #1a2230'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
