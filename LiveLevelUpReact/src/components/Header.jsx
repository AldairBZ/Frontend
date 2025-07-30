import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import perfilImg from '../assets/imagenes-home/perfil/perfil.png';
import './Header.css';

export default function Header({ darkMode, toggleTheme }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const profileBtnRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Detectar la página activa basándose en la URL
  useEffect(() => {
    const path = location.pathname;
    if (path === '/home') {
      setActiveSection('home');
    } else if (path === '/home/salud-bienestar') {
      setActiveSection('salud');
    } else if (path === '/home/salud-planeta') {
      setActiveSection('planeta');
    } else if (path === '/home/desafios') {
      setActiveSection('desafios');
    } else if (path === '/home/comunidad') {
      setActiveSection('comunidad');
    } else if (path === '/home/blogs') {
      setActiveSection('blogs');
    } else {
      setActiveSection('home');
    }
  }, [location.pathname]);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menús al hacer clic fuera
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

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setShowMobileMenu(false);
  }, [navigate]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70;
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

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(prev => !prev);
  };

  const handleLogout = () => {
    // Lógica de logout aquí
    navigate('/login');
  };

  const handleNavClick = (sectionId) => {
    console.log('handleNavClick llamado con sectionId:', sectionId); // Test log
    
    if (sectionId === 'salud') {
      navigate('/home/salud-bienestar');
    } else if (sectionId === 'planeta') {
      navigate('/home/salud-planeta');
    } else if (sectionId === 'desafios') {
      navigate('/home/desafios');
    } else if (sectionId === 'comunidad') {
      console.log('Navegando a comunidad...'); // Test log
      navigate('/home/comunidad');
    } else if (sectionId === 'blogs') {
      navigate('/home/blogs');
    } else {
      scrollToSection(sectionId);
    }
    setShowMobileMenu(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo" onClick={() => navigate('/home')} style={{cursor: 'pointer'}}>
          <span>LifeLevelUp</span>
          {activeSection !== 'home' && (
            <div className="active-indicator" />
          )}
        </div>
        
        {/* Menú hamburguesa para móvil */}
        <div 
          className={`menuToggle ${showMobileMenu ? 'active' : ''}`}
          onClick={handleMobileMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`menu ${showMobileMenu ? 'active' : ''}`}>
          <li>
            <a 
              href="#salud" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('salud');
              }}
              className={activeSection === 'salud' ? 'active' : ''}
            >
              <span>🌱</span>
              Salud
            </a>
          </li>
          <li>
            <a 
              href="#planeta" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('planeta');
              }}
              className={activeSection === 'planeta' ? 'active' : ''}
            >
              <span>🌍</span>
              Planeta
            </a>
          </li>
          <li>
            <a 
              href="#desafios" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('desafios');
              }}
              className={activeSection === 'desafios' ? 'active' : ''}
            >
              <span>🏆</span>
              Desafíos
            </a>
          </li>
          <li>
            <a 
              href="#comunidad" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('comunidad');
              }}
              className={activeSection === 'comunidad' ? 'active' : ''}
            >
              <span>👥</span>
              Comunidad
            </a>
          </li>
          <li>
            <a 
              href="#blogs" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('blogs');
              }}
              className={activeSection === 'blogs' ? 'active' : ''}
            >
              <span>📝</span>
              Blogs
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
                onClick={() => {
                  navigate('/home/avatar/personalizar');
                  setShowProfileMenu(false);
                }}
              >
                <span>👤</span>
                Editar perfil
              </button>
              <button 
                className="profileMenuItem" 
                onClick={() => {
                  navigate('/home');
                  setShowProfileMenu(false);
                }}
              >
                <span>🏠</span>
                Inicio
              </button>
              <button 
                className="profileMenuItem" 
                onClick={() => {
                  navigate('/home/avatar');
                  setShowProfileMenu(false);
                }}
              >
                <span>🎨</span>
                Mi Avatar
              </button>
              <button 
                className="profileMenuItem logoutBtn" 
                onClick={handleLogout}
              >
                <span>🚪</span>
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
} 