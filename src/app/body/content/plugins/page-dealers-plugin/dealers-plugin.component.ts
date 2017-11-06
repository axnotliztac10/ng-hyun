import { Component, AfterViewInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'hyu-dealers-plugin',
  template: `
    <hyu-page-submenu-plugin></hyu-page-submenu-plugin>
    <div id="hyundai-content">
      <div class="section bgsection01 dealers-section">
        
      <div class="small-11 small-centered text-center no-padding columns">
        <h2>Distribuidores <br><small>Siempre cerca de ti</small></h2>
      </div>
      
        <div class="small-11 small-centered columns no-padding distribuidores-mapa">
          <hyu-dealers-map [showall]="true" [showHeader]="false"></hyu-dealers-map>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dealers-plugin.component.scss']
})
export class DealersPluginComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(){

      setTimeout(
        () => {
          if($.fn.fullpage.destroy)
            $.fn.fullpage.destroy('all');

          $('#hyundai-content').fullpage({
            slidesNavigation: true,
            controlArrows: false,
            navigation: true,
            navigationPosition: 'right',
            menu: '#meet-submenu-ancla',
            anchors: ['distribuidores']
          })
        }
        , 70);

  }
}
