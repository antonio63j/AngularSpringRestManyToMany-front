import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosHomeComponent } from '../empleados/empleados-home/empleados-home.component';
import { EmpleadosPhonesComponent } from '../empleados/empleados-phones/empleados-phones.component';

const routes: Routes = [
  { path: '', component: EmpleadosHomeComponent},
  { path: 'empleadosphones/:id', component: EmpleadosPhonesComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
