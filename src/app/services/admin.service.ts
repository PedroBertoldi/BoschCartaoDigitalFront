import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get<any>('http://localhost:5000/api/AreaAdministrativa/Evento');
  }

  getEventoById(eventoId: number){
    return this.http.get<any>(`http://localhost:5000/api/AreaAdministrativa/Evento/${eventoId}`);
  }

  getBeneficiosByEventoId(eventoId: number){
    return this.http.get<any>(`http://localhost:5000/api/AreaAdministrativa/Evento/${eventoId}/listar-beneficios`);
  }

  deleteBeneficioById(beneficioId: number){
    console.log("should delete beneficio :"+beneficioId);
  }

  getBeneficioById(beneficioId: number){
    console.log("should return beneficio by id")
  }


  updateBeneficio(beneficioId:number, nome:string){
    return this.http.put<any>('http://localhost:5000/api/AreaAdministrativa/Beneficio/'+beneficioId, {beneficio: nome})
  }

  //todo change to single post alternative to be developed ind back end
  createBeneficio(eventoId:number, nome:string){
    return this.http.post<any>('http://localhost:5000/api/AreaAdministrativa/Beneficio', {beneficio: nome})
    .pipe(map(data => {
        this.http.post<any>(`http://localhost:5000/api/AreaAdministrativa/Beneficio/criar-relacao`,
        {
          beneficioId: data.id,
          eventoId: eventoId
        }).pipe(first()).subscribe();
    }))
  }

  createEvento(evento:any){
      return this.http.post<any>('http://localhost:5000/api/AreaAdministrativa/Evento',evento);
  }

  updateEvento(enventoId: number, evento:any){
      return this.http.put<any>('http://localhost:5000/api/AreaAdministrativa/Evento/'+enventoId,evento);
  }


}
