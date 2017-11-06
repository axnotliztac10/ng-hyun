import { NgModule } from '@angular/core';

import {SafeurlPipe} from "./safeurl.pipe";

@NgModule({
  declarations: [SafeurlPipe],
  exports: [SafeurlPipe]
})

export class PipesModule { }
