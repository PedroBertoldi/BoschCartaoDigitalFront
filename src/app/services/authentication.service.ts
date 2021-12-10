import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { 
  }


  getUser(){
    const user = JSON.parse(localStorage.getItem('colaboradorAtivo') as string);
    if(user && new Date(user.expiration)<new Date()){
      return null;
    }
    return user;
  }

  login(cpf: string, nascimento: string){
    return this.http.post<any>(environment.webApi + '/api/Autenticacao/Login', { cpf: cpf, dataNascimento: nascimento})
            .pipe(map(user => {
                user.cpf = cpf;
                user.nasc = nascimento;
                localStorage.setItem('colaboradorAtivo', JSON.stringify(user));
                return user;
            }));
  }

  logout(){
    localStorage.removeItem('colaboradorAtivo');
  }
}
