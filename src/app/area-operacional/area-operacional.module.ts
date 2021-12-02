import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaOperacionalRoutingModule } from './area-operacional-routing.module';
import { AreaOperacionalComponent } from './area-operacional.component';
import { AreaOperacionalValidacaoComponent } from './area-operacional-validacao/area-operacional-validacao.component';

@NgModule({
  declarations: [
    AreaOperacionalComponent,
    AreaOperacionalValidacaoComponent
  ],
  imports: [
    CommonModule,
    AreaOperacionalRoutingModule
  ]
})
export class AreaOperacionalModule { }
