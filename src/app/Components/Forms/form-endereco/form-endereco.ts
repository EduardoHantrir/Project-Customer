import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from "../input-component/input-component";
import { ViaCepService } from '../../../Services/viacep.service';

@Component({
  selector: 'app-form-endereco',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './form-endereco.html',
  styleUrl: './form-endereco.css'
})
export class FormEndereco {
  @Output() closeEnderecoEmitter = new EventEmitter<void>();

  cep: string = '';
  logradouro: string = '';
  complemento: string = '';
  bairro: string = '';
  uf: string = '';

  constructor(private viaCepService: ViaCepService) {}

  sair() {
    this.closeEnderecoEmitter.emit();
  }

  salvarEndereco() {
    this.sair();
  }

  onCepChange(novoCep: string) {
    this.cep = novoCep;

    if (this.cep.length === 8 || this.cep.length === 9) {
      const cepSemHifen = this.cep.replace('-', '');

      this.viaCepService.buscarEndereco(cepSemHifen).subscribe(dados => {
        if (!dados.erro) {
          this.logradouro = dados.logradouro || '';
          this.complemento = dados.complemento || '';
          this.bairro = dados.bairro || '';
          this.uf = dados.uf || '';
        }
      });
    }
  }
}
