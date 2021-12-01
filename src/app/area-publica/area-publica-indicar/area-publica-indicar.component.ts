import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-area-publica-indicar',
  templateUrl: './area-publica-indicar.component.html',
  styleUrls: ['./area-publica-indicar.component.css']
})
export class AreaPublicaIndicarComponent implements OnInit {

  constructor(private auth:AuthenticationService, private router: Router) { }
  idType= "edv";
  
  ngOnInit(): void {
    this.idType="edv"
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }
}
