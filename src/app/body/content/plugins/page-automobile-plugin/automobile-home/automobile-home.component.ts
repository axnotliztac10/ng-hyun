import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {ContentSerializer} from "../../../content-serializer";

declare var $:any;
declare var Foundation:any;

@Component({
  selector: 'hyu-automobile-home',
  templateUrl: './automobile-home.component.html',
  styleUrls: ['./automobile-home.component.scss']
})
export class AutomobileHomeComponent implements AfterViewInit{
  @Input()
  section:ContentSerializer[];

  loopId: number;

  constructor() { }


  ngAfterViewInit(){

    this.loopId = setInterval(() => {
        // let h = 0;
        // for (let slide of this.section) {
        //   var $slideImage = $('#data-img-' + h);
        //   $('#data-img-' + h).attr('src','notting');
        //   h++;
        // }


        let i = 0;
        for (let slide of this.section) {
          var $slideImage = $('#data-img-' + i);
          //console.log($slideImage.src);
          var interchange = new Foundation.Interchange($slideImage, {
            rules: [
              "[" + slide.portrait_src + ", small]",
              "[" + slide.landscape_src + ", medium]"
            ]
          });
          i++;
        }

      }
      , 500);

     /*
     setTimeout(() => {
         let i = 0;
         for (let slide of this.section) {
           var $slideImage = $('#data-img-' + i);
           var interchange = new Foundation.Interchange($slideImage, {
             rules: [
               "[" + slide.portrait_src + ", small]",
               "[" + slide.landscape_src + ", medium]"
             ]
           });
           i++;
         }

       }
       , 1000);
       */
  }

  ngOnDestroy () {
    clearInterval(this.loopId)
  }
}
