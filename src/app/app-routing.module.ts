import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandasComponent } from './componentes/bandas/bandas.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "bandas", component:BandasComponent},
  {path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
