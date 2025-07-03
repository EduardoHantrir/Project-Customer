import { Routes } from '@angular/router'
import { Home } from './pages/home/home';
import { LoginCadastroPage } from './pages/login-cadastro-page/login-cadastro-page';
import { authGuard } from './Services/guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login-cad', pathMatch: 'full' },
    { path: 'login-cad', component: LoginCadastroPage },
    { path: 'home', component: Home, canActivate: [authGuard] }
];
