import {Component, OnInit, Input, AfterViewInit, OnChanges} from '@angular/core';
import {ContentSerializer} from "../../../content-serializer";

declare var $:any;

@Component({
  selector: 'hyu-performance-details',
  templateUrl: './performance-details.component.html',
  styleUrls: ['./performance-details.component.scss']
})
export class PerformanceDetailsComponent implements AfterViewInit, OnChanges
{
  @Input()
  base:string;

  @Input()
  section:ContentSerializer[];


  private itemshow = {
    0:{
      items:1,
      dots: true
    }
  };

  constructor() {
    this.section = [
      new ContentSerializer('', '', '', '', '', '', '', '', '', [], [])
    ]
  }

  ngAfterViewInit(){
    if(this.section.length > 0){
      $(document).on('click', '.back-performance', function(){
        $.fn.fullpage.moveTo(4, 0);
      });
    }

    $("#testEdgarGIF").hide();
    $(document).on('click', '.sorprendeme', function(){
      reloadGif();
      //alert("entre al sorprendeme");
    });


    function reloadGif()
    {
      setTimeout(() => {

        $("#testEdgarGIF").show();
        var the_src = $("#testEdgarGIF").attr('src');
        setTimeout(function () {
          $("#testEdgarGIF").attr('src', the_src);
        }, 0);

      }, 0);

      /*
       $( ".randomobject" ).each(function( index ) {
       //alert( index + ": " + $( this ).attr('src') );
       //alert($(this).attr('src'));
       var the_source = $(this).attr('src');
       $(this).show();
       setTimeout(function () {
       console.log("aqui lo cambio "+the_source)
       $(this).attr('src', the_source);
       }, (index*10));
       });
      */

      /*
      setTimeout(() => {

        $( ".the_gifs" ).each(function( index ) {
          var the_src = $(this).attr('src');
          //alert(index);
          $(this).show();
          setTimeout(function () {
            $(this).attr('src', the_src);
          }, 2);
        });

      }, 1000);
      */


    }
  }



  ngOnChanges(){
    this.ngAfterViewInit();

  }

}
