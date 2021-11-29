import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaPublicaRoutingModule } from './area-publica-routing.module';
import { AreaPublicaComponent } from './area-publica.component';
import { AreaPublicaLoginComponent } from './area-publica-login/area-publica-login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { BeneficioTableComponent } from './beneficio-table/beneficio-table.component';

@NgModule({
  declarations: [
    AreaPublicaComponent,
    AreaPublicaLoginComponent,
    BeneficioTableComponent
  ],
  imports: [
    CommonModule,
    AreaPublicaRoutingModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class AreaPublicaModule { }
