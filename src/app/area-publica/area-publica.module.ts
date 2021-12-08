import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaPublicaRoutingModule } from './area-publica-routing.module';
import { AreaPublicaComponent } from './area-publica.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';

import { BeneficioTableComponent } from './beneficio-table/beneficio-table.component';
import { AreaPublicaIndicarComponent } from './area-publica-indicar/area-publica-indicar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';

  
@NgModule({
  declarations: [
    AreaPublicaComponent,
    BeneficioTableComponent,
    AreaPublicaIndicarComponent,
  ],
  imports: [
    CommonModule,
    AreaPublicaRoutingModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ],
})
export class AreaPublicaModule { }
