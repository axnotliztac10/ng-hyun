import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {PageSWarantyComponent} from "./page-s-waranty.component"
import {PageSubmenuServicePluginModule} from "../page-submenu-service-plugin/page-submenu-service-plugin.module";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    PageSubmenuServicePluginModule
  ],
  declarations: [PageSWarantyComponent],
  exports: [PageSWarantyComponent],
  providers: []
})

export class PageSWarantyPluginModule { }
