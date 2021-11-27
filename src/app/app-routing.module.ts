import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./area-publica/area-publica.module').then(m => m.AreaPublicaModule) },
  {path: 'operacional', loadChildren: () => import('./area-operacional/area-operacional.module').then(m => m.AreaOperacionalModule) },
  {path: 'admin', loadChildren: () => import('./area-administrativa/area-administrativa.module').then(m => m.AreaAdministrativaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
