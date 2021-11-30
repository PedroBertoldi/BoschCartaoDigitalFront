import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaAdministrativaRoutingModule } from './area-administrativa-routing.module';
import { AreaAdministrativaComponent } from './area-administrativa.component';
import { AreaAdministrativaCadastroEventoComponent } from './area-administrativa-cadastro-evento/area-administrativa-cadastro-evento.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BotaoFlutuanteComponent } from './botao-flutuante/botao-flutuante.component';



@NgModule({
  declarations: [
    AreaAdministrativaComponent,
    AreaAdministrativaCadastroEventoComponent,
    BotaoFlutuanteComponent,
  ],
  imports: [
    CommonModule,
    AreaAdministrativaRoutingModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule
  ]
})
export class AreaAdministrativaModule { }
