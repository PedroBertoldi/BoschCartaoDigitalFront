import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
