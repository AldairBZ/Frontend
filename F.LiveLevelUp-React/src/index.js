import React from 'react';
import { createRoot } from 'react-dom/client';
import './pages/login/LoginSidePanel.css';
import LoginSidePanel from './pages/login/LoginSidePanel';

const root = createRoot(document.getElementById('root'));
root.render(<LoginSidePanel />); 