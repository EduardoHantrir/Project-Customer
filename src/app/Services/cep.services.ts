import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private apiUrl = 'https://brasilapi.com.br/api/cep/v2';

  constructor(private http: HttpClient) {}

  buscarEndereco(cep: string): Observable<any> {
    const cepLimpo = cep.replace(/\D/g, '');
    return this.http.get(`${this.apiUrl}/${cepLimpo}`);
  }
}
