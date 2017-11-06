import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import {BodyComponent} from "./body.component";
import {ContentModule} from "./content/content.module";

@NgModule({
  imports: [
    RouterModule,
    ContentModule
  ],
  declarations: [BodyComponent],
  exports: [BodyComponent],
  providers: []
})

export class BodyModule { }
