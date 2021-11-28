import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaPublicaRoutingModule } from './area-publica-routing.module';
import { AreaPublicaComponent } from './area-publica.component';
import { AreaPublicaLoginComponent } from './area-publica-login/area-publica-login.component';


@NgModule({
  declarations: [
    AreaPublicaComponent,
    AreaPublicaLoginComponent
  ],
  imports: [
    CommonModule,
    AreaPublicaRoutingModule
  ]
})
export class AreaPublicaModule { }
