import React, { useState } from 'react';

export default function Registro() {
  const [edad, setEdad] = useState(0);
  const [genero, setGenero] = useState('');

  const registrarUsuario = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de registro
    alert(`Avatar creado. Edad: ${edad}, Género: ${genero}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Crea tu avatar vital</h2>
      <form onSubmit={registrarUsuario}>
        <label className="block mb-2">Edad:</label>
        <input type="number" value={edad} onChange={e => setEdad(e.target.value)} className="input" required />
        <label className="block mt-4 mb-2">Género:</label>
        <select value={genero} onChange={e => setGenero(e.target.value)} className="input">
          <option value="">Selecciona género</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
        <button type="submit" className="btn mt-6">Crear Avatar</button>
      </form>
    </div>
  );
} 