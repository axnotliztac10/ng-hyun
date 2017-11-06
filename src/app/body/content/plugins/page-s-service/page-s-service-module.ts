import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {PageSServiceComponent} from "./page-s-service.component"
import {PageSubmenuServicePluginModule} from "../page-submenu-service-plugin/page-submenu-service-plugin.module";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    PageSubmenuServicePluginModule
  ],
  declarations: [PageSServiceComponent],
  exports: [PageSServiceComponent],
  providers: []
})

export class PageSServicePluginModule { }
