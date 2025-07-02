import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-component.html',
  styleUrls: ['./input-component.css']
})
export class InputComponent {
  @Input() label: string = '';
  @Input() pattern: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() errorMessage: string = '';

  // Evento para notificar a mudança de valor
  @Output() valueChange = new EventEmitter<string>();

  // Evento para notificar quando o campo perde o foco
  @Output() blurEvent = new EventEmitter<void>();

  onValueChange(newValue: string) {
    this.value = newValue;
    this.valueChange.emit(this.value);
  }

  onBlur() {
    this.blurEvent.emit();
  }
}