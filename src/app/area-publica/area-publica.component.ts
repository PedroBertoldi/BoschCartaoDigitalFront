import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-area-publica',
  templateUrl: './area-publica.component.html',
  styleUrls: ['./area-publica.component.css']
})
export class AreaPublicaComponent implements OnInit {

  constructor(private auth:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }
}
