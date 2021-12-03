import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../common/login/login.component';
import { AdminGuardService } from '../guards/admin-guard.service';
import { AreaAdministrativaCadastroBeneficiariosComponent } from './area-administrativa-cadastro-beneficiarios/area-administrativa-cadastro-beneficiarios.component';
import { AreaAdministrativaCadastroBeneficioComponent } from './area-administrativa-cadastro-beneficio/area-administrativa-cadastro-beneficio.component';
import { AreaAdministrativaCadastroEventoComponent } from './area-administrativa-cadastro-evento/area-administrativa-cadastro-evento.component';
import { AreaAdministrativaConsultaBeneficiarioComponent } from './area-administrativa-consulta-beneficiario/area-administrativa-consulta-beneficiario.component';
import { AreaAdministrativaConsultaBeneficioComponent } from './area-administrativa-consulta-beneficio/area-administrativa-consulta-beneficio.component';
import { AreaAdministrativaConsultaEventoComponent } from './area-administrativa-consulta-evento/area-administrativa-consulta-evento.component';
import { AreaAdministrativaComponent } from './area-administrativa.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'evento', component: AreaAdministrativaConsultaEventoComponent, canActivate:[AdminGuardService] },
  { path: 'evento/cadastro', component: AreaAdministrativaCadastroEventoComponent, canActivate:[AdminGuardService] },
  { path: 'evento/:idEvento/beneficios', component: AreaAdministrativaConsultaBeneficioComponent, canActivate:[AdminGuardService] },
  { path: 'evento/:idEvento/beneficios/cadastro', component: AreaAdministrativaCadastroBeneficioComponent, canActivate:[AdminGuardService] },
  { path: 'evento/:idEvento/beneficiarios', component: AreaAdministrativaConsultaBeneficiarioComponent, canActivate:[AdminGuardService] },
  { path: 'evento/:idEvento/beneficiarios/cadastro', component: AreaAdministrativaCadastroBeneficiariosComponent, canActivate:[AdminGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaAdministrativaRoutingModule { }
