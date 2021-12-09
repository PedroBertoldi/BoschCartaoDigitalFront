import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AreaOperacionalRoutingModule } from './area-operacional-routing.module';
import { AreaOperacionalComponent } from './area-operacional.component';
import { AreaOperacionalValidacaoComponent } from './area-operacional-validacao/area-operacional-validacao.component';
import { BotaoValidacaoComponent } from './area-operacional-validacao/botao-validacao/botao-validacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';
import { CardColaboradorComponent } from './card-colaborador/card-colaborador.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { AreaPublicaModule } from '../area-publica/area-publica.module';
import { AreaAdministrativaModule } from '../area-administrativa/area-administrativa.module';
import { SharedModule } from '../shared/shared.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    AreaOperacionalComponent,
    AreaOperacionalValidacaoComponent,
    BotaoValidacaoComponent,
    CardColaboradorComponent
  ],
  imports: [
    CommonModule,
    AreaOperacionalRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    SharedModule,
    ZXingScannerModule 
  ]
})
export class AreaOperacionalModule { }
