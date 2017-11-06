import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {PageSFinanceComponent} from "./page-s-finance.component";
import {PageSubmenuPluginModule} from "../page-submenu-plugin/page-submenu-plugin.module";

@NgModule({
  imports: [
    RouterModule,
    PageSubmenuPluginModule
  ],
  declarations: [PageSFinanceComponent],
  exports: [],
  providers: []
})

export class PageSFinancePluginModule { }
