import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ContentSerializer} from "../../../content-serializer";

@Component({
  selector: 'hyu-models-preview-section',
  templateUrl: './models-preview-section.component.html',
  styleUrls: ['./models-preview-section.component.scss']
})
export class ModelsPreviewSectionComponent implements OnChanges {
  @Input()
  section:ContentSerializer[];

  @Input()
  selectionEnabled:boolean = false;

  @Output()
  onselected:EventEmitter<ContentSerializer>;

  @Input()
  showall:boolean = true;

  items:Array<any>;
  current:ContentSerializer;

  constructor() {
    this.onselected = new EventEmitter<ContentSerializer>();
    this.section = [
      new ContentSerializer('', '', '', '', '', '', '', '', '', [], [])
    ]
  }

  Click(c:ContentSerializer) {
    this.onselected.emit(c);
    this.current = c;

    var actualRoute = window.location.pathname;
    window.location.pathname = actualRoute + c.link_to;
  }

  ngOnChanges(){
    if(this.section.length > 0){
      this.items = [];
      this.section.map(
        (s) => {
          s.children.map(
            (c) => {
              c.children[1].alt_text = c.title.toLowerCase();

              this.items = this.items.concat(c.children)
            }
          )
        }
      );
    }
  }

}
