import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;
declare var Foundation:any;
declare var owlCarousel:any;

@Component({
  selector: 'hyu-page-s-assistance',
  templateUrl: './page-s-assistance.component.html',
  styleUrls: ['./page-s-assistance.component.scss']
})
export class PageSAssistanceComponent implements OnInit {

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
          anchors: ['asistencia']
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
        $(".owl-carousel").owlCarousel({
          items:1
        });
        window.addEventListener("message",
          () => {
            location.href = "/"
          }, false);
      }, 70
    );

  }

}
