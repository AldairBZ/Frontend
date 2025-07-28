import React, { useState } from 'react';

export default function Avatar() {
  const [avatarImg] = useState('');
  const [esperanzaVida] = useState(0);
  const [estadoFisico] = useState('');

  return (
    <div className="p-6" style={{ minHeight: '420px', paddingBottom: '48px' }}>
      <h2 className="text-2xl mb-4">Tu Avatar Vital</h2>
      <img src={avatarImg} alt="Avatar" className="mx-auto mb-4" />
      <p><strong>Esperanza de vida:</strong> {esperanzaVida} años</p>
      <p><strong>Estado físico:</strong> {estadoFisico}</p>
      <a href="/habitos" className="btn mt-6">Modificar Hábitos</a>
    </div>
  );
} 