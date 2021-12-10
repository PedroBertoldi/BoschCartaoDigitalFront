import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {
 

  constructor(private http:HttpClient) { }

  getBeneficiarios(eventoId: number){
    return this.http.get<any>(environment.webApi + '/api/AreaAdministrativa/TodosDireitos/'+eventoId);
  }

  
  getBeneficiarioById(idEvento:number,idColaborador: number){
    return this.http.get<any>(environment.webApi + '/api/AreaAdministrativa/buscar-direitos', {params:{EventoId:idEvento, idColaborador: idColaborador}});
  }


  getBeneficiarioByEdv(eventoID:number,colaboradorEDV: string){
    return this.http.get<any>(environment.webApi + '/api/AreaAdministrativa/Direito/Buscar/'+eventoID+'/'+colaboradorEDV);
  }

  
  
  createBeneficiario(beneficiario:any){
    return this.http.post<any>(environment.webApi + '/api/AreaAdministrativa/Beneficiarios', beneficiario);
  }


  updateBeneficiario(beneficiarioId:number, beneficiario:any){
    return this.http.put<any>(environment.webApi + '/api/AreaAdministrativa/Beneficiarios/'+beneficiarioId, beneficiario);
  }

  deleteBeneficiario(eventoId: number, colaboradorId: any) {
    return this.http.delete<any>(environment.webApi + '/api/AreaAdministrativa/Direito/ColaboradorEvento/'+ colaboradorId+'/'+eventoId);
  }

  getAreas(){
    return this.http.get<any>(environment.webApi + '/api/AreaAdministrativa/listar-unidade-organizacional')
  }

}
