import React, { useEffect, useState, useRef } from 'react';
import cometaAzul from '../../assets/svg/imagenes-login/cometa-azul.png';
import cometaRosa from '../../assets/svg/imagenes-login/cometa-rosa.png';
import naveRoja from '../../assets/svg/imagenes-login/nave-roja.png';
import './fondo-espacio-login.css';

const tipos = [
  { tipo: 'cometa', imagen: cometaAzul, brillo: '0 0 24px 8px #00bfff88' },
  { tipo: 'cometa', imagen: cometaRosa, brillo: '0 0 24px 8px #ff66cc88' },
];
const tipoNave = { tipo: 'nave', imagen: naveRoja, brillo: '0 0 24px 8px #ff174488' };

// Solo dos trayectorias diagonales: ↗️ y ↖️
const trayectoriasDiagonales = [
  { ini: { left: '-10%', top: '90%' }, fin: { left: '110%', top: '10%' }, rot: -45 }, // ↗️
  { ini: { left: '110%', top: '90%' }, fin: { left: '-10%', top: '10%' }, rot: -135 } // ↖️
];

function getTrayectoriaDiagonal() {
  const t = trayectoriasDiagonales[Math.floor(Math.random() * trayectoriasDiagonales.length)];
  return {
    inicio: t.ini,
    fin: t.fin,
    rotacion: t.rot
  };
}

function ElementoAnimadoEspacio({ tipo, imagen, brillo, onFinish }) {
  const datosAnim = useRef(getTrayectoriaDiagonal());
  const [estilo, setEstilo] = useState({});
  useEffect(() => {
    const { inicio, fin, rotacion } = datosAnim.current;
    setEstilo({
      position: 'fixed',
      ...inicio,
      width: tipo === 'nave' ? '38px' : '60px',
      height: 'auto',
      opacity: 0.25,
      filter: `brightness(1.2) drop-shadow(${brillo})`,
      zIndex: 1,
      pointerEvents: 'none',
      transform: `rotate(${rotacion}deg)`,
      transition: 'all 3.5s linear'
    });
    const timer1 = setTimeout(() => {
      setEstilo(est => ({ ...est, ...fin, opacity: 0.12 }));
    }, 50);
    const timer2 = setTimeout(onFinish, 3600);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [tipo, brillo, onFinish]);
  return <img src={imagen} alt={tipo} style={estilo} draggable={false} />;
}

export default function FondoEspacioLogin() {
  const [elementos, setElementos] = useState([]);
  useEffect(() => {
    let activo = true;
    function lanzarElemento() {
      if (!activo) return;
      // Controlar la cantidad máxima de elementos
      if (elementos.length < 2) {
        // 80% probabilidad de cometa, 20% de nave
        const esNave = Math.random() < 0.2;
        let elegido;
        if (esNave) {
          elegido = tipoNave;
        } else {
          elegido = tipos[Math.floor(Math.random() * tipos.length)];
        }
        setElementos(els => [
          ...els,
          {
            id: Math.random().toString(36).slice(2),
            ...elegido
          }
        ]);
      }
      // Cometas: menos frecuentes, nave: mucho menos frecuente
      const delay = Math.random() * 3500 + (Math.random() < 0.2 ? 4000 : 2500);
      setTimeout(lanzarElemento, delay);
    }
    lanzarElemento();
    return () => { activo = false; };
    // eslint-disable-next-line
  }, [elementos]);
  function quitarElemento(id) {
    setElementos(els => els.filter(e => e.id !== id));
  }
  return (
    <div className="fondo-espacio-login">
      {elementos.map((e) => (
        <ElementoAnimadoEspacio key={e.id} tipo={e.tipo} imagen={e.imagen} brillo={e.brillo} onFinish={() => quitarElemento(e.id)} />
      ))}
    </div>
  );
} 