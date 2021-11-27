import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaOperacionalRoutingModule } from './area-operacional-routing.module';
import { AreaOperacionalComponent } from './area-operacional.component';


@NgModule({
  declarations: [
    AreaOperacionalComponent
  ],
  imports: [
    CommonModule,
    AreaOperacionalRoutingModule
  ]
})
export class AreaOperacionalModule { }
