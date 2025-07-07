import { Routes } from '@angular/router';
import { PantallaBienvenidaComponent } from './componentes/pantalla-bienvenida';
import { InicioComponent } from './componentes/inicio';

export const routes: Routes = [
  { path: '', component: PantallaBienvenidaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', loadComponent: () => import('./pages/login').then(m => m.Login) }
];
