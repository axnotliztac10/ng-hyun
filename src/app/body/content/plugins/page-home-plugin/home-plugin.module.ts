import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import {CommonPluginsModule} from "../commons/common-plugins.module";

import {HomePluginComponent} from "./home-plugin.component";
import { SlideshowSectionComponent } from './slideshow-section/slideshow-section.component';
import { ModelsPreviewSectionComponent } from './models-preview-section/models-preview-section.component';
import { NewsPreviewSectionComponent } from './news-preview-section/news-preview-section.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    CommonPluginsModule
  ],
  declarations: [HomePluginComponent, SlideshowSectionComponent, ModelsPreviewSectionComponent, NewsPreviewSectionComponent],
  exports: [HomePluginComponent, ModelsPreviewSectionComponent],
  providers: []
})

export class HomePluginModule { }
