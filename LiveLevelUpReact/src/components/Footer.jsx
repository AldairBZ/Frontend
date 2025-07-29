import React, { useState } from 'react';
import QuienesSomos from '../pages/home/footer/equipo/QuienesSomos.jsx';
import Privacidad from '../pages/home/footer/privacidad/Terminos.jsx';
import Referentes from '../pages/home/footer/referentes/Referentes.jsx';
import './Footer.css';

export default function Footer() {
  const [modalAbierto, setModalAbierto] = useState(null);

  const handleModalOpen = (modalType) => {
    setModalAbierto(modalType);
  };

  const handleModalClose = () => {
    setModalAbierto(null);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Columna principal */}
          <div className="footer-col">
                                    <h3>LifeLevelUp</h3>
            <p>
              Transformamos hábitos diarios en impacto positivo para ti y el planeta. 
              Únete a nuestra comunidad de más de 10,000 personas que ya están creando 
              un futuro más sostenible.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" title="Instagram">
                📸
              </a>
              <a href="#" className="footer-social-link" title="Twitter">
                🐦
              </a>
              <a href="#" className="footer-social-link" title="LinkedIn">
                💼
              </a>
              <a href="#" className="footer-social-link" title="YouTube">
                📺
              </a>
              <a href="#" className="footer-social-link" title="Discord">
                🎮
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#home">🏠 Inicio</a></li>
              <li><a href="#salud">🌱 Salud y Bienestar</a></li>
              <li><a href="#planeta">🌍 Salud del Planeta</a></li>
              <li><a href="#desafios">🏆 Desafíos Semanales</a></li>
              <li><a href="#comunidad">👥 Comunidad</a></li>
              <li><a href="#avatar">🎨 Personalizar Avatar</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li>
                <a href="#" onClick={e => {e.preventDefault(); handleModalOpen('equipo');}}>
                  👥 Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" onClick={e => {e.preventDefault(); handleModalOpen('referentes');}}>
                  🔬 Referentes científicos
                </a>
              </li>
              <li>
                <a href="#" onClick={e => {e.preventDefault(); handleModalOpen('privacidad');}}>
                  🔒 Política de privacidad
                </a>
              </li>
              <li><a href="#guia">📚 Guía de hábitos</a></li>
              <li><a href="#calculadora">🧮 Calculadora de impacto</a></li>
              <li><a href="#blog">📝 Blog sostenible</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h4>Contacto</h4>
            <div className="footer-contact">
              <p>
                <span>📧</span>
                hola@lifelevelup.com
              </p>
              <p>
                <span>🌱</span>
                +34 666 PLANETA
              </p>
              <p>
                <span>🌍</span>
                España, Europa
              </p>
              <p>
                <span>⏰</span>
                Lun-Vie 9:00-18:00
              </p>
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Newsletter</h4>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  style={{
                    padding: '0.5rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '0.8rem',
                    flex: 1
                  }}
                />
                <button 
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                    border: 'none',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  📧
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className="footer-bottom">
          <p>
            &copy; 2025 LifeLevelUp. Todos los derechos reservados. 
            <span style={{ marginLeft: '1rem', opacity: 0.7 }}>
              🌍 Juntos creamos un futuro más verde y saludable.
            </span>
          </p>
        </div>
      </footer>

      {/* Modal para mostrar los componentes */}
      {modalAbierto && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={handleModalClose}
            >
              ✕
            </button>
            {modalAbierto === 'equipo' && <QuienesSomos />}
            {modalAbierto === 'privacidad' && <Privacidad onClose={handleModalClose} />}
            {modalAbierto === 'referentes' && <Referentes />}
          </div>
        </div>
      )}
    </>
  );
} 