import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [FormsModule, CommonModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css'
})
export class Dropdown {
  tipoTelefone = '';
  dropdownAberto: boolean = false;
  tipoTelefoneSelecionado: string = '';

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }
  
  selecionar(opcao: string) {
    this.tipoTelefoneSelecionado = opcao;
    this.dropdownAberto = false;
  }

}
