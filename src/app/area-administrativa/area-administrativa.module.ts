import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaAdministrativaRoutingModule } from './area-administrativa-routing.module';
import { AreaAdministrativaComponent } from './area-administrativa.component';
import { AreaAdministrativaCadastroEventoComponent } from './area-administrativa-cadastro-evento/area-administrativa-cadastro-evento.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BotaoFlutuanteComponent } from './botao-flutuante/botao-flutuante.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component'



@NgModule({
  declarations: [
    AreaAdministrativaComponent,
    AreaAdministrativaCadastroEventoComponent,
    BotaoFlutuanteComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    AreaAdministrativaRoutingModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class AreaAdministrativaModule { }
