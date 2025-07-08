import React from 'react';

export default function Home() {
  return (
    <>
      <header>
        {/* Aquí irá tu navbar */}
      </header>
      <main>
        <section className="text-center p-10">
          {/* Planeta girando (por ahora una imagen estática, luego la animamos) */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" alt="Planeta Tierra" width="200" style={{ borderRadius: '50%' }} />
          <br />
          {/* Botón para empezar */}
          <a href="/home" className="btn">¡Empezar ahora!</a>
        </section>
      </main>
      <footer>
        {/* Aquí puedes poner un pie de página si quieres */}
      </footer>
    </>
  );
} 