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
              Transforma tus hábitos, transforma el mundo. Únete a la revolución sostenible.
            </p>
            <div className="footer-emojis">
              <span>🏆</span>
              <span>🌱</span>
              <span>💚</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-col">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="/home">Inicio</a></li>
              <li><a href="/home/salud-bienestar">Salud y Bienestar</a></li>
              <li><a href="/home/salud-planeta">Salud del Planeta</a></li>
              <li><a href="/home/desafios">Desafíos</a></li>
              <li><a href="/home/comunidad">Comunidad</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#guia">Guía de desafíos</a></li>
              <li><a href="#consejos">Consejos para completar</a></li>
              <li><a href="#recompensas">Sistema de recompensas</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Información legal y equipo */}
          <div className="footer-col">
            <h4>Información</h4>
            <ul>
              <li>
                <button 
                  className="footer-link-button"
                  onClick={() => handleModalOpen('equipo')}
                >
                  👥 Quiénes somos
                </button>
              </li>
              <li>
                <button 
                  className="footer-link-button"
                  onClick={() => handleModalOpen('privacidad')}
                >
                  🔒 Términos y Privacidad
                </button>
              </li>
              <li>
                <button 
                  className="footer-link-button"
                  onClick={() => handleModalOpen('referentes')}
                >
                  🌐 Webs de confianza
                </button>
              </li>
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
                <span>🏆</span>
                +34 666 DESAFIOS
              </p>
              <p>
                <span>🌐</span>
                España, Europa
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 LifeLevelUp. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Modales */}
      {modalAbierto && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalClose}>
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