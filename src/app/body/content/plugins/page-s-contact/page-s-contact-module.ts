import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {PageSContactComponent} from "./page-s-contact.component";
import {PageSubmenuLegalPluginModule} from "../page-submenu-legal-plugin/page-submenu-legal-plugin.module";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    PageSubmenuLegalPluginModule
  ],
  declarations: [PageSContactComponent],
  exports: [PageSContactComponent],
  providers: []
})

export class PageSContactPluginModule { }
