import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaPublicaIndicarComponent } from './area-publica-indicar/area-publica-indicar.component';
import { AreaPublicaLoginComponent } from './area-publica-login/area-publica-login.component';
import { AreaPublicaComponent } from './area-publica.component';

const routes: Routes = [{ path: 'meus-beneficios', component: AreaPublicaComponent },
                        { path: '', component: AreaPublicaLoginComponent },
                        {path:'indicar', component: AreaPublicaIndicarComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaPublicaRoutingModule { }
