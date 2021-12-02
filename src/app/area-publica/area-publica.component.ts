import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { DireitoService } from '../services/direito.service';

@Component({
  selector: 'app-area-publica',
  templateUrl: './area-publica.component.html',
  styleUrls: ['./area-publica.component.css']
})
export class AreaPublicaComponent implements OnInit {

  direitos: any;
  indicacoes: any;
  user: any;
  constructor(private auth:AuthenticationService, private direito: DireitoService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.direito.getDireitos(this.user.cpf, this.user.nasc).pipe(first()).subscribe(
                data => {
                    this.direitos = data.direitos;
                    this.indicacoes = data.indicacoes;
                },
                error => {
                    if(error.status == 401  || error.status == 400){
                      console.log("erro ao buscar os dados")
                    }
                    else{
                      console.log("problemas de conexao")
                    }
                });
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }
}
