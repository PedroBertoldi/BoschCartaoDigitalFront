import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {

  constructor(private http: HttpClient) { }

  getColaborador(edv:string){
    return this.http.get<any>(environment.webApi + '/api/AreaPublica/buscar-colaborador/'+ edv);
  }

  getIndicado(id:number, nascimento: string){
    return this.http.get<any>(environment.webApi + '/api/AreaPublica/buscar-indicado',{params:{"ColaboradorId":id,DataNascimento:nascimento}} );
  }

  removeIndicar(colaboradorId: number){
    return this.http.put<any>(environment.webApi + '/api/AreaPublica/remover-indicacoes',
    {
      colaboradorId: colaboradorId,
      direitosId:[]
    })
  }

  indicar(colaboradorId: number, nomeCompleto:string, cpf:string, edv:string){
     return this.http.put<any>(environment.webApi + '/api/AreaPublica/indicar-pessoa', 
     {
      colaboradorId: colaboradorId,
      nomeCompleto: nomeCompleto,
      cpf: cpf,
      edv: edv,
      direitosId: []
    });
  }

  
}
