import {Component, Input} from '@angular/core';

@Component({
  selector: 'hyu-automobile-plugin-header',
  templateUrl: './automobile-plugin-header.component.html',
  styleUrls: ['./automobile-plugin-header.component.scss']
})
export class AutomobilePluginHeaderComponent {
  @Input()
  base:string;

  constructor() {
  }

}
