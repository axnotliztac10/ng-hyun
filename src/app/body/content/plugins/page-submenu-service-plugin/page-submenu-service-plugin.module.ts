import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {PageSubmenuServicePluginComponent} from "./page-submenu-service-plugin.component";

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [PageSubmenuServicePluginComponent],
  exports: [PageSubmenuServicePluginComponent],
  providers: []
})

export class PageSubmenuServicePluginModule { }
