import { Component, OnInit, AfterViewInit } from '@angular/core';
import {HyuHeaderDataService, HyuH} from "./hyu-header-data.service";

declare var $: any;
declare var foundation: any;

@Component({
  selector: 'hyu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  private header:HyuH;

  constructor(private http:HyuHeaderDataService) {
    this.header = new HyuH([], []);

    this.http.query()
      .subscribe(
        (r:HyuH) => this.header = r
      );
  }
  menuclose(){

    $("#modelos-menu").hide();

    $('#modelos-menu').foundation('close');
    // $('#modelos-menu').hide();
    $('#servicios-menu').foundation('close');
    $('#extras-menu').foundation('close');

    setTimeout(function(){
      $("#modelos-menu").show();
    }, 100);
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // This changes everything
    "use strict";

    // retrieve the element
        var element = document.getElementById("test");

    // reset the transition by...
        element.addEventListener("click", function(e){
          e.preventDefault;

          // -> removing the class
          element.classList.remove("run-animation");

          // -> triggering reflow /* The actual magic */
          // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
          // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
          // element.offsetWidth = element.offsetWidth;

          void element.offsetWidth;

          // -> and re-adding the class
          element.classList.add("run-animation");

          // console.log("---------------------------------- menu close close menu --------");


        }, false);

    // $(window).click( function(){
    //   console.log("****************** click on body");
    // });

    /*
    $('body').click(function(evt){
      if(evt.target.id == "modelos-menu") {
        console.log("modelos-menu");
        return;
      }
      //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
      if($(evt.target).closest('#modelos-menu').length){
        console.log("modelos-menu");
        return;
      }


      //Do processing of click event here for every element except with id menu_content
      console.log("****************** click on body");
    });
    */

    $("modelos-menu").on('closed', function () {
      console.log('is closed');
    });

  }

}
