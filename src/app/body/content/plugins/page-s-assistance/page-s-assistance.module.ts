import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {PageSAssistanceComponent} from "./page-s-assistance.component"
import {PageSubmenuServicePluginModule} from "../page-submenu-service-plugin/page-submenu-service-plugin.module";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    PageSubmenuServicePluginModule
  ],
  declarations: [PageSAssistanceComponent],
  exports: [PageSAssistanceComponent],
  providers: []
})

export class PageSAssistancePluginModule { }
