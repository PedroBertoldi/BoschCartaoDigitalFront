import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  constructor(private http:HttpClient) { }

  getBeneficiario(eventoId: number){
    return this.http.get<any>('http://localhost:5000/api/AreaAdministrativa/TodosDireitos/'+eventoId);
  }
}
