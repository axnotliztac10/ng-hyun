import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;
declare var Foundation:any;

@Component({
  selector: 'hyu-page-s-finance',
  templateUrl: './page-s-finance.component.html',
  styleUrls: ['./page-s-finance.component.scss']
})
export class PageSFinanceComponent implements OnInit, AfterViewInit{

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
          menu: '#meet-submenu-ancla',
          anchors: ['finance']
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
        $('.callout').foundation();
        window.addEventListener("message",
          () => {
            location.href = "/"
          }, false);
      }, 70
    );

  }

}
