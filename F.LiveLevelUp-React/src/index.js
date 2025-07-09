import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages/login/LoginSidePanel.css';
import LoginSidePanel from './pages/login/LoginSidePanel';
import LoginTriangle from './pages/login/LoginTriangle';
import Login from './pages/Login';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginTriangle />} />
      <Route path="/bosque" element={<Login />} />
      {/* Puedes agregar más rutas aquí si lo deseas */}
    </Routes>
  </BrowserRouter>
); 