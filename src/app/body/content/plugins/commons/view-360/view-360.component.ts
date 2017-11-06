import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {View360ColorSelectorContentSerializer} from "../../../content-serializer";

@Component({
  selector: 'hyu-view-360',
  template: `
    <hyu-color-360 
      [color]="current" 
      [as_panorama]="as_panorama">
    </hyu-color-360>
    
    <!--Boton de selección de color-->
    
    <div class="small-7 small-centered columns">
    <div class="row small-up-3 medium-up-8 nodisplay-color">
  <div class="column column-block color-select" *ngFor="let color of colors">
  <a (click)="Clicked(color)">
     <h6>{{color?.color_name}}</h6>
     <div class="color"
          [style.background]="color?.color_hex">
     </div>
   </a>
  </div>
</div>
    
</div>
    
  `,
  styleUrls: ['view-360.component.scss']
})
export class View360Component implements OnChanges{
  @Input()
  colors:View360ColorSelectorContentSerializer[];

  @Input()
  as_panorama:boolean;

  private current:View360ColorSelectorContentSerializer;

  constructor() {
    this.as_panorama = false;
  }

  ngOnChanges(){
    if(this.colors.length > 0)
      this.current = this.colors[0];
  }

  Clicked(color:View360ColorSelectorContentSerializer){
    this.current = color;
  }



}
