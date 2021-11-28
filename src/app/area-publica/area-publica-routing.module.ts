import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaPublicaLoginComponent } from './area-publica-login/area-publica-login.component';
import { AreaPublicaComponent } from './area-publica.component';

const routes: Routes = [{ path: 'meus-beneficios', component: AreaPublicaComponent },
                        { path: '', component: AreaPublicaLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaPublicaRoutingModule { }
