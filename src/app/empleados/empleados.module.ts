import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosHomeComponent } from './empleados-home/empleados-home.component';
import { EmpleadosPhonesComponent } from './empleados-phones/empleados-phones.component';
import { EmpleadosMovimientosComponent } from './empleados-movimientos/empleados-movimientos.component';

@NgModule({
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ],
  declarations: [EmpleadosHomeComponent, EmpleadosPhonesComponent, EmpleadosMovimientosComponent]
})
export class EmpleadosModule { }
