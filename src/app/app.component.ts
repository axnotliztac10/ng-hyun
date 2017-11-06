import {Component, OnInit, AfterViewInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'hyu-root',
  template: `
    <hyu-header></hyu-header>
    <hyu-body></hyu-body>
  `
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(){
    $(document).foundation();
  }
}
