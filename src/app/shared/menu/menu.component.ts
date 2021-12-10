import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
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
  caminho!: string
  larguraTela: number = 0;

  constructor(private auth:AuthenticationService, private router: Router, private location: Location) { }


  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.route = this.router.routerState.snapshot.url;
    this.caminho = this.location.path()
    this.larguraTela = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.larguraTela = event.target.innerWidth;
	}

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }
}
