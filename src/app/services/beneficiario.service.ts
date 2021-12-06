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
  
  
  createBeneficiario(beneficiario:any){
    return this.http.post<any>('http://localhost:5000/api/AreaAdministrativa/Beneficiarios', beneficiario);
  }


  updateBeneficiario(beneficiarioId:number, beneficiario:any){
    return this.http.put<any>('http://localhost:5000/api/AreaAdministrativa/Beneficiarios/'+beneficiarioId, beneficiario);
  }

  deleteBeneficiario(eventoId: number, colaboradorId: any) {
    return this.http.delete<any>('http://localhost:5000/api/AreaAdministrativa/Direito/ColaboradorEvento/'+ colaboradorId+'/'+eventoId);
  }

  getAreas(){
    return this.http.get<any>('https://localhost:5001/api/AreaAdministrativa/listar-unidade-organizacional')
  }

}
