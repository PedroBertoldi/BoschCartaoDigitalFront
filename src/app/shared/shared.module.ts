import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoadingComponent } from './loading/loading.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AreaPublicaRoutingModule } from '../area-publica/area-publica-routing.module';



@NgModule({
  declarations: [MenuComponent,
                LoadingComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    AreaPublicaRoutingModule
  ],
  exports:[
    MenuComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
