import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;
declare var Foundation:any;

@Component({
  selector: 'hyu-page-s-terms',
  templateUrl: './page-s-terms.component.html',
  styleUrls: ['./page-s-terms.component.scss']
})
export class PageSTermsComponent implements OnInit, AfterViewInit {

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
          anchors: ['terminos']
        })
      }
      , 100);

  }
}
