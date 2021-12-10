import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaAdministrativaRoutingModule } from './area-administrativa-routing.module';
import { AreaAdministrativaComponent } from './area-administrativa.component';
import { AreaAdministrativaCadastroEventoComponent } from './area-administrativa-cadastro-evento/area-administrativa-cadastro-evento.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BotaoFlutuanteComponent } from './botao-flutuante/botao-flutuante.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { AreaAdministrativaConsultaEventoComponent } from './area-administrativa-consulta-evento/area-administrativa-consulta-evento.component';
import { BotaoAcaoComponent } from './botao-acao/botao-acao.component';
import { AreaAdministrativaConsultaBeneficioComponent } from './area-administrativa-consulta-beneficio/area-administrativa-consulta-beneficio.component';
import { AreaAdministrativaConsultaBeneficiarioComponent } from './area-administrativa-consulta-beneficiario/area-administrativa-consulta-beneficiario.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AreaAdministrativaCadastroBeneficioComponent } from './area-administrativa-cadastro-beneficio/area-administrativa-cadastro-beneficio.component';
import { AreaAdministrativaCadastroBeneficiariosComponent } from './area-administrativa-cadastro-beneficiarios/area-administrativa-cadastro-beneficiarios.component'
import {MatInputModule} from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import {  MatOptionModule } from '@angular/material/core';
import { LoadingComponent } from '../shared/loading/loading.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AreaAdministrativaComponent,
    AreaAdministrativaCadastroEventoComponent,
    BotaoFlutuanteComponent,
    ModalComponent,
    AreaAdministrativaConsultaEventoComponent,
    BotaoAcaoComponent,
    AreaAdministrativaConsultaBeneficioComponent,
    AreaAdministrativaConsultaBeneficiarioComponent,
    BuscarComponent,
    AreaAdministrativaCadastroBeneficioComponent,
    AreaAdministrativaCadastroBeneficiariosComponent,
  ],
  imports: [
    CommonModule,
    AreaAdministrativaRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ]
})
export class AreaAdministrativaModule { }
