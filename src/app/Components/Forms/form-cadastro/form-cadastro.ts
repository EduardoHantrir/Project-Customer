import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from "../input-component/input-component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-cadastro',
  imports: [InputComponent, CommonModule],
  templateUrl: './form-cadastro.html',
  styleUrl: './form-cadastro.css'
})
export class FormCadastro {
  @Output() enderecoToggle = new EventEmitter<void>();
  @Output() telefoneToggle = new EventEmitter<void>();

  mostrarEndereco() {
    this.enderecoToggle.emit();
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
