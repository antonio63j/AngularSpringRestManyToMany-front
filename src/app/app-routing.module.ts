import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  },
  {path: 'empleados', loadChildren: './empleados/empleados.module#EmpleadosModule'},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
