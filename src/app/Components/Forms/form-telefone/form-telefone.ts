import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from "../input-component/input-component";
import { Dropdown } from "../../dropdown/dropdown";

@Component({
  selector: 'app-form-telefone',
  imports: [CommonModule, FormsModule, InputComponent, Dropdown],
  templateUrl: './form-telefone.html',
  styleUrl: './form-telefone.css'
})

export class FormTelefone {
  @Output() closeTelefoneEmitter = new EventEmitter<void>();
  @Output() telefoneSalvo = new EventEmitter<any>();

  dropdownAberto: boolean = false;
  tipoTelefoneSelecionado: string = '';

  telefoneNum = '';
  tipoTelefone = '';

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }

  selecionar(opcao: string) {
    this.tipoTelefoneSelecionado = opcao;
    this.dropdownAberto = false;
  }


  salvarTelefone() {
    const tipoMap: { [key: string]: number } = {
      'Residencial': 1,
      'Comercial': 2,
      'Pessoal': 3
    };

    const telefone = {
      telefoneNum: this.telefoneNum,
      tipoTelefone: tipoMap[this.tipoTelefoneSelecionado] || 0
    };

    this.telefoneSalvo.emit(telefone);
    this.sair();
  }

  sair() {
    this.closeTelefoneEmitter.emit();
  }

}
