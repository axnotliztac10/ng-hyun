import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {CommonPluginsModule} from "../commons/common-plugins.module";

import {HomePluginModule} from "../page-home-plugin/home-plugin.module";
import {TestdrivePluginComponent} from "./testdrive-plugin.component";
import {PageSubmenuPluginModule} from "../page-submenu-plugin/page-submenu-plugin.module";
import {PipesModule} from "../../../../pipes/pipes.module";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    CommonPluginsModule,
    HomePluginModule,
    PageSubmenuPluginModule,
    PipesModule
  ],
  declarations: [TestdrivePluginComponent],
  exports: [TestdrivePluginComponent],
  providers: []
})

export class TestdrivePluginModule { }
