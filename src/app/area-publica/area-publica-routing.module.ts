import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaPublicaComponent } from './area-publica.component';

const routes: Routes = [{ path: '', component: AreaPublicaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaPublicaRoutingModule { }
