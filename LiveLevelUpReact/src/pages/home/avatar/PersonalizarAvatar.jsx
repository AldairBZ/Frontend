import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import Layout from '../../../components/Layout.jsx';
import styles from './Avatar.module.css';
import MonigoteBase from './MonigoteBase.jsx';

export default function PersonalizarAvatar() {
  const { darkMode } = useTheme();
  const [showConfig, setShowConfig] = useState(false);
  const [activeCategory, setActiveCategory] = useState('cabeza');
  const [draggedItem, setDraggedItem] = useState(null);
  const [equippedClothing, setEquippedClothing] = useState({
    cabeza: null,
    torso: null,
    piernas: null,
    pies: null
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Estados del formulario
  const [formData, setFormData] = useState({
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
    animo: ''
  });

  // Datos guardados (panel de información)
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
    animo: ''
  });

  // Ropa disponible por categoría
  const clothingItems = {
    cabeza: [
      { id: 'gorra', name: 'Gorra', icon: '🧢' },
      { id: 'sombrero', name: 'Sombrero', icon: '🎩' },
      { id: 'gorro', name: 'Gorro', icon: '🎧' },
      { id: 'diadema', name: 'Diadema', icon: '👑' }
    ],
    torso: [
      { id: 'camiseta', name: 'Camiseta', icon: '👕' },
      { id: 'camisa', name: 'Camisa', icon: '👔' },
      { id: 'sudadera', name: 'Sudadera', icon: '🧥' },
      { id: 'vestido', name: 'Vestido', icon: '👗' }
    ],
    piernas: [
      { id: 'pantalon', name: 'Pantalón', icon: '👖' },
      { id: 'falda', name: 'Falda', icon: '👘' },
      { id: 'shorts', name: 'Shorts', icon: '🩳' },
      { id: 'leggings', name: 'Leggings', icon: '🧦' }
    ],
    pies: [
      { id: 'zapatos', name: 'Zapatos', icon: '👟' },
      { id: 'botas', name: 'Botas', icon: '👢' },
      { id: 'sandalias', name: 'Sandalias', icon: '🩴' },
      { id: 'tenis', name: 'Tenis', icon: '👞' }
    ]
  };

  // Guardar datos en localStorage
  useEffect(() => {
    const savedAvatar = localStorage.getItem('avatarData');
    if (savedAvatar) {
      const parsed = JSON.parse(savedAvatar);
      setSavedData(parsed);
      setFormData(parsed);
    }

    const savedClothing = localStorage.getItem('avatarClothing');
    if (savedClothing) {
      setEquippedClothing(JSON.parse(savedClothing));
    }
  }, []);

  const handleDragStart = (e, item, category) => {
    setDraggedItem({ ...item, category });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropZone) => {
    e.preventDefault();
    if (draggedItem) {
      const newEquippedClothing = { ...equippedClothing };
      newEquippedClothing[draggedItem.category] = draggedItem;
      setEquippedClothing(newEquippedClothing);
      localStorage.setItem('avatarClothing', JSON.stringify(newEquippedClothing));
      setDraggedItem(null);
    }
  };

  const handleSaveData = () => {
    // Validaciones
    if (formData.nombre.length > 20) {
      setErrorMessage('El nombre no puede tener más de 20 caracteres.');
      return;
    }
    if (formData.edad < 5 || formData.edad > 100) {
      setErrorMessage('La edad debe estar entre 5 y 100 años.');
      return;
    }
    if (formData.peso < 10 || formData.peso > 400) {
      setErrorMessage('El peso debe estar entre 10 y 400 kg.');
      return;
    }

    const camposFaltantes = [];
    if (!formData.genero) camposFaltantes.push('género');
    if (!formData.actividad) camposFaltantes.push('actividad física');
    if (!formData.dieta) camposFaltantes.push('dieta');
    if (!formData.estres) camposFaltantes.push('estrés');
    if (!formData.consumo) camposFaltantes.push('consumo');
    if (!formData.animo) camposFaltantes.push('ánimo');

    if (camposFaltantes.length > 0) {
      setErrorMessage('Falta seleccionar: ' + camposFaltantes.join(', '));
      return;
    }

    setErrorMessage('');
    setSavedData(formData);
    localStorage.setItem('avatarData', JSON.stringify(formData));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const removeClothing = (category) => {
    const newEquippedClothing = { ...equippedClothing };
    newEquippedClothing[category] = null;
    setEquippedClothing(newEquippedClothing);
    localStorage.setItem('avatarClothing', JSON.stringify(newEquippedClothing));
  };

  return (
    <Layout>
      <div className={styles.avatarWrapper}>
        {/* ===== HERO SECTION MODERNO ===== */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <div className={styles.heroParticles}></div>
            <div className={styles.heroGradient}></div>
          </div>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span>👤</span>
                Personalizable
              </div>
              <h1 className={styles.heroTitle}>
                Personaliza tu
                <span className={styles.heroTitleHighlight}> avatar</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Crea tu personaje único con diferentes prendas y configura tus datos personales 
                para una experiencia personalizada en la aplicación.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECCIÓN PRINCIPAL INTERACTIVA ===== */}
        <section className={styles.mainInteractiveSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>¿Por qué personalizar tu avatar?</h2>
            <p className={styles.sectionSubtitle}>
              Un avatar personalizado te ayuda a sentirte más conectado con la aplicación. 
              Configura tus datos personales y elige tu vestimenta favorita para que tu experiencia 
              sea única y representativa de ti mismo.
            </p>
          </div>

          <div className={styles.interactiveContainer}>
            {/* ===== PANEL IZQUIERDO - ARMARIO ===== */}
            <div className={styles.leftPanel}>
              <div className={styles.wardrobePanel}>
                <div className={styles.wardrobeHeader}>
                  <h3 className={styles.wardrobeTitle}>🛍️ Armario</h3>
                  <span className={styles.wardrobeIcon}>👕</span>
                </div>

                <div className={styles.categoryButtons}>
                  {Object.keys(clothingItems).map(category => (
                    <button
                      key={category}
                      className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>

                <div className={styles.clothingGrid}>
                  {clothingItems[activeCategory].map(item => (
                    <div
                      key={item.id}
                      className={styles.clothingItem}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item, activeCategory)}
                    >
                      <span className={styles.clothingIcon}>{item.icon}</span>
                      <span className={styles.clothingName}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== PANEL CENTRAL - PERSONAJE ===== */}
            <div className={styles.centerPanel}>
              <div className={styles.characterContainer}>
                <div className={styles.characterBase}>
                  <MonigoteBase />
                </div>
                
                <div className={styles.characterClothing}>
                  {Object.entries(equippedClothing).map(([category, item]) => (
                    item && (
                      <div key={category} className={styles.clothingLayer}>
                        <div 
                          className={styles.clothingItem}
                          style={{ position: 'absolute', top: 0, left: 0 }}
                        >
                          <span className={styles.clothingIcon}>{item.icon}</span>
                          <button 
                            onClick={() => removeClothing(category)}
                            style={{
                              position: 'absolute',
                              top: -5,
                              right: -5,
                              background: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              fontSize: '12px',
                              cursor: 'pointer'
                            }}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    )
                  ))}
                </div>

                <div 
                  className={styles.dropZone}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, 'character')}
                >
                  Arrastra ropa aquí
                </div>
              </div>

              <div className={styles.characterInfo}>
                <h3 className={styles.characterName}>
                  {savedData.nombre || 'Tu Avatar'}
                </h3>
                <p className={styles.characterStatus}>
                  Nivel {Math.floor((savedData.edad || 18) / 10) + 1} - {savedData.actividad ? savedData.actividad.charAt(0).toUpperCase() + savedData.actividad.slice(1) : 'Principiante'}
                </p>
              </div>
            </div>

            {/* ===== PANEL DERECHO - INFORMACIÓN Y CONFIGURACIÓN ===== */}
            <div className={styles.rightPanel}>
              {/* Panel de Información */}
              <div className={styles.infoPanel}>
                <div className={styles.infoHeader}>
                  <span className={styles.infoIcon}>📊</span>
                  <h3 className={styles.infoTitle}>Información</h3>
                </div>
                
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Nombre:</span>
                    <span className={styles.infoValue}>
                      {savedData.nombre || <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Edad:</span>
                    <span className={styles.infoValue}>
                      {savedData.edad ? savedData.edad + ' años' : <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Peso:</span>
                    <span className={styles.infoValue}>
                      {savedData.peso ? savedData.peso + ' kg' : <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Altura:</span>
                    <span className={styles.infoValue}>
                      {savedData.altura ? savedData.altura.toFixed(2) + ' m' : <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Género:</span>
                    <span className={styles.infoValue}>
                      {savedData.genero ? (savedData.genero === 'masculino' ? 'Masculino ♂️' : 'Femenino ♀️') : <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Actividad física:</span>
                    <span className={styles.infoValue}>
                      {savedData.actividad ? (savedData.actividad.charAt(0).toUpperCase() + savedData.actividad.slice(1)) : <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Dieta:</span>
                    <span className={styles.infoValue}>
                      {savedData.dieta ? (savedData.dieta.charAt(0).toUpperCase() + savedData.dieta.slice(1)) : <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Horas de sueño:</span>
                    <span className={styles.infoValue}>
                      {savedData.horasSueno ? savedData.horasSueno + ' h' : <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Estrés:</span>
                    <span className={styles.infoValue}>
                      {savedData.estres ? (savedData.estres.charAt(0).toUpperCase() + savedData.estres.slice(1)) : <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Consumo:</span>
                    <span className={styles.infoValue}>
                      {savedData.consumo ? (savedData.consumo.charAt(0).toUpperCase() + savedData.consumo.slice(1)) : <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Ánimo:</span>
                    <span className={styles.infoValue}>
                      {savedData.animo ? (savedData.animo.charAt(0).toUpperCase() + savedData.animo.slice(1)) : <span className={styles.infoValue + ' empty'}>—</span>}
                    </span>
                  </div>
                </div>
              </div>

              {/* Panel de Configuración */}
              <div className={styles.configPanel}>
                <button 
                  className={styles.configButton}
                  onClick={() => setShowConfig(!showConfig)}
                >
                  <span>⚙️ Configuración</span>
                  <span className={styles.configIcon}>▼</span>
                </button>

                {showConfig && (
                  <div className={styles.configDropdown}>
                    <form className={styles.configForm}>
                      {/* Nombre */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Nombre:</label>
                        <input
                          type="text"
                          maxLength={20}
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          className={styles.formInput}
                        />
                      </div>

                      {/* Edad */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Edad:</label>
                        <input
                          type="number"
                          min={5}
                          max={100}
                          value={formData.edad}
                          onChange={(e) => handleInputChange('edad', Number(e.target.value))}
                          className={styles.formInput}
                        />
                      </div>

                      {/* Peso */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Peso (kg):</label>
                        <input
                          type="number"
                          min={10}
                          max={400}
                          value={formData.peso}
                          onChange={(e) => handleInputChange('peso', Number(e.target.value))}
                          className={styles.formInput}
                        />
                      </div>

                      {/* Altura */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Altura:</label>
                        <div className={styles.formRange}>
                          <input
                            type="range"
                            min={1}
                            max={2.15}
                            step={0.01}
                            value={formData.altura}
                            onChange={(e) => handleInputChange('altura', Number(e.target.value))}
                            className={`${styles.formInput} ${styles.rangeInput}`}
                          />
                          <span className={styles.rangeValue}>{formData.altura.toFixed(2)}m</span>
                        </div>
                      </div>

                      {/* Género */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Género:</label>
                        <div className={styles.buttonGroup}>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.genero === 'masculino' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('genero', 'masculino')}
                          >
                            ♂️ Masculino
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.genero === 'femenino' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('genero', 'femenino')}
                          >
                            ♀️ Femenino
                          </button>
                        </div>
                      </div>

                      {/* Actividad física */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Actividad física:</label>
                        <div className={styles.buttonGroup}>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.actividad === 'malo' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('actividad', 'malo')}
                          >
                            Malo
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.actividad === 'neutral' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('actividad', 'neutral')}
                          >
                            Neutral
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.actividad === 'bueno' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('actividad', 'bueno')}
                          >
                            Bueno
                          </button>
                        </div>
                      </div>

                      {/* Dieta */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Dieta:</label>
                        <div className={styles.buttonGroup}>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.dieta === 'omnivora' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('dieta', 'omnivora')}
                          >
                            Omnívora
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.dieta === 'vegetariana' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('dieta', 'vegetariana')}
                          >
                            Vegetariana
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.dieta === 'vegana' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('dieta', 'vegana')}
                          >
                            Vegana
                          </button>
                        </div>
                      </div>

                      {/* Horas de sueño */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Horas de sueño:</label>
                        <div className={styles.formRange}>
                          <input
                            type="range"
                            min={1}
                            max={14}
                            step={1}
                            value={formData.horasSueno}
                            onChange={(e) => handleInputChange('horasSueno', Number(e.target.value))}
                            className={`${styles.formInput} ${styles.rangeInput}`}
                          />
                          <span className={styles.rangeValue}>{formData.horasSueno}h</span>
                        </div>
                      </div>

                      {/* Estrés */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Estrés:</label>
                        <div className={styles.buttonGroup}>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.estres === 'bajo' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('estres', 'bajo')}
                          >
                            Bajo
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.estres === 'medio' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('estres', 'medio')}
                          >
                            Medio
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.estres === 'alto' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('estres', 'alto')}
                          >
                            Alto
                          </button>
                        </div>
                      </div>

                      {/* Consumo */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Consumo:</label>
                        <div className={styles.buttonGroup}>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.consumo === 'ninguno' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('consumo', 'ninguno')}
                          >
                            Ninguno
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.consumo === 'poco' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('consumo', 'poco')}
                          >
                            Poco
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.consumo === 'habitual' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('consumo', 'habitual')}
                          >
                            Habitual
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.consumo === 'mucho' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('consumo', 'mucho')}
                          >
                            Mucho
                          </button>
                        </div>
                      </div>

                      {/* Ánimo */}
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Ánimo:</label>
                        <div className={styles.buttonGroup}>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.animo === 'bajo' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('animo', 'bajo')}
                          >
                            Bajo
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.animo === 'neutro' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('animo', 'neutro')}
                          >
                            Neutro
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionButton} ${formData.animo === 'alto' ? styles.selected : ''}`}
                            onClick={() => handleInputChange('animo', 'alto')}
                          >
                            Alto
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className={styles.saveButton}
                        onClick={handleSaveData}
                      >
                        <span className={styles.saveIcon}>💾</span>
                        Guardar Datos
                      </button>

                      {errorMessage && (
                        <div className={styles.errorMessage}>
                          {errorMessage}
                          <button
                            className={styles.closeError}
                            onClick={() => setErrorMessage('')}
                          >
                            ✕
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 