import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';
import { AreaPublicaIndicarComponent } from './area-publica-indicar/area-publica-indicar.component';
import { LoginComponent } from '../common/login/login.component';
import { AreaPublicaComponent } from './area-publica.component';
import { QRCodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [  { path: '', component: LoginComponent },
                          { path: 'meus-beneficios', component: AreaPublicaComponent, canActivate: [AuthGuardService] },
                          { path: 'qr-code', component: QRCodeComponent, canActivate: [AuthGuardService] },
                          {path:'indicar', component: AreaPublicaIndicarComponent, canActivate: [AuthGuardService] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaPublicaRoutingModule { }
