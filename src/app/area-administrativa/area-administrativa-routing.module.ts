import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaAdministrativaCadastroEventoComponent } from './area-administrativa-cadastro-evento/area-administrativa-cadastro-evento.component';
import { AreaAdministrativaComponent } from './area-administrativa.component';

const routes: Routes = [
  { path: '', component: AreaAdministrativaComponent },
  { path: 'evento', component: AreaAdministrativaCadastroEventoComponent },
  { path: 'evento/cadastro', component: AreaAdministrativaCadastroEventoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaAdministrativaRoutingModule { }
