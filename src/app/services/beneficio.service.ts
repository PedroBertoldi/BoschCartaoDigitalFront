import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

  constructor(private http: HttpClient) { }

  getBeneficiosByEventoId(eventoId: number){
    return this.http.get<any>(`http://localhost:5000/api/AreaAdministrativa/Evento/${eventoId}/listar-beneficios`);
  }


  getBeneficioById(beneficioId: number){
    console.log("should return beneficio by id")
  }

  deleteBeneficio(beneficioId:number){
    return this.http.delete<any>('http://localhost:5000/api/AreaAdministrativa/Beneficio/'+beneficioId);
  }


  updateBeneficio(beneficioId:number, nome:string){
    return this.http.put<any>('http://localhost:5000/api/AreaAdministrativa/Beneficio/'+beneficioId, {beneficio: nome})
  }

  createBeneficio(eventoId:number, nome:string){
    return this.http.post<any>('http://localhost:5000/api/AreaAdministrativa/Evento/criar-beneficio-no-evento', {beneficio: nome,eventoId:eventoId})
  }
}
