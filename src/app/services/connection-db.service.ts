import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionDBService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  // fatto
  getAllAutomobili(): Observable<any> {
    return this.http.get(`${this.baseUrl}/automobili`);
  }

  // fatto
  getRiparazioniAutomobiliUsate(): Observable<any> {
    return this.http.get(`${this.baseUrl}/riparazioni/automobili-usate`);
  }

  // fatto
  getAutomobiliOpzionali(): Observable<any> {
    return this.http.get(`${this.baseUrl}/automobili/opzionali`);
  }

  getAutomobiliUsateByPrezzo(maxPrice: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/automobili/usate/${maxPrice}`);
  }

  postRegistraRiparazioneAuto(id: number, newRiparazione: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/riparazioni/macchina/${id}`, newRiparazione);
  }

  putImmatricolaAutomobile(id: number, data: String): Observable<any> {
    return this.http.put(`${this.baseUrl}/automobili/${id}`, data);
  }



}
