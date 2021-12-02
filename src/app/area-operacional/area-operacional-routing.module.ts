import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaOperacionalComponent } from './area-operacional.component';
import { AreaOperacionalValidacaoComponent } from './area-operacional-validacao/area-operacional-validacao.component';

const routes: Routes = [
  { path: '', component: AreaOperacionalComponent },
  { path: 'validacao', component: AreaOperacionalValidacaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaOperacionalRoutingModule { }
