import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoadingComponent } from './loading/loading.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AreaPublicaRoutingModule } from '../area-publica/area-publica-routing.module';
import { ButtonWithLoadingComponent } from './button-with-loading/button-with-loading.component';



@NgModule({
  declarations: [MenuComponent,
                LoadingComponent,
                ButtonWithLoadingComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    AreaPublicaRoutingModule
  ],
  exports:[
    MenuComponent,
    LoadingComponent,
    ButtonWithLoadingComponent
  ]
})
export class SharedModule { }
