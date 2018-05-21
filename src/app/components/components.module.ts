import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {PanelMenuModule} from 'primeng/panelmenu';

// import { PrimengPanelmenuModule } from './primeng-panelmenu/primeng-panelmenu.module';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './primeng-panelmenu/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PanelMenuModule
    
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MenuComponent

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
