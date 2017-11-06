import {Component, Input} from '@angular/core';
import {ContentSerializer} from "../../../content-serializer";

@Component({
  selector: 'hyu-exterior-details',
  templateUrl: './exterior-details.component.html',
  styleUrls: ['./exterior-details.component.scss']
})
export class ExteriorDetailsComponent {
  @Input()
    section:ContentSerializer[];

  constructor() {}
}
