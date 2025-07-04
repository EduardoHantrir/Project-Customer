import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [FormsModule, CommonModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css'
})
export class Dropdown {
  @Output() tipoSelecionado = new EventEmitter<string>();

  dropdownAberto: boolean = false;
  tipoTelefoneSelecionado: string = '';

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }

  selecionar(opcao: string) {
    this.tipoTelefoneSelecionado = opcao;
    this.tipoSelecionado.emit(opcao);
    this.dropdownAberto = false;
  }

}
