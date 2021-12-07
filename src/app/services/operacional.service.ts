import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperacionalService {

  constructor(private http :HttpClient) { }

  getDireitos(colaborador:any){
    return this.http.get<any>(`${environment.webApi}/api/AreaOperacional/Direitos`, {params:colaborador} );
  }

  receberDireitos(params:{eventoId?:number,colaboradorId:number,cpfRecebedor:string, direitosEntregues:number[]}){
    return this.http.post<any>(environment.webApi + '/api/AreaOperacional/Direitos/receber', params)
  }
}
