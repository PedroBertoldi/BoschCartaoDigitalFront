import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DireitoService {

  constructor(private http: HttpClient) { }

  getDireitos(cpf:string, nascimento: string){
    return this.http.get<any>('http://localhost:5000/api/AreaPublica/buscar-direitos', {params:{ EventoId: 1, Cpf: cpf, DataNascimento: nascimento}} );
  }
  
}