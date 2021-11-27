import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaAdministrativaRoutingModule } from './area-administrativa-routing.module';
import { AreaAdministrativaComponent } from './area-administrativa.component';


@NgModule({
  declarations: [
    AreaAdministrativaComponent
  ],
  imports: [
    CommonModule,
    AreaAdministrativaRoutingModule
  ]
})
export class AreaAdministrativaModule { }
