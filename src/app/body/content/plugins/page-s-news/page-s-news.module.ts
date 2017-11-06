import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {PageSNewsComponent} from "./page-s-news.component";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule
  ],
  declarations: [PageSNewsComponent],
  exports: [PageSNewsComponent],
  providers: []
})

export class PageSNewsModule { }
