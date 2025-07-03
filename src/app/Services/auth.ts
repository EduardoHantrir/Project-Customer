import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Auth {
  private readonly API = 'https://localhost:44339';

  constructor(private http: HttpClient) { }

  login(email: string, senha: string) {
    return this.http.post(`${this.API}/auth/login`, { email, senha });
  }

  cadastro(customer: any) {
    return this.http.post(`${this.API}/customer`, customer);
  }


  saveToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  getToken() {
    return localStorage.getItem('jwt');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('jwt');
  }
}
