import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';
import { AreaPublicaIndicarComponent } from './area-publica-indicar/area-publica-indicar.component';
import { AreaPublicaLoginComponent } from './area-publica-login/area-publica-login.component';
import { AreaPublicaComponent } from './area-publica.component';

const routes: Routes = [  { path: '', component: AreaPublicaLoginComponent },
                          { path: 'meus-beneficios', component: AreaPublicaComponent, canActivate: [AuthGuardService] },
                          {path:'indicar', component: AreaPublicaIndicarComponent, canActivate: [AuthGuardService] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaPublicaRoutingModule { }
