import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OpsGuardService implements CanActivate{

  constructor(private auth: AuthenticationService, private router: Router) { }
  canActivate(){
    const currentUser = this.auth.getUser();
        if (currentUser) {
          if(currentUser.cargos.includes('Entrega')){
            return true;
          } else{
            this.router.navigate(['/meus-beneficios']);
            return false;
          }
        }
        this.router.navigate(['/operacional']);
        return false;
  }
}
