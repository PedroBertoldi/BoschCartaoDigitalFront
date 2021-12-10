import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

  constructor(private http: HttpClient) { }

  getBeneficiosByEventoId(eventoId: number){
    return this.http.get<any>(`${environment.webApi}/api/AreaAdministrativa/Evento/${eventoId}/listar-beneficios`);
  }


  getBeneficioById(beneficioId: number){
    return this.http.get<any>(environment.webApi + '/api/AreaAdministrativa/Beneficio/'+beneficioId);
  }

  deleteBeneficio(eventoId:number,beneficioId:number){
    return this.http.delete<any>(environment.webApi + '/api/AreaAdministrativa/Beneficio/'+eventoId+'/'+beneficioId);
  }


  updateBeneficio(beneficioId:number, nome:string){
    return this.http.put<any>(environment.webApi + '/api/AreaAdministrativa/Beneficio/'+beneficioId, {beneficio: nome})
  }

  createBeneficio(eventoId:number, nome:string){
    return this.http.post<any>(environment.webApi + '/api/AreaAdministrativa/Evento/criar-beneficio-no-evento', {beneficio: nome,eventoId:eventoId})
  }
}
