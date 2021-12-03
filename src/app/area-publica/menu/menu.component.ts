import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  route: any;
  user: any;

  constructor(private auth:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.route = this.router.routerState.snapshot.url;
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }
}
