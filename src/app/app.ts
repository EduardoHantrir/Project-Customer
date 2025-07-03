import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLogin } from './Components/Forms/form-login/form-login';
import { FormCadastro } from './Components/Forms/form-cadastro/form-cadastro';
import { FormEndereco } from './Components/Forms/form-endereco/form-endereco';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, FormLogin, FormCadastro, FormEndereco]
})
export class App {
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
