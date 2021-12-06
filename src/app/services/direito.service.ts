import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DireitoService {

  constructor(private http: HttpClient) { }

  getDireitos(cpf:string, nascimento: string){
    return this.http.get<any>(environment.webApi + '/api/AreaPublica/buscar-direitos', {params:{ Cpf: cpf, DataNascimento: nascimento}} );
  }
  
}