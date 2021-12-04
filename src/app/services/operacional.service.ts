import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionalService {

  constructor(private http :HttpClient) { }

  getDireitos(colaborador:{Cpf?:string, Edv?:string, EventoId?:number}){
    return this.http.get<any>(`http://localhost:5000/api/AreaOperacional/Direitos`, {params:colaborador} );
  }

  receberDireitos(params:{eventoId?:number,colaboradorId:number,cpfRecebedor:string, direitosEntregues:number[]}){
    return this.http.post<any>('http://localhost:5000/api/AreaOperacional/Direitos/receber', params)
  }
}
