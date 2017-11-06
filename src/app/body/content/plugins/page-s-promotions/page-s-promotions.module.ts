import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {PageSPromotionsComponent} from "./page-s-promotions.component";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule
  ],
  declarations: [PageSPromotionsComponent],
  exports: [PageSPromotionsComponent],
  providers: []
})

export class PageSPromotionsModule { }
