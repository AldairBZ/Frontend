import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginTriangle from './pages/login/LoginTriangle';
import Home from './pages/home/Home';
import SaludPlaneta from './pages/home/saludplaneta/SaludPlaneta';
import SaludBienestar from './pages/home/saludibienestar/SaludBienestar';
import Desafios from './pages/home/desafios/Desafios';
import Comunidad from './pages/home/comunidad/Comunidad';
import PersonalizarAvatar from './pages/home/avatar/PersonalizarAvatar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginTriangle />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/salud-planeta" element={<SaludPlaneta />} />
        <Route path="/home/salud-bienestar" element={<SaludBienestar />} />
        <Route path="/home/desafios" element={<Desafios />} />
        <Route path="/home/comunidad" element={<Comunidad />} />
        <Route path="/home/avatar/personalizar" element={<PersonalizarAvatar />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}