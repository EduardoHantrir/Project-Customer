import { Component } from '@angular/core';
import { InputComponent } from "../input-component/input-component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../../Services/auth';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [InputComponent, FormsModule, CommonModule],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css'
})
export class FormLogin {
  email: string = '';
  password: string = '';

  constructor(private authService: Auth, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      error: err => alert('Login invalido')
    })
  }

  onSubmit() {
    console.log(this.email, this.password)
    this.login();
  }
}