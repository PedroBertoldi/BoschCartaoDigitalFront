import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(cpf: string, nascimento: string){
    console.log("login attempt "+cpf)
    return this.http.post<any>('http://localhost:5000/api/Autenticacao/Login', { cpf: cpf, dataNascimento: nascimento})
            .pipe(map(user => {
                localStorage.setItem('colaboradorAtivo', JSON.stringify(user));
                return user;
            }));
  }
}
