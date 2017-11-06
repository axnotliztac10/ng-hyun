import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {PageSLegalComponent} from "./page-s-legal.component";
import {PageSubmenuLegalPluginModule} from "../page-submenu-legal-plugin/page-submenu-legal-plugin.module";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    PageSubmenuLegalPluginModule
  ],
  declarations: [PageSLegalComponent],
  exports: [PageSLegalComponent],
  providers: []
})

export class PageSLegalPluginModule { }
