import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormLogin } from '../../Components/Forms/form-login/form-login';
import { FormCadastro } from '../../Components/Forms/form-cadastro/form-cadastro';
import { FormEndereco } from '../../Components/Forms/form-endereco/form-endereco';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../Services/auth.interceptor';

@Component({
  selector: 'app-login-cadastro-page',
  standalone: true,
  templateUrl: './login-cadastro-page.html',
  styleUrl: './login-cadastro-page.css',
  imports: [CommonModule, FormLogin, FormCadastro, FormEndereco],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class LoginCadastroPage {
  toggleTelefone() {
    throw new Error('Method not implemented.');
  }
  showLogin = false;    // false = cadastro, true = login
  showEndereco = false;
  showLeft = true;

  formSliderStyles = {
  };

  togglePosition() {
    this.showLeft = !this.showLeft;
  }

  showForm(tipo: 'login' | 'cadastro') {
    this.showLogin = tipo === 'login';
    this.showLeft = !this.showLogin;  // sincroniza a posição
  }

  getPosition() {
    return this.showLeft ? { left: '0', right: 'auto' } : { right: '0', left: 'auto' };
  }
  toggleEndereco() {
    this.showEndereco = !this.showEndereco;
  }

  closeEndereco() {
    this.showEndereco = false;
  }
}
