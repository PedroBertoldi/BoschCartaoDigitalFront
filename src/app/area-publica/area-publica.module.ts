import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaPublicaRoutingModule } from './area-publica-routing.module';
import { AreaPublicaComponent } from './area-publica.component';


@NgModule({
  declarations: [
    AreaPublicaComponent
  ],
  imports: [
    CommonModule,
    AreaPublicaRoutingModule
  ]
})
export class AreaPublicaModule { }
