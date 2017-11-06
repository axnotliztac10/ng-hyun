import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;
declare var Foundation:any;

@Component({
  selector: 'hyu-page-s-map',
  templateUrl: './page-s-map.component.html',
  styleUrls: ['./page-s-map.component.scss']
})
export class PageSMapComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    // if(this.page.id != ''){
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
          anchors: ['mapa']
        })
      }
      , 100);

    setTimeout(
      () => {
        $('.vertical').foundation();
        window.addEventListener("message",
          () => {
            location.href = "/"
          }, false);
      }, 70
    );

  }

}
