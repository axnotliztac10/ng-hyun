import {Component, Input, AfterViewInit, OnChanges} from '@angular/core';
import {ContentSerializer} from "../../../content-serializer";

declare var $:any;

@Component({
  selector: 'hyu-version-details',
  templateUrl: './version-details.component.html',
  styleUrls: ['./version-details.component.scss']
})
export class VersionDetailsComponent implements AfterViewInit, OnChanges {
  @Input()
  base:string;

  @Input()
  section:ContentSerializer[];

  productPath: string;

  private owlresponsive: any = {
    0:{
      items:1,
      dots: true
    }
  };

  ngAfterViewInit(){


    if(this.section.length > 0){
      $(document).on('click', '.back-version', function(){
        $.fn.fullpage.moveTo(6, 0);
      });
    }

    this.productPath = localStorage.getItem('product');
  }

  ngOnChanges(){
    this.ngAfterViewInit();
  }

  setLocal(version){
    localStorage.setItem('goTo4', 'true');
    localStorage.setItem('version', version);
  }

  constructor() { }

}
