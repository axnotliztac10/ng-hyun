import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {PageSubmenuPluginComponent} from "./page-submenu-plugin.component";

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [PageSubmenuPluginComponent],
  exports: [PageSubmenuPluginComponent],
  providers: []
})

export class PageSubmenuPluginModule { }
