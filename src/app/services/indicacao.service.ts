import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {

  constructor(private http: HttpClient) { }

  getColaborador(edv:string){
    return this.http.get<any>('http://localhost:5000/api/AreaPublica/buscar-colaborador/'+ edv);
  }

  removeIndicar(colaboradorId: number, direitos: number[]){
    return this.http.put<any>('http://localhost:5000/api/AreaPublica/remover-indicacoes',
    {
      colaboradorId: colaboradorId,
      eventoId:1,
      direitosId:direitos
    })
  }

  indicar(colaboradorId: number, nomeCompleto:string, cpf:string, edv:string){
     return this.http.put<any>('http://localhost:5000/api/AreaPublica/indicar-pessoa', 
     {
      colaboradorId: colaboradorId,
      nomeCompleto: nomeCompleto,
      cpf: cpf,
      edv: edv,
      eventoId: 1,
      direitosId: []
    });
  }

  
}
