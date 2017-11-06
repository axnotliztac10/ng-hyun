import { Component } from '@angular/core';

@Component({
  selector: 'hyu-body',
  template: `
  <div class="row expanded">
    <router-outlet></router-outlet>
  </div>
  `
})
export class BodyComponent {
  constructor() { }
}
