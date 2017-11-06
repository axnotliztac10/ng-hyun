import {Component, Input} from '@angular/core';
import {ContentSerializer} from "../../../content-serializer";

@Component({
  selector: 'hyu-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.scss']
})
export class SecurityDetailsComponent {
  @Input()
  section:ContentSerializer[];

  itemshow = {
    0:{
      items:1,
      dots: true
    }
  };

  constructor() { }



}
