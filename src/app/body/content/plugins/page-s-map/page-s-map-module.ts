import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {PageSMapComponent} from "./page-s-map.component";
import {PageSubmenuLegalPluginModule} from "../page-submenu-legal-plugin/page-submenu-legal-plugin.module";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    PageSubmenuLegalPluginModule
  ],
  declarations: [PageSMapComponent],
  exports: [PageSMapComponent],
  providers: []
})

export class PageSMapPluginModule { }
