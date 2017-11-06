import {Component, Input} from '@angular/core';
import {ContentSerializer} from "../../../content-serializer";

@Component({
  selector: 'hyu-interior-details',
  templateUrl: './interior-details.component.html',
  styleUrls: ['./interior-details.component.scss']
})
export class InteriorDetailsComponent {
  @Input()
    section:ContentSerializer[];

  constructor() { }
}
