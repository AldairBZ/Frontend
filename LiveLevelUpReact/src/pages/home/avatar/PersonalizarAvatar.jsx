import React, { useState } from 'react';
import styles from '../Home.module.css';
import QuienesSomos from '../footer/equipo/QuienesSomos.jsx';
import Privacidad from '../footer/privacidad/Terminos.jsx';
import Referentes from '../footer/referentes/Referentes.jsx';
import MonigoteBase from './MonigoteBase.jsx';

export default function PersonalizarAvatar() {
  // Estados temporales (formulario)
  const [modalAbierto, setModalAbierto] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [altura, setAltura] = useState(1.70);
  const [horasSueno, setHorasSueno] = useState(8);
  const [genero, setGenero] = useState('');
  const [actividad, setActividad] = useState('');
  const [dieta, setDieta] = useState('');
  const [estres, setEstres] = useState('');
  const [consumo, setConsumo] = useState('');
  const [animo, setAnimo] = useState('');
  const [edad, setEdad] = useState(18);
  const [peso, setPeso] = useState(70);
  const [nombre, setNombre] = useState('');
  const [popup, setPopup] = useState('');
  const [armarioAbierto, setArmarioAbierto] = useState(false);

  // Estados guardados (panel de información)
  const [savedData, setSavedData] = useState({
    nombre: '',
    edad: 18,
    peso: 70,
    altura: 1.70,
    genero: '',
    actividad: '',
    dieta: '',
    horasSueno: 8,
    estres: '',
    consumo: '',
    animo: '',
  });

  // Estilos para transición del armario
  const armarioWidth = 240;

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
          {/* Botón de armario dentro del panel blanco, arriba a la izquierda */}
          <div style={{
            position: 'absolute',
            top: 14,
            left: 14,
            zIndex: 10,
          }}>
            <button
              type="button"
              style={{
                background: '#5b9cc8',
                border: 'none',
                borderRadius: '50%',
                width: 52,
                height: 52,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px #0002',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
                fontSize: 24,
                padding: 0,
              }}
              aria-label="Abrir armario"
              onClick={() => setArmarioAbierto(true)}
            >
              {/* Icono de armario SVG proporcionado */}
              <svg fill="#000" viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10.551v-.678A4.005 4.005 0 0 0 16 6c0-2.206-1.794-4-4-4S8 3.794 8 6h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2a1 1 0 0 0-1 1v1.551l-8.665 7.702A1.001 1.001 0 0 0 3 20h18a1.001 1.001 0 0 0 .664-1.748L13 10.551zM5.63 18 12 12.338 18.37 18H5.63z"></path>
              </svg>
            </button>
          </div>
          {/* Panel de información encima del panel principal */}
          <div style={{position: 'absolute', top: 20, left: '70%', transform: 'translateX(-50%)', background: '#8fc4ea', color: '#fff', borderRadius: 14, boxShadow: '0 2px 8px #0002', width: 240, height: 280, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', fontWeight: 500, fontSize: 15, zIndex: 3, padding: '22px 18px 18px 18px', gap: 6}}>
            <div style={{fontSize: 18, fontWeight: 700, marginBottom: 10}}>Información</div>
            <div style={{lineHeight: 1.5}}>
              <div><b>Nombre:</b> {savedData.nombre || <span style={{opacity: 0.6}}>—</span>}</div>
              <div><b>Edad:</b> {savedData.edad ? savedData.edad + ' años' : <span style={{opacity: 0.6}}>—</span>}</div>
              <div><b>Peso:</b> {savedData.peso ? savedData.peso + ' kg' : <span style={{opacity: 0.6}}>—</span>}</div>
              <div><b>Altura:</b> {savedData.altura ? savedData.altura.toFixed(2) + ' m' : <span style={{opacity: 0.6}}>—</span>}</div>
              <div><b>Género:</b> {savedData.genero ? (savedData.genero === 'masculino' ? 'Masculino ♂️' : 'Femenino ♀️') : <span style={{opacity: 0.6}}>—</span>}</div>
              <div><b>Actividad física:</b> {savedData.actividad ? (savedData.actividad.charAt(0).toUpperCase() + savedData.actividad.slice(1)) : <span style={{opacity: 0.6}}>—</span>}</div>
              <div><b>Dieta:</b> {savedData.dieta ? (savedData.dieta.charAt(0).toUpperCase() + savedData.dieta.slice(1)) : <span style={{opacity: 0.6}}>—</span>}</div>
              <div><b>Horas de sueño:</b> {savedData.horasSueno ? savedData.horasSueno + ' h' : <span style={{opacity: 0.6}}>—</span>}</div>
              <div><b>Estrés:</b> {savedData.estres ? (savedData.estres.charAt(0).toUpperCase() + savedData.estres.slice(1)) : <span style={{opacity: 0.6}}>—</span>}</div>
              <div><b>Consumo:</b> {savedData.consumo ? (savedData.consumo.charAt(0).toUpperCase() + savedData.consumo.slice(1)) : <span style={{opacity: 0.6}}>—</span>}</div>
              <div><b>Ánimo:</b> {savedData.animo ? (savedData.animo.charAt(0).toUpperCase() + savedData.animo.slice(1)) : <span style={{opacity: 0.6}}>—</span>}</div>
            </div>
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
              <input type="text" maxLength={20} value={nombre} onChange={e => setNombre(e.target.value)} style={{maxWidth: 120, width: '100%', padding: 5, borderRadius: 6, border: '1px solid #bcd', fontSize: 13}} />
            </label>
            {/* Edad */}
            <label style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Edad:
              <input type="number" min={5} max={100} value={edad === '' ? '' : edad} onChange={e => {
                const val = e.target.value;
                if (val === '') setEdad('');
                else setEdad(Number(val));
              }} style={{width: 55, padding: 5, borderRadius: 6, border: '1px solid #bcd', fontSize: 13}} />
            </label>
            {/* Peso */}
            <label style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Peso:
              <input type="number" min={10} max={400} value={peso === '' ? '' : peso} onChange={e => {
                const val = e.target.value;
                if (val === '') setPeso('');
                else setPeso(Number(val));
              }} style={{width: 55, padding: 5, borderRadius: 6, border: '1px solid #bcd', fontSize: 13}} />
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
              <button type="button" onClick={() => setGenero('masculino')} style={{background: '#8fc4ea', color: '#fff', border: genero === 'masculino' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 9px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', boxShadow: genero === 'masculino' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>
                <span role="img" aria-label="masculino">♂️</span>
              </button>
              <button type="button" onClick={() => setGenero('femenino')} style={{background: '#f7a3c7', color: '#fff', border: genero === 'femenino' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 9px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', boxShadow: genero === 'femenino' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>
                <span role="img" aria-label="femenino">♀️</span>
              </button>
            </div>
            {/* Nivel de actividad física */}
            <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Nivel de actividad física:
              <button type="button" onClick={() => setActividad('malo')} style={{background: '#e0e0e0', border: actividad === 'malo' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: actividad === 'malo' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Malo</button>
              <button type="button" onClick={() => setActividad('neutral')} style={{background: '#ffe680', border: actividad === 'neutral' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: actividad === 'neutral' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Neutral</button>
              <button type="button" onClick={() => setActividad('bueno')} style={{background: '#b6e6a0', border: actividad === 'bueno' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: actividad === 'bueno' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Bueno</button>
            </div>
            {/* Tipo de dieta */}
            <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Tipo de dieta:
              <button type="button" onClick={() => setDieta('omnivora')} style={{background: '#e0e0e0', border: dieta === 'omnivora' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: dieta === 'omnivora' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Omnívora</button>
              <button type="button" onClick={() => setDieta('vegetariana')} style={{background: '#b6e6a0', border: dieta === 'vegetariana' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: dieta === 'vegetariana' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Vegetariana</button>
              <button type="button" onClick={() => setDieta('vegana')} style={{background: '#a0e6d6', border: dieta === 'vegana' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: dieta === 'vegana' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Vegana</button>
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
              <button type="button" onClick={() => setEstres('bajo')} style={{background: '#b6e6a0', border: estres === 'bajo' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: estres === 'bajo' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Bajo</button>
              <button type="button" onClick={() => setEstres('medio')} style={{background: '#ffe680', border: estres === 'medio' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: estres === 'medio' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Medio</button>
              <button type="button" onClick={() => setEstres('alto')} style={{background: '#f7a3c7', border: estres === 'alto' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: estres === 'alto' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Alto</button>
            </div>
            {/* Consumo de sustancias */}
            <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Consumo de sustancias:
              <button type="button" onClick={() => setConsumo('ninguno')} style={{background: '#b6e6a0', border: consumo === 'ninguno' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: consumo === 'ninguno' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Ninguno</button>
              <button type="button" onClick={() => setConsumo('poco')} style={{background: '#e0e0e0', border: consumo === 'poco' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: consumo === 'poco' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Poco</button>
              <button type="button" onClick={() => setConsumo('habitual')} style={{background: '#ffe680', border: consumo === 'habitual' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: consumo === 'habitual' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Habitual</button>
              <button type="button" onClick={() => setConsumo('mucho')} style={{background: '#f7a3c7', border: consumo === 'mucho' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: consumo === 'mucho' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Mucho</button>
            </div>
            {/* Estado de ánimo general */}
            <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 13}}>
              Estado de ánimo general:
              <button type="button" onClick={() => setAnimo('bajo')} style={{background: '#b6e6a0', border: animo === 'bajo' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: animo === 'bajo' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Bajo</button>
              <button type="button" onClick={() => setAnimo('neutro')} style={{background: '#ffe680', border: animo === 'neutro' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: animo === 'neutro' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Neutro</button>
              <button type="button" onClick={() => setAnimo('alto')} style={{background: '#8fc4ea', border: animo === 'alto' ? '2px solid #222' : 'none', borderRadius: 6, padding: '5px 7px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: animo === 'alto' ? '0 0 8px 2px #222' : 'none', transition: 'box-shadow 0.2s, border 0.2s'}}>Alto</button>
            </div>
          </form>
          {/* Botón Guardar abajo a la derecha */}
          <div style={{position: 'absolute', bottom: 12, right: 32, zIndex: 4}}>
            <button
              type="button"
              style={{background: '#3498db', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 22px', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 2px 8px #0001', cursor: 'pointer'}}
              onClick={() => {
                if (nombre.length > 20) {
                  setPopup('El nombre no puede tener más de 20 caracteres.');
                  return;
                }
                if (edad === '' || isNaN(edad)) {
                  setPopup('La edad no puede estar vacía.');
                  return;
                }
                if (edad > 100) {
                  setPopup('La edad no puede ser mayor de 100 años.');
                  return;
                }
                if (edad < 5) {
                  setPopup('La edad no puede ser menor de 5 años.');
                  return;
                }
                if (peso === '' || isNaN(peso)) {
                  setPopup('El peso no puede estar vacío.');
                  return;
                }
                if (peso > 400) {
                  setPopup('El peso no puede ser mayor de 400 kg.');
                  return;
                }
                if (peso < 10) {
                  setPopup('El peso no puede ser menor de 10 kg.');
                  return;
                }
                // Validación de campos obligatorios tipo botón
                const camposFaltantes = [];
                if (!genero) camposFaltantes.push('género');
                if (!actividad) camposFaltantes.push('actividad física');
                if (!dieta) camposFaltantes.push('dieta');
                if (!estres) camposFaltantes.push('estrés');
                if (!consumo) camposFaltantes.push('consumo');
                if (!animo) camposFaltantes.push('ánimo');
                if (camposFaltantes.length > 0) {
                  setPopup('Falta seleccionar: ' + camposFaltantes.join(', '));
                  return;
                }
                setPopup('');
                setSavedData({
                  nombre,
                  edad,
                  peso,
                  altura,
                  genero,
                  actividad,
                  dieta,
                  horasSueno,
                  estres,
                  consumo,
                  animo,
                });
              }}
            >
              <span role="img" aria-label="imprimir" style={{fontSize: 18}}>🖨️</span>
              Guardar
            </button>
          </div>
          {/* Pop-up de error */}
          {popup && (
            <div style={{position: 'absolute', bottom: 70, right: 32, background: '#fff', color: '#232e43', border: '1.5px solid #3498db', borderRadius: 8, padding: '10px 18px', fontWeight: 600, fontSize: 14, boxShadow: '0 2px 12px #0002', zIndex: 10}}>
              {popup}
              <button onClick={() => setPopup('')} style={{marginLeft: 16, background: 'none', border: 'none', color: '#3498db', fontWeight: 700, fontSize: 16, cursor: 'pointer'}}>✕</button>
            </div>
          )}
        </div>
      </main>
      {/* Panel de armario lateral */}
      {armarioAbierto && (
        <>
          {/* Fondo semitransparente tipo modal */}
          <div
            onClick={() => setArmarioAbierto(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.18)',
              zIndex: 1999,
              transition: 'background 0.3s',
            }}
          />
          {/* Panel armario con transición */}
          <div
            style={{
              position: 'fixed',
              top: '8vh',
              left: 0,
              width: armarioWidth,
              height: '84vh',
              background: 'linear-gradient(120deg, #deb887 80%, #a0522d 100%)',
              boxShadow: '4px 0 24px #0004',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              borderRadius: '0 18px 18px 0',
              transition: 'transform 0.4s cubic-bezier(.4,1.6,.6,1)',
              transform: armarioAbierto ? 'translateX(0)' : `translateX(-${armarioWidth}px)`,
              overflow: 'hidden',
            }}
          >
            {/* Cabecera del armario */}
            <div style={{
              width: '100%',
              padding: '18px 18px 8px 18px',
              background: 'rgba(160,82,45,0.12)',
              borderBottom: '2px solid #a0522d',
              display: 'flex',
              alignItems: 'center',
              gap: 110,
            }}>
              <span style={{fontWeight: 700, fontSize: 18, color: '#7b3f00', letterSpacing: 1}}>Armario</span>
              <button
                onClick={() => setArmarioAbierto(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#7b3f00',
                  fontWeight: 700,
                  fontSize: 22,
                  cursor: 'pointer',
                  lineHeight: 1,
                }}
                aria-label="Cerrar armario"
              >✕</button>
            </div>
            {/* Botones de categorías de ropa arriba */}
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 12px 0 12px',
              gap: 8,
            }}>
              {['Cabeza', 'Torso', 'Piernas'].map((cat, idx) => (
                <button
                  key={cat}
                  style={{
                    background: 'rgba(255,255,255,0.85)',
                    border: '1.5px solid #bfa16b',
                    borderRadius: 7,
                    padding: '5px 10px',
                    fontWeight: 600,
                    fontSize: 13,
                    color: '#7b3f00',
                    boxShadow: '0 1px 4px #0001',
                    cursor: 'pointer',
                    transition: 'background 0.2s, border 0.2s',
                    ...(cat === 'Piernas' ? { marginRight: 18 } : {}),
                  }}
                >{cat}</button>
              ))}
            </div>
            {/* Botón de zapatos abajo del todo */}
            <div style={{
              width: '100%',
              position: 'absolute',
              bottom: 18,
              left: 0,
              display: 'flex',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
              <button
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  border: '1.5px solid #bfa16b',
                  borderRadius: 7,
                  padding: '5px 18px',
                  fontWeight: 600,
                  fontSize: 13,
                  color: '#7b3f00',
                  boxShadow: '0 1px 4px #0001',
                  cursor: 'pointer',
                  transition: 'background 0.2s, border 0.2s',
                  pointerEvents: 'auto',
                }}
              >Zapatos</button>
            </div>
          </div>
        </>
      )}
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