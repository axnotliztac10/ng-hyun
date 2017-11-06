import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;
declare var Foundation:any;


@Component({
  selector: 'hyu-page-s-waranty',
  templateUrl: './page-s-waranty.component.html',
  styleUrls: ['./page-s-waranty.component.scss']
})

export class PageSWarantyComponent implements OnInit, AfterViewInit {

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
          menu: '#service-submenu-ancla',
          anchors: ['garantia']
        })
      }
      , 100);

    setTimeout(
      () => {
        $('.tabs').foundation();
        window.addEventListener("message",
          () => {
            location.href = "/"
          }, false);
      }, 70
    );

    setTimeout(
      () => {
        $('.reveal').foundation();
        window.addEventListener("message",
          () => {
            location.href = "/"
          }, false);
      }, 70
    );

    setTimeout(
      () => {
        $.getElementById('video').play();
        window.addEventListener("message",
          () => {
            location.href = "/"
          }, false);
      }, 70
    );


  }

}
