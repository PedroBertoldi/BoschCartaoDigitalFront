import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { AreaOperacionalRoutingModule } from './area-operacional-routing.module';
import { AreaOperacionalComponent } from './area-operacional.component';
import { AreaOperacionalValidacaoComponent } from './area-operacional-validacao/area-operacional-validacao.component';
import { BotaoValidacaoComponent } from './area-operacional-validacao/botao-validacao/botao-validacao.component';

@NgModule({
  declarations: [
    AreaOperacionalComponent,
    AreaOperacionalValidacaoComponent,
    BotaoValidacaoComponent
  ],
  imports: [
    CommonModule,
    AreaOperacionalRoutingModule,
    MatButtonModule
  ]
})
export class AreaOperacionalModule { }
