import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;
declare var Foundation:any;

@Component({
  selector: 'hyu-page-promotions-plugin',
  templateUrl: './page-s-promotions.component.html',
  styleUrls: ['./page-s-promotions.component.scss']
})
export class PageSPromotionsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  	setTimeout(
      () => {

        if($.fn.fullpage.destroy)
          $.fn.fullpage.destroy('all');

        $('#hyundai-content').fullpage({
          slidesNavigation: true,
          controlArrows: false,
          navigation: true,
          navigationPosition: 'right',
          menu: '#legal-submenu-ancla',
          anchors: ['legal']
        })
      }
      , 100);
  }

}
