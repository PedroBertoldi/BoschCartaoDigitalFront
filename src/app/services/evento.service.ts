import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get<any>(environment.webApi + '/api/AreaAdministrativa/Evento');
  }

  getEventoById(eventoId: number){
    return this.http.get<any>(`${environment.webApi}/api/AreaAdministrativa/Evento/${eventoId}`);
  }

  createEvento(evento:any){
      return this.http.post<any>(environment.webApi + '/api/AreaAdministrativa/Evento',evento);
  }

  updateEvento(evento:any){
      return this.http.put<any>(environment.webApi + '/api/AreaAdministrativa/Evento/'+evento.id,evento);
  }

  deleteEvento(eventoId:number){
    return this.http.delete<any>(environment.webApi + '/api/AreaAdministrativa/Evento/'+eventoId);
  }


}
