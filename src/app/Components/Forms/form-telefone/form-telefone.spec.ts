import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTelefone } from './form-telefone';

describe('FormTelefone', () => {
  let component: FormTelefone;
  let fixture: ComponentFixture<FormTelefone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTelefone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTelefone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
