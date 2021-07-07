import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
    {
      path: 'clientes', component: ClientesComponent
    },

    {
      path: 'vehiculos', component: VehiculosComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
