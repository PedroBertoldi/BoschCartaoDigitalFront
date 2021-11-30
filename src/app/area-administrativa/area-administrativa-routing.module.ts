import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaAdministrativaCadastroEventoComponent } from './area-administrativa-cadastro-evento/area-administrativa-cadastro-evento.component';
import { AreaAdministrativaConsultaEventoComponent } from './area-administrativa-consulta-evento/area-administrativa-consulta-evento.component';
import { AreaAdministrativaComponent } from './area-administrativa.component';

const routes: Routes = [
  { path: '', component: AreaAdministrativaComponent },
  { path: 'evento', component: AreaAdministrativaConsultaEventoComponent },
  { path: 'evento/cadastro', component: AreaAdministrativaCadastroEventoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaAdministrativaRoutingModule { }
