import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
// import { EmpleadosHomeComponent } from '../../empleados/empleados-home/empleados-home.component';
const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', redirectTo: ''},
  { path: 'user-profile',   component: UserProfileComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }

