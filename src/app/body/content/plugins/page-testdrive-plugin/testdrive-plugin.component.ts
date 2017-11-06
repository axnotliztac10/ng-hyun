import {Component, AfterViewInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HyuPage, ContentSerializer} from "../../content-serializer";
import {HyuContentService} from "../../hyu-content.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HyuDealer} from "../../hyu-dealers.service";

declare var $:any;

@Component({
  selector: 'hyu-testdrive-plugin',
  templateUrl: './testdrive-plugin.component.html',
  styleUrls: ['./testdrive-plugin.component.scss']
})
export class TestdrivePluginComponent implements AfterViewInit{
  private subscription:Subscription;
  private homepage:HyuPage;
  private dealer:HyuDealer;
  private dealerUrl:string;
  private step:number = 0;
  private page:HyuPage;

  constructor(private http:HyuContentService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    this.homepage = new HyuPage('', '', '', '', '', '', '', '', '', [ [], [], [], [], [], [], [] ]);
    this.page = new HyuPage('', '', '', '', '', '', '', '', '', [ [], [], [], [], [], [], [] ]);
    this.dealerUrl = "";

    this.subscription = this.activatedRoute.params
      .subscribe(
        (params:any) => {
          if(params['product']){

            this.http
              .query(params['product'])
              .subscribe(
                (r:HyuPage) => {
                  this.page = r;
                  this.step++;

                  if(this.router.url.split("/").length == 4)
                    this.step++;

                  this.ngAfterViewInit();
                }
              );
          } else
            this.http
              .query()
              .subscribe((r:HyuPage) => {
                this.homepage = r;
                this.step = 0;
              });
        }
      );
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
            anchors: ['prueba']
          })

          $('#btn2_coches').trigger('click');
        }
        , 70);
    // }
  }

  // Step 1
  OnSelected(c:ContentSerializer){
    this.router.navigate(
      [c.link_to.replace('/', '')], { relativeTo: this.activatedRoute }
    )
  }

  // Step 2
  OnDealerClicked(d:HyuDealer){
    this.dealer = d;
    this.dealerUrl = '&distribuidor=' + this.dealer.name;
  }

  OnDealerSelected() {
    this.router.navigate(
      ['ahora'], {relativeTo: this.activatedRoute}
    )
  }
}
