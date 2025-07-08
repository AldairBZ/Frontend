import React, { useEffect, useState } from 'react';

export default function BarraNavegacion({ idioma, setIdioma }) {
  const [textos, setTextos] = useState({});

  useEffect(() => {
    fetch(`/src/i18n/${idioma}.json`)
      .then(res => res.json())
      .then(setTextos);
  }, [idioma]);

  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">LiveLevelUp</div>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">{textos.inicio || 'Inicio'}</a></li>
        <li><a href="/avatar" className="hover:underline">{textos.mi_vida || 'Mi Vida'}</a></li>
        <li><a href="/mundo" className="hover:underline">{textos.mundo || 'Mundo'}</a></li>
      </ul>
      <div className="flex items-center space-x-2">
        <select value={idioma} onChange={e => setIdioma(e.target.value)} className="text-black rounded px-2 py-1">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <button className="bg-yellow-400 text-black px-4 py-1 rounded font-bold ml-2">{textos.login || 'Login'}</button>
      </div>
    </nav>
  );
} 