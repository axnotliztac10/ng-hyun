import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {PageSPrivacyComponent} from "./page-s-privacy.component";
import {PageSubmenuLegalPluginModule} from "../page-submenu-legal-plugin/page-submenu-legal-plugin.module";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    PageSubmenuLegalPluginModule
  ],
  declarations: [PageSPrivacyComponent],
  exports: [PageSPrivacyComponent],
  providers: []
})

export class PageSPrivacyPluginModule { }
