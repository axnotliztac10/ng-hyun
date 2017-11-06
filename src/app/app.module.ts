import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routes} from "./app.routing";

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HeaderModule} from "./header/header.module";
import {BodyModule} from "./body/body.module";

import {HyuHttpService} from "./services/hyu-http.service";

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    BodyModule
  ],
  providers: [HyuHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
