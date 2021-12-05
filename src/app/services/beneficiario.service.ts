import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  constructor(private http:HttpClient) { }

  getBeneficiarios(eventoId: number){
    return this.http.get<any>('http://localhost:5000/api/AreaAdministrativa/TodosDireitos/'+eventoId);
  }

  
  getBeneficiarioById(idEvento:number,idColaborador: number){
    return this.http.get<any>('http://localhost:5000/api/AreaAdministrativa/buscar-direitos', {params:{EventoId:idEvento, idColaborador: idColaborador}});
  }
  

  getAreas(){
    return this.http.get<any>('https://localhost:5001/api/AreaAdministrativa/listar-unidade-organizacional')
  }

}
