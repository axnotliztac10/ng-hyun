import {Component, Input, Output, EventEmitter} from '@angular/core';
import {View360ColorSelectorContentSerializer} from "../../../../content-serializer";

@Component({
  selector: 'hyu-color-360',
  template: `
    <div class="row expanded">
          <hyu-spritespin-plugin [frames]="color?.frames_src"
                                 [hspots]="color?.hotspots"
                                 [panorama_src]="color?.frames_src.length == 1 ? color?.frames_src[0] : null"
          ></hyu-spritespin-plugin>
    </div>
  `
})

export class Color360Component {

  @Input()
    color :View360ColorSelectorContentSerializer;

  @Input()
    as_panorama:boolean;

  constructor() {
    this.as_panorama = false;
  }

}
