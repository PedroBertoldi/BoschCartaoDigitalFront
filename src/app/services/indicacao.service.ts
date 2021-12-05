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

  getIndicado(id:number, nascimento: string){
    return this.http.get<any>('http://localhost:5000/api/AreaPublica/buscar-indicado',{params:{"ColaboradorId":id,DataNascimento:nascimento}} );
  }

  removeIndicar(colaboradorId: number){
    return this.http.put<any>('http://localhost:5000/api/AreaPublica/remover-indicacoes',
    {
      colaboradorId: colaboradorId,
      direitosId:[]
    })
  }

  indicar(colaboradorId: number, nomeCompleto:string, cpf:string, edv:string){
     return this.http.put<any>('http://localhost:5000/api/AreaPublica/indicar-pessoa', 
     {
      colaboradorId: colaboradorId,
      nomeCompleto: nomeCompleto,
      cpf: cpf,
      edv: edv,
      direitosId: []
    });
  }

  
}
