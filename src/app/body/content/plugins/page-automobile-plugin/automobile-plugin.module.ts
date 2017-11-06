import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import {CommonPluginsModule} from "../commons/common-plugins.module";

import {AutomobilePluginComponent} from "./automobile-plugin.component";
import { ExteriorDetailsComponent } from './exterior-details/exterior-details.component';
import { InteriorDetailsComponent } from './interior-details/interior-details.component';
import { PerformanceDetailsComponent } from './performance-details/performance-details.component';
import { SecurityDetailsComponent } from './security-details/security-details.component';
import { VersionDetailsComponent } from './version-details/version-details.component';
import { AutomobileHomeComponent } from './automobile-home/automobile-home.component';
import { AutomobilePluginHeaderComponent } from './automobile-plugin-header/automobile-plugin-header.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    CommonPluginsModule
  ],
  declarations: [AutomobilePluginComponent, ExteriorDetailsComponent, InteriorDetailsComponent, PerformanceDetailsComponent, SecurityDetailsComponent, VersionDetailsComponent, AutomobileHomeComponent, AutomobilePluginHeaderComponent],
  exports: [AutomobilePluginComponent, AutomobilePluginHeaderComponent],
  providers: []
})

export class AutomobilePluginModule { }
