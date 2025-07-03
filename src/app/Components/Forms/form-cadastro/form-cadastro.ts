import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from "../input-component/input-component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../Services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cadastro',
  imports: [InputComponent, CommonModule, FormsModule],
  templateUrl: './form-cadastro.html',
  styleUrl: './form-cadastro.css'
})
export class FormCadastro {
  @Output() enderecoToggle = new EventEmitter<void>();
  @Output() telefoneToggle = new EventEmitter<void>();

  nome = "";
  email = "";
  senha = "";
  confirmarSenha = "";

  numeroTelefone = "";
  tipoTelefone = "";

  Logradouro = "";
  Numero = "";
  Complemento = "";
  Cidade = "";
  Uf = "";
  Estado = "";
  Cep = "";

  constructor(private authService: Auth, private router: Router) { }

  @Output() cadastrado = new EventEmitter<void>();
    
  register() {
    const customer = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      telefone: {
        numero: this.numeroTelefone,
        tipo: Number(this.tipoTelefone)
      },
      endereco: {
        logradouro: this.Logradouro,
        numero: this.Numero,
        complemento: this.Complemento,
        bairro: "",
        cidade: this.Cidade,
        uf: this.Uf,
        estado: this.Estado,
        cep: this.Cep
      }
    };

    this.authService.cadastro(customer).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      error: err => {
        alert('Erro ao cadastrar: ' + (err.error?.message || 'Erro desconhecido'));
      }
    });

  }

  mostrarEndereco() {
    this.enderecoToggle.emit();
  }

  onSubmit() {
    this.register();
  }
}
