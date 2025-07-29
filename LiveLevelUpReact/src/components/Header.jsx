import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import perfilImg from '../assets/imagenes-home/perfil/perfil.png';
import './Header.css';

export default function Header({ darkMode, toggleTheme }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeSection] = useState('salud');
  const profileBtnRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileBtnRef.current && !profileBtnRef.current.contains(event.target) &&
          menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProfileClick = () => {
    setShowProfileMenu(prev => !prev);
  };

  const handleLogout = () => {
    // Lógica de logout aquí
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <span>LifeLevelUp</span>
          {activeSection !== 'home' && (
            <div className="active-indicator" />
          )}
        </div>
        
        <ul className="menu">
          <li>
            <a 
              href="#salud" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('salud');
              }}
              className={activeSection === 'salud' ? 'active' : ''}
            >
              Salud
            </a>
          </li>
          <li>
            <a 
              href="#planeta" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('planeta');
              }}
              className={activeSection === 'planeta' ? 'active' : ''}
            >
              Planeta
            </a>
          </li>
        </ul>
        
        <div className="actions">
          
          {/* Toggle de tema */}
          <div className="options">
            <label className="switchLabel">
              <input 
                type="checkbox" 
                checked={darkMode} 
                onChange={toggleTheme} 
                className="switchInput" 
              />
              <span className="switchSlider"></span>
              <span className="switchText">{darkMode ? '🌙' : '☀️'}</span>
            </label>
          </div>
          
          {/* Botón de perfil */}
          <button
            ref={profileBtnRef}
            className="profile-btn"
            title="Usuario"
            onClick={handleProfileClick}
          >
            <img
              src={perfilImg}
              alt="Perfil"
              className="profile-img"
            />
          </button>
          
          {showProfileMenu && (
            <div ref={menuRef} className={`profileMenu ${darkMode ? 'profileMenuDark' : ''}`}>
              <button 
                className="profileMenuItem" 
                onClick={() => navigate('/home/avatar/personalizar')}
              >
                Editar perfil
              </button>
              <button 
                className="profileMenuItem logoutBtn" 
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
} 