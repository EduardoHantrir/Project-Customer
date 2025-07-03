import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
  @Output() cadastrado = new EventEmitter<void>();

  @Input() endereco: any;
  @Input() telefone: any;
  @Input() enderecoPreenchido = false;
  @Input() telefonePreenchido = false;

  nome = "";
  email = "";
  senha = "";
  confirmarSenha = "";

  numeroTelefone = "";
  tipoTelefone = "";

  Logradouro = "";
  Numero = "";
  Complemento = "";
  bairro = "";
  Cidade = "";
  Uf = "";
  Estado = "";
  Cep = "";

  constructor(private authService: Auth, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['endereco'] && this.endereco) {
      this.Logradouro = this.endereco.logradouro || "";
      this.Numero = this.endereco.numero || "";
      this.Complemento = this.endereco.complemento || "";
      this.bairro = this.endereco.bairro || "";
      this.Cidade = this.endereco.cidade || "";
      this.Uf = this.endereco.uf || "";
      this.Estado = this.endereco.estado || "";
      this.Cep = this.endereco.cep || "";
    }

    if (changes['telefone'] && this.telefone) {
      this.numeroTelefone = this.telefone.telefoneNum || "";
      this.tipoTelefone = this.telefone.tipoTelefone || "";
    }
  }

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
        bairro: this.bairro,
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

  mostrarTelefone() {
    this.telefoneToggle.emit();
  }

  onSubmit() {
    this.register();
  }
}
