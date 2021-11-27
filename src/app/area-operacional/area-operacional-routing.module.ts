import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaOperacionalComponent } from './area-operacional.component';

const routes: Routes = [{ path: '', component: AreaOperacionalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaOperacionalRoutingModule { }
