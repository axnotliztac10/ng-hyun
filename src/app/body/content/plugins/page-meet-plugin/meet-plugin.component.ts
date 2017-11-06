import {Component, AfterViewInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HyuPage, View360ColorSelectorContentSerializer, ContentSerializer} from "../../content-serializer";
import {HyuContentService} from "../../hyu-content.service";
import {ActivatedRoute, Router} from "@angular/router";

declare var $:any;
declare var Foundation:any;
declare var iFrameResize:any;

@Component({
  selector: 'hyu-meet-plugin',
  templateUrl: './meet-plugin.component.html',
  styleUrls: ['./meet-plugin.component.scss']
})
export class MeetPluginComponent implements AfterViewInit{
  private subscription:Subscription;
  private base:string = '-';
  private baseVersion:string = '-';
  private homepage:HyuPage;
  private page:HyuPage;
  private step:number = 0;

  private clicked:number = 0;
  private listener:boolean;

  private versions:ContentSerializer[];
  private currentVersion:ContentSerializer;
  private currentVersionExteriorColors:View360ColorSelectorContentSerializer[];
  private currentVersionInteriorColors:View360ColorSelectorContentSerializer[];
  private currentVersionExteriorColor:View360ColorSelectorContentSerializer;
  private currentVersionInteriorColor:View360ColorSelectorContentSerializer;


  constructor(private http:HyuContentService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    this.homepage = new HyuPage('', '', '', '', '', '', '', '', '', [ [], [], [], [], [], [], [] ]);
    this.page = new HyuPage('', '', '', '', '', '', '', '', '', [ [], [], [], [], [], [], [] ]);

    this.subscription = this.activatedRoute.params
      .subscribe(
        (params:any) => {
          if(params['product']){
            this.base = params['product'];

            this.http
              .query(this.base)
              .subscribe(
                (r:HyuPage) => {
                  this.page = r;
                  this.versions = this.page.screenplay[5][0].children;
                  this.initAccordion();
                  this.step++;

                  if(params['version']){

                    this.step++;
                    this.baseVersion = params['version'];
                    this.currentVersion = this.versions.filter(
                      (v) => v.caption_text.toLowerCase().split(" ")[0] == this.baseVersion
                    )[0];
                    this.setVersionData();
                  }

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
            anchors: ['cotizar']
          })

          $('#btn2_coches').trigger('click');
          if (localStorage.getItem('goTo4') == 'true') {
            var minVer = localStorage.getItem('version');

            for (var i in this.versions) {
              if (this.versions[i].caption_text == minVer) {
                this.currentVersion = this.versions[i];
              }
            }

            this.MoveTo4();
            localStorage.clear();
          }
        }
        , 100);

      // $('iframe').iFrameResize( {
      //   autoResize: true
      // } );
    // }
  }

  itemshow = {
    0:{
      items:1,
      dots: true
    }
  };



  // Step 1
  OnSelected(c:ContentSerializer){
    this.router.navigate(
      [c.link_to.replace('/', '')], { relativeTo: this.activatedRoute }
    );
    this.initAccordion();
  }

  initAccordion(){
    //this.currentVersion = null;

    setTimeout(
      () => $('.accordion').foundation(), 500
    );

  }

  // Step 2
  OnVersionClicked(v:ContentSerializer){
    this.clicked += (this.currentVersion === v) ? 1 : 0;
    this.clicked = this.clicked % 2;
    this.currentVersion = v;
  }

  OnVersionSelected(){
    this.MoveTo4();

    /*this.router.navigate(
      [
        this.currentVersion.caption_text.toLowerCase().split(" ")[0]
      ], { relativeTo: this.activatedRoute }
    )*/
  }

  // Step 3
  VersionExteriorColorSelected(c:View360ColorSelectorContentSerializer){
    this.currentVersionExteriorColor = c;
  }
  VersionInteriorColorSelected(c:View360ColorSelectorContentSerializer){
    this.currentVersionInteriorColor = c;
  }
  MoveTo4() {
    this.step = 3;

    setTimeout(
      () => {
        $('.dropdown.menu').foundation();
        window.addEventListener("message",
          () => {
            location.href = "/"
          }, false);
      }, 70
    );
  }

  //Step 4
  OnVersionChanged(newVersion:ContentSerializer){
    this.currentVersion = newVersion;
    this.setVersionData();
  }

  private setVersionData() {
    let v = this.currentVersion.children;

    if (v[0] && v[0].colors.length) {
      this.currentVersionExteriorColors = v[v.length - 2].colors;
      this.currentVersionInteriorColors = v[v.length - 1].colors;

      this.currentVersionExteriorColor = this.currentVersionExteriorColors[0];
      this.currentVersionInteriorColor = this.currentVersionInteriorColors[0];
    }
  }
}
