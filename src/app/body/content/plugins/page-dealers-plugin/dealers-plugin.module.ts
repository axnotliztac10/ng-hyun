import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {DealersPluginComponent} from "./dealers-plugin.component";
import {CommonPluginsModule} from "../commons/common-plugins.module";
import {PageSubmenuPluginModule} from "../page-submenu-plugin/page-submenu-plugin.module";

@NgModule({
  imports: [
    RouterModule,
    CommonPluginsModule,
    PageSubmenuPluginModule
  ],
  declarations: [DealersPluginComponent],
  exports: [DealersPluginComponent],
  providers: []
})

export class DealersPluginModule { }
