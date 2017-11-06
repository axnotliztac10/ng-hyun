import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {PageSTermsComponent} from "./page-s-terms.component";
import {PageSubmenuLegalPluginModule} from "../page-submenu-legal-plugin/page-submenu-legal-plugin.module";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    PageSubmenuLegalPluginModule
  ],
  declarations: [PageSTermsComponent],
  exports: [PageSTermsComponent],
  providers: []
})

export class PageSTermsPluginModule { }
