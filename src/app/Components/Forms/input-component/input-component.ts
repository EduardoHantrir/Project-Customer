import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  forwardRef
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormsModule
} from '@angular/forms';

@Component({
  selector: 'app-input-component',
  standalone: true,
  templateUrl: './input-component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./input-component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() errorMessage: string = '';

  value: string = '';

  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onValueChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
  }
}
