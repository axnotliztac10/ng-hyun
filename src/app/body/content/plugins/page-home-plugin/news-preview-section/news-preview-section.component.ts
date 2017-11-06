import {Component, Input} from '@angular/core';
import {ContentSerializer} from "../../../content-serializer";

@Component({
  selector: 'hyu-news-preview-section',
  templateUrl: './news-preview-section.component.html',
  styleUrls: ['./news-preview-section.component.scss']
})
export class NewsPreviewSectionComponent {
  @Input()
  section:ContentSerializer[];

  constructor() { }

}
