# 🌱 LifeLevelUp Frontend

LifeLevelUp es una web app gamificada que representa a una persona y al planeta según sus hábitos saludables. El enfoque es tipo juego estilo "Los Sims", pero usando solo SVGs personalizados, animaciones CSS y emojis unicode. La estética es limpia, atractiva y moderna, con colores pastel y estilo cartoon minimalista.

## 🚀 Características principales
- **Avatar SVG modular:** Personaje editable, compuesto por partes SVG (cabeza, ojos, boca, cabello, torso, brazos, piernas, expresiones, etc.)
- **Panel de hábitos:** Botones para activar hábitos saludables (dormir, caminar, comer sano, etc.)
- **Panel del planeta:** Visualización del estado del planeta y simulador colectivo.
- **Logros y consejos:** Recompensas visuales tipo RPG y tips personalizados.
- **Gamificación:** Cada hábito mejora barras del personaje y del planeta, con animaciones y cambios visuales.
- **Progreso persistente:** Todo se guarda en localStorage.

## 📦 Estructura del frontend React
```
/src
  /components
    Header.jsx
    AvatarStatus.jsx
    HabitsPanel.jsx
    PlanetPanel.jsx
    Achievements.jsx
    Tips.jsx
  /assets/svg/avatar/   // SVGs del personaje
  /styles/
    main.css            // O configuración de Tailwind
  /data/
    habits.js
  App.jsx
  main.jsx
```

## 🎨 Estilo visual
- Solo SVG, CSS y emojis. Sin imágenes externas ni íconos descargados.
- Colores pastel: #FFCECE, #A0E7E5, #B4F8C8, etc.
- Cartoon, limpio, amigable, con animaciones suaves.
- Sombra suave, sin bordes duros.

## 🧠 Ejemplo de hábitos
- Dormir 8h 😴
- Caminar 30min 🏃
- Comer verduras 🥦
- Dejar de fumar 🚭
- Hidratarse 💧
- Apagar el coche y caminar 🌍  

Cada hábito activa un cambio en barras del personaje y muestra un consejo o logro nuevo.

---

¡Contribuye o personaliza tu propio avatar y hábitos! El código es modular y fácil de extender.
