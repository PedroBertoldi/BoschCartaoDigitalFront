import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaOperacionalComponent } from './area-operacional.component';
import { AreaOperacionalValidacaoComponent } from './area-operacional-validacao/area-operacional-validacao.component';
import { LoginComponent } from '../common/login/login.component';
import { OpsGuardService } from '../guards/ops-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'retirar/:cpf/:edv', component: AreaOperacionalComponent, canActivate:[OpsGuardService]},
  { path: 'validacao', component: AreaOperacionalValidacaoComponent,canActivate:[OpsGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaOperacionalRoutingModule { }
