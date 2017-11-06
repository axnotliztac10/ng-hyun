import {Component, AfterViewInit} from '@angular/core';
import {HyuContentService} from "../../hyu-content.service";
import {HyuPage} from "../../content-serializer";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

declare var $:any;

@Component({
  selector: 'hyu-automobile-plugin',
  template: `
    <hyu-automobile-plugin-header [base]="base"></hyu-automobile-plugin-header>

    <div id="hyundai-content">
      <div class="section bgsection01">
          <hyu-automobile-home [section]="page.screenplay[0]"></hyu-automobile-home>
      </div>
      <div class="section bgsection02">
          <hyu-exterior-details *ngIf="exteriorInteriorCursor" [section]="page.screenplay[1]"></hyu-exterior-details>
      </div>
      <div class="section bgsection03">
          <hyu-interior-details *ngIf="exteriorInteriorCursor" [section]="page.screenplay[2]"></hyu-interior-details>
      </div>
      <div class="section bgsection04 no-slidenavigation">
          <hyu-performance-details [section]="page.screenplay[3]" [base]="base"></hyu-performance-details>
      </div>
      <div class="section bgsection05">
          <hyu-security-details [section]="page.screenplay[4]"></hyu-security-details>
      </div>
      <div class="section bgsection06 no-slidenavigation">
          <hyu-version-details [section]="page.screenplay[5]" [base]="base"></hyu-version-details>
      </div>
      
      <div class="section footer-bgsection f-models-version" id="footer" hyu-footer></div>

    </div>
  `,
  styleUrls: ['automobile-plugin.component.scss']
})
export class AutomobilePluginComponent implements AfterViewInit {
  private subscription:Subscription;
  private page:HyuPage;
  private base:string;
  nextStage: number;
  exteriorInteriorCursor:boolean = false;


  constructor(private http:HyuContentService,
              private activatedRoute:ActivatedRoute) {
    this.page = new HyuPage('', '', '', '', '', '', '', '', '', [ [], [], [], [], [], [], [] ]);

    this.subscription = this.activatedRoute.params
      .subscribe(
        (params:any) => {
          this.base = params['product'];

          this.http
            .query(this.base)
            .subscribe(
              (r:HyuPage) => {
                this.page = r;
                localStorage.setItem('product', this.page.path);
                this.ngAfterViewInit();
              }
            );
        }
      );


  }

  ngAfterViewInit() {
    var slideTimeout;
    var scope = this;

    if(this.page.id != '') {
      setTimeout(() => {
          if($.fn.fullpage.destroy)
            $.fn.fullpage.destroy('all');

          $('#hyundai-content').fullpage({
            slidesNavigation: true,
            controlArrows: false,
            navigation: true,
            navigationPosition: 'right',
            menu: '#modelos-submenu-ancla',
            anchors: ['','exterior', 'interior', 'performance', 'security', 'buy', ''],
            keyboardScrolling: false,
            lazyLoading: true,
            onLeave: function(index, nextIndex, direction) {
              $('.reveal-overlay').hide();
              if (nextIndex == 2 || nextIndex == 3) {
                scope.exteriorInteriorCursor = true;
              }

              sessionStorage.setItem('section', nextIndex);
            }
            // afterRender: function () {
            //     slideTimeout = setInterval(function () {
            //       $.fn.fullpage.moveSlideRight();
            //     }, 7000);
            // },
            // onLeave: function (index, nextIndex) {
            //   //after leaving section 1 (home) and going anywhere else, whether scrolling down to next section or clicking a nav link, this SHOULD stop the slideshow and allow you to navigate the site...but it does not
            //   if (nextIndex != 1 && index != 1) {
            //     // alert("clear interval ok");
            //     console.log('on leaving the slideshow/section1');
            //     clearInterval(slideTimeout);
            //   }
            // }
          });

          $(document).keydown(function(e) {
            e.preventDefault();
            e.stopPropagation();

            var lock = false;
            var nextStage = parseInt(sessionStorage.getItem('section'));
            if (nextStage == 4 || nextStage == 6) {
              lock = true;
            }

            switch(e.which) {
              case 37:
                if (lock) { return; }
                $.fn.fullpage.moveSlideLeft();
                break;
              case 38:
                $.fn.fullpage.moveSectionUp();
                break;
              case 39:
                if (lock) { return; }
                $.fn.fullpage.moveSlideRight();
                break;
              case 40:
                $.fn.fullpage.moveSectionDown();
                break;

              default: return;
            }
          });

        }
        , 70);
    }

  }

}
