import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hyu-fullpage-slide-plugin',
  template: `
    <div class="slide">      
        <div class="small-11 small-centered no-padding columns">
          <ng-content></ng-content>
        </div>      
    </div>
  `,
  styleUrls: ['./fullpage-slide-plugin.component.scss']
})
export class FullpageSlidePluginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
