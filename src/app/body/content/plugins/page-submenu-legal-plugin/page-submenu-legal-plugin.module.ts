import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {PageSubmenuLegalPluginComponent} from "./page-submenu-legal-plugin.component";

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [PageSubmenuLegalPluginComponent],
  exports: [PageSubmenuLegalPluginComponent],
  providers: []
})

export class PageSubmenuLegalPluginModule { }
