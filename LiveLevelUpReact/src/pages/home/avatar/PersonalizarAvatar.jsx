import React, { useState } from 'react';
import styles from '../Home.module.css';
import QuienesSomos from '../footer/equipo/QuienesSomos.jsx';
import Privacidad from '../footer/privacidad/Terminos.jsx';
import Referentes from '../footer/referentes/Referentes.jsx';
import MonigoteBase from './MonigoteBase.jsx';

export default function PersonalizarAvatar() {
  const [modalAbierto, setModalAbierto] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [altura, setAltura] = useState(1.70);
  const [horasSueno, setHorasSueno] = useState(8);

  return (
    <div className={styles.homeWrapper}>
      {/* Header igual que en Home */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>LifeLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li><a href="/home">Inicio</a></li>
            <li><a href="#">Salud</a></li>
            <li><a href="#">Planeta</a></li>
          </ul>
        </nav>
      </header>
      {/* Main vacío para personalización */}
      <main className={styles.main} style={{minHeight: 'calc(100vh - 60px - 48px)', marginTop: 10, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', position: 'relative', overflow: 'visible'}}>
        <div style={{position: 'relative', width: '40vw', minWidth: 300, maxWidth: 600, height: '60vh', minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: 24, boxShadow: '0 4px 32px #0002', margin: '-40px auto 0 auto', transition: 'transform 0.4s cubic-bezier(.4,1.6,.6,1)', transform: showOptions ? 'translateX(-340px)' : 'translateX(0)'}}>
          {/* Panel de información encima del panel principal */}
          <div style={{position: 'absolute', top: 20, left: '70%', transform: 'translateX(-50%)', background: '#8fc4ea', color: '#fff', borderRadius: 14, boxShadow: '0 2px 8px #0002', width: 240, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500, fontSize: 18, zIndex: 3}}>
            Información
          </div>
          {/* Monigote base pegado a la derecha */}
          <div style={{position: 'absolute', right: 300, bottom: 0, top: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', zIndex: 2, pointerEvents: 'none'}}>
            <MonigoteBase style={{height: '95%', maxHeight: 300, width: 'auto', marginRight: 8, marginBottom: 8}} />
          </div>
          {/* Panel vacío para personalización */}
          {/* Opciones (engranaje) */}
          <div style={{position: 'absolute', top: -22, right: -22, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0002', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, cursor: 'pointer'}} onClick={() => setShowOptions(v => !v)}>
            <span style={{fontSize: 26, color: '#5b9cc8'}}>⚙️</span>
          </div>
        </div>
        {/* Panel de opciones grande a la derecha */}
        <div style={{
          position: 'absolute',
          top: '60px',
          left: 'calc(50% - 10px)',
          height: '70vh',
          minHeight: 340,
          width: showOptions ? '48vw' : 0,
          maxWidth: 800,
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 4px 32px #0002',
          overflow: 'hidden',
          transition: 'width 0.6s cubic-bezier(.4,1.6,.6,1), opacity 0.6s cubic-bezier(.4,1.6,.6,1), transform 0.6s cubic-bezier(.4,1.6,.6,1)',
          opacity: showOptions ? 1 : 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          transform: showOptions ? 'translateX(0)' : 'translateX(100%)',
        }}>
          <form style={{width: '90%', maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 8, margin: '0 auto'}}>
            {/* Nombre */}
            <label style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Nombre:
              <input type="text" style={{maxWidth: 120, width: '100%', padding: 5, borderRadius: 6, border: '1px solid #bcd', fontSize: 13}} />
            </label>
            {/* Edad */}
            <label style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Edad:
              <input type="number" min={0} max={120} style={{width: 55, padding: 5, borderRadius: 6, border: '1px solid #bcd', fontSize: 13}} />
            </label>
            {/* Peso */}
            <label style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Peso:
              <input type="number" min={0} max={300} style={{width: 55, padding: 5, borderRadius: 6, border: '1px solid #bcd', fontSize: 13}} />
            </label>
            {/* Altura */}
            <label style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Altura:
              <input type="range" min={1} max={2.15} step={0.01} value={altura} onChange={e => setAltura(Number(e.target.value))} style={{flex: 1}} />
              <span style={{width: 30, textAlign: 'right', fontSize: 12}}>{altura.toFixed(2)}m</span>
            </label>
            {/* Género */}
            <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Género:
              <button type="button" style={{background: '#8fc4ea', color: '#fff', border: 'none', borderRadius: 6, padding: '5px 9px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer'}}>
                <span role="img" aria-label="masculino">♂️</span>
              </button>
              <button type="button" style={{background: '#f7a3c7', color: '#fff', border: 'none', borderRadius: 6, padding: '5px 9px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer'}}>
                <span role="img" aria-label="femenino">♀️</span>
              </button>
            </div>
            {/* Nivel de actividad física */}
            <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Nivel de actividad física:
              <button type="button" style={{background: '#e0e0e0', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Malo</button>
              <button type="button" style={{background: '#ffe680', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Neutral</button>
              <button type="button" style={{background: '#b6e6a0', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Bueno</button>
            </div>
            {/* Tipo de dieta */}
            <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Tipo de dieta:
              <button type="button" style={{background: '#e0e0e0', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Omnívora</button>
              <button type="button" style={{background: '#b6e6a0', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Vegetariana</button>
              <button type="button" style={{background: '#a0e6d6', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Vegana</button>
            </div>
            {/* Horas de sueño */}
            <label style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Horas de sueño:
              <input type="range" min={1} max={14} step={1} value={horasSueno} onChange={e => setHorasSueno(Number(e.target.value))} style={{flex: 1}} />
              <span style={{width: 30, textAlign: 'right', fontSize: 12}}>{horasSueno}h</span>
            </label>
            {/* Nivel de estrés */}
            <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Nivel de estrés:
              <button type="button" style={{background: '#b6e6a0', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Bajo</button>
              <button type="button" style={{background: '#ffe680', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Medio</button>
              <button type="button" style={{background: '#f7a3c7', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Alto</button>
            </div>
            {/* Consumo de sustancias */}
            <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Consumo de sustancias:
              <button type="button" style={{background: '#b6e6a0', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Ninguno</button>
              <button type="button" style={{background: '#e0e0e0', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Poco</button>
              <button type="button" style={{background: '#ffe680', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Habitual</button>
              <button type="button" style={{background: '#f7a3c7', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Mucho</button>
            </div>
            {/* Estado de ánimo general */}
            <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Estado de ánimo general:
              <button type="button" style={{background: '#b6e6a0', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Bajo</button>
              <button type="button" style={{background: '#ffe680', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Neutro</button>
              <button type="button" style={{background: '#8fc4ea', border: 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer'}}>Alto</button>
            </div>
          </form>
          {/* Botón Guardar abajo a la derecha */}
          <div style={{position: 'absolute', bottom: 12, right: 32, zIndex: 4}}>
            <button type="button" style={{background: '#3498db', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 22px', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 2px 8px #0001', cursor: 'pointer'}}>
              <span role="img" aria-label="imprimir" style={{fontSize: 18}}>🖨️</span>
              Guardar
            </button>
          </div>
        </div>
      </main>
      {/* Footer igual que en Home */}
      <footer className={styles.footer}>
        <div className={styles['footer-container']}>
          <div className={styles['footer-col']}>
            <h3>Uso de datos y privacidad</h3>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('privacidad');}}>Política de privacidad</a></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h3>Webs de confianza</h3>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('referentes');}}>Referentes</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h3>Quiénes somos</h3>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('equipo');}}>Equipo</a></li>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('historia');}}>Historia</a></li>
            </ul>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
        </div>
      </footer>
      {/* Modal para mostrar los componentes */}
      {modalAbierto && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.45)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
          onClick={() => setModalAbierto(null)}
        >
          <div style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 32px #0003',
            padding: 0,
            maxWidth: 900,
            width: '95vw',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
          }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalAbierto(null)}
              style={{
                position: 'absolute',
                top: 12,
                right: 16,
                background: '#5b9cc8',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '6px 16px',
                fontWeight: 600,
                fontSize: 18,
                cursor: 'pointer',
                zIndex: 2
              }}
            >Cerrar ✕</button>
            {modalAbierto === 'equipo' && <QuienesSomos />}
            {modalAbierto === 'privacidad' && <Privacidad onClose={() => setModalAbierto(null)} />}
            {modalAbierto === 'referentes' && <Referentes />}
            {modalAbierto === 'historia' && (
              <div style={{padding: 48, minHeight: 120, minWidth: 320}}>
                <h1 style={{fontSize: 28, marginBottom: 24, color: '#232e43'}}>
                  Historia
                </h1>
                <div style={{fontSize: 18, color: '#232e43', lineHeight: 1.6}}>
                  <p>🧬 <b>Nuestra Historia</b></p>
                  <p>Todo empezó con una simple pregunta:<br/>
                  ¿Y si nuestras decisiones diarias pudieran salvarnos… y salvar al planeta?</p>
                  <p>LifeLevelUp nació como un proyecto que une tecnología, salud y conciencia colectiva. Queríamos algo más que una app informativa: queríamos una experiencia que te hiciera ver, sentir y actuar.</p>
                  <p>Nos dimos cuenta de que muchas plataformas hablan de bienestar o sostenibilidad… pero pocas conectan ambas cosas de forma visual, educativa y accesible para todos.</p>
                  <p>Así nació LifeLevelUp.<br/>
                  Un espacio donde tu avatar evoluciona contigo, donde tus decisiones tienen consecuencias, y donde cada cambio cuenta —no solo para ti, sino para todos.</p>
                  <p>Porque creemos que el cambio empieza en lo pequeño. En lo personal. En lo cotidiano.<br/>
                  Y si muchas personas lo hacen a la vez... el mundo también mejora.</p>
                  <p style={{marginTop: 32}}>
                  Somos un equipo de jóvenes diseñadores, desarrolladores y soñadores comprometidos con el futuro.<br/>
                  Y sí, también usamos LifeLevelUp cada día.<br/>
                  — El equipo de LifeLevelUp</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 