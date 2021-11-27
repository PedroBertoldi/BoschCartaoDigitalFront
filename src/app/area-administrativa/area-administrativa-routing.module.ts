import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaAdministrativaComponent } from './area-administrativa.component';

const routes: Routes = [{ path: '', component: AreaAdministrativaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaAdministrativaRoutingModule { }
