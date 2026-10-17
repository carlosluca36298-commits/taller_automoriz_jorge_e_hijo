import { 
  SiToyota, SiVolkswagen, SiFiat, SiPeugeot, SiChevrolet, 
  SiFord, SiRenault, SiCitroen, SiJeep, SiNissan, 
  SiHonda, SiHyundai, SiKia 
} from 'react-icons/si';
import { FaShieldAlt } from 'react-icons/fa';

function Brands() {
  const marcasTaller = [
    { nombre: 'Toyota', icono: <SiToyota /> },
    { nombre: 'Volkswagen', icono: <SiVolkswagen /> },
    { nombre: 'Fiat', icono: <SiFiat /> },
    { nombre: 'Peugeot', icono: <SiPeugeot /> },
    { nombre: 'Chevrolet', icono: <SiChevrolet /> },
    { nombre: 'Ford', icono: <SiFord /> },
    { nombre: 'Renault', icono: <SiRenault /> },
    { nombre: 'Citroën', icono: <SiCitroen /> },
    { nombre: 'Jeep', icono: <SiJeep /> },
    { nombre: 'Nissan', icono: <SiNissan /> },
    { nombre: 'Honda', icono: <SiHonda /> },
    { nombre: 'Hyundai', icono: <SiHyundai /> },
    { nombre: 'Kia', icono: <SiKia /> }
  ];

  return (
    <section id="marcas" style={{
      padding: '70px 24px',
      backgroundColor: '#0c0f16',
      borderBottom: '1px solid #1f2737',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Header Tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid #283344',
          padding: '5px 14px',
          borderRadius: '4px',
          color: '#94a3b8',
          fontFamily: 'var(--font-tech)',
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '15px'
        }}>
          <FaShieldAlt style={{ color: '#f97316' }} /> COMPATIBILIDAD TÉCNICA
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(26px, 4vw, 38px)',
          fontWeight: 800,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          margin: '0 0 12px 0'
        }}>
          ESPECIALISTAS EN LAS PRINCIPALES <span style={{ color: '#f97316' }}>MARCAS DEL PAÍS</span>
        </h3>

        <p style={{
          color: '#64748b',
          fontSize: '15px',
          maxWidth: '600px',
          margin: '0 auto 40px auto'
        }}>
          Contamos con la información técnica, torques de apriete y diagramas eléctricos específicos para cada fabricante.
        </p>

        {/* Metallic Badges Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {marcasTaller.map((marca, idx) => (
            <div
              key={idx}
              title={`Atención especializada en ${marca.nombre}`}
              style={{
                backgroundColor: 'rgba(18, 23, 33, 0.7)',
                border: '1px solid #232c3d',
                borderRadius: '6px',
                padding: '20px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#f97316';
                e.currentTarget.style.backgroundColor = '#1a2232';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.5), 0 0 12px rgba(249, 115, 22, 0.2)';
                const iconElem = e.currentTarget.querySelector('.brand-icon');
                if (iconElem) iconElem.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#232c3d';
                e.currentTarget.style.backgroundColor = 'rgba(18, 23, 33, 0.7)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                const iconElem = e.currentTarget.querySelector('.brand-icon');
                if (iconElem) iconElem.style.color = '#94a3b8';
              }}
            >
              <div
                className="brand-icon"
                style={{
                  fontSize: '40px',
                  color: '#94a3b8',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {marca.icono}
              </div>
              <span style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '13px',
                fontWeight: 700,
                color: '#cbd5e1',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                {marca.nombre}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Brands;
