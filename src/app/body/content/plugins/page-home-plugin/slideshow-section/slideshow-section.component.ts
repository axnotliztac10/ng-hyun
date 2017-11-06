import {Component, Input, ViewChild} from '@angular/core';
import {ContentSerializer} from "../../../content-serializer";

declare var $:any;

@Component({
  selector: 'hyu-slideshow-section',
  templateUrl: './slideshow-section.component.html',
  styleUrls: ['./slideshow-section.component.scss']
})
export class SlideshowSectionComponent {
  @Input()
  section:ContentSerializer[];

  constructor() { }

}
