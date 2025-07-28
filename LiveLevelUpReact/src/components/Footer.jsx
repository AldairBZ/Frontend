import React, { useState } from 'react';
import QuienesSomos from '../pages/home/footer/equipo/QuienesSomos.jsx';
import Privacidad from '../pages/home/footer/privacidad/Terminos.jsx';
import Referentes from '../pages/home/footer/referentes/Referentes.jsx';
import './Footer.css';

export default function Footer() {
  const [modalAbierto, setModalAbierto] = useState(null);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>LifeLevelUp</h3>
            <p>
              Concienciación ambiental y bienestar personal. Transformando hábitos en impacto positivo.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">🌱</a>
              <a href="#" className="footer-social-link">🌍</a>
              <a href="#" className="footer-social-link">💚</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#salud">Salud y Bienestar</a></li>
              <li><a href="#planeta">Salud del Planeta</a></li>
              <li><a href="#avatar">Personalizar Avatar</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('equipo');}}>Sobre nosotros</a></li>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('referentes');}}>Referentes científicos</a></li>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('privacidad');}}>Política de privacidad</a></li>
              <li><a href="#">Guía de hábitos</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <div className="footer-contact">
              <p>
                <span>📧</span> hola@lifelevelup.com
              </p>
              <p>
                <span>🌱</span> +34 666 PLANETA
              </p>
              <p>
                <span>🌍</span> España, Europa
              </p>
            </div>  
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 LifeLevelUp. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Modal para mostrar los componentes */}
      {modalAbierto && (
        <div className="modal-overlay" onClick={() => setModalAbierto(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setModalAbierto(null)}
            >
              Cerrar ✕
            </button>
            {modalAbierto === 'equipo' && <QuienesSomos />}
            {modalAbierto === 'privacidad' && <Privacidad onClose={() => setModalAbierto(null)} />}
            {modalAbierto === 'referentes' && <Referentes />}
          </div>
        </div>
      )}
    </>
  );
} 