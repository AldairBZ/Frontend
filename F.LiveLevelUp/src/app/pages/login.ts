import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario = '';
  contrasena = '';
  login() {
    // Lógica de autenticación mock
    if (this.usuario === 'arbol' && this.contrasena === 'verde') {
      alert('¡Bienvenido al bosque!');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
} 