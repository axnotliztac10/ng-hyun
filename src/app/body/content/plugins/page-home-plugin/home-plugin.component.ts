import {Component, AfterViewInit} from '@angular/core';
import {HyuContentService} from "../../hyu-content.service";
import {HyuPage} from "../../content-serializer";

declare var $:any;

@Component({
  selector: 'hyu-home-plugin',
  template: `
    <div id="hyundai-content">
      <div class="section home-bgsection01">
        <hyu-slideshow-section [section]="page.screenplay[0]"></hyu-slideshow-section>
      </div>
      <div class="section home-bgsection02">
        <hyu-models-preview-section [section]="page.screenplay[1]"></hyu-models-preview-section>
      </div>
      <div class="section home-bgsection03">
        <hyu-news-preview-section [section]="page.screenplay[2]"></hyu-news-preview-section>
      </div>
      
      <div class="section footer-bgsection" id="footer" hyu-footer></div>
    </div>
  `,
  styleUrls: ['home-plugin.component.scss']
})
export class HomePluginComponent implements AfterViewInit {
  page:HyuPage;

  constructor(private http:HyuContentService) {
    this.page = new HyuPage('', '', '', '', '', '', '', '', '', [ [], [], [], [], [], [], [] ]);

    this.http
      .query()
      .subscribe(
        (r:HyuPage) => {
          this.page = r;
          this.ngAfterViewInit();
        }
      );
  }

  ngAfterViewInit(){

    if(this.page.id != ''){
      setTimeout(
        () => {

          if($.fn.fullpage.destroy)
            $.fn.fullpage.destroy('all');

          $('#hyundai-content').fullpage({
            slidesNavigation: true,
            controlArrows: false,
            navigation: true,
            navigationPosition: 'right',
            keyboardScrolling: false
          })
        }
        , 70);
    }

  }

}
