import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {HeaderComponent} from "./header.component";
import { ProductsComponent } from './products/products.component';
import {HyuHeaderDataService} from "./hyu-header-data.service";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule
  ],
  declarations: [HeaderComponent, ProductsComponent],
  exports: [HeaderComponent],
  providers: [HyuHeaderDataService]
})

export class HeaderModule { }
