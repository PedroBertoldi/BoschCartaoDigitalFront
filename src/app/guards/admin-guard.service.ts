import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private auth: AuthenticationService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.auth.getUser();
        if (currentUser) {
          if(currentUser.cargos.includes('HRL')){
            return true;
          } else{
            this.router.navigate(['/meus-beneficios']);
            return false;
          }
        }
        this.router.navigate(['/admin']);
        return false;
    }
}
