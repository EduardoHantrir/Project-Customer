import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from "../input-component/input-component";
import { CepService } from '../../../Services/cep.services';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-endereco',
  standalone: true,
  imports: [InputComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-endereco.html',
  styleUrl: './form-endereco.css'
})
export class FormEndereco {
  @Output() closeEnderecoEmitter = new EventEmitter<void>();
  @Output() enderecoSalvo = new EventEmitter<any>();

  cep: string = '';
  logradouro: string = '';
  complemento: string = '';
  bairro: string = '';
  uf: string = '';
  estado: string = '';
  numero: string = '';
  cidade: string = '';

readonly estados: { [key: string]: string } = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins'
};

  constructor(private cepService: CepService) { }

  sair() {
    this.closeEnderecoEmitter.emit();
  }

  salvarEndereco() {
    const endereco = {
      logradouro: this.logradouro,
      numero: this.numero,
      complemento: this.complemento,
      bairro: this.bairro,
      cidade: this.cidade,
      uf: this.uf,
      estado: this.estado,
      cep: this.cep
    };

    this.enderecoSalvo.emit(endereco);

    this.sair();
  }

  onCepChange(novoCep: string) {
    this.cep = novoCep;

    if (this.cep.length === 8 || this.cep.length === 9) {
      const cepSemHifen = this.cep.replace('-', '');

      this.cepService.buscarEndereco(cepSemHifen).subscribe(dados => {
        if (!dados.erro) {
          this.logradouro = dados.street || '';
          this.complemento = dados.complemento || '';
          this.bairro = dados.neighborhood || '';
          this.uf = dados.state || '';
          this.estado = this.estados[this.uf] || '';
          this.cidade = dados.city || '';
        }
      });
    }
  }
}
