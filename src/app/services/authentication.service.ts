import { getLocaleDateFormat } from '@angular/common';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';

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
    console.log("login attempt "+cpf)
    return this.http.post<any>('http://localhost:5000/api/Autenticacao/Login', { cpf: cpf, dataNascimento: nascimento})
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
