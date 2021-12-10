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
  loading:boolean=true;
  constructor(private auth:AuthenticationService, private direito: DireitoService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.direito.getDireitos(this.user.cpf, this.user.nasc).pipe(first()).subscribe(
                data => {
                    this.loading=false;
                    this.direitos = data.direitos;
                    this.indicacoes = data.indicacoes;
                });
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }
}
