import {Component, AfterViewInit, Input} from '@angular/core';

declare var $:any;

@Component({
  selector: '[hyu-owl-plugin]',
  template: `
    <div id="{{owlid}}" class="owl-carousel owl-theme">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./owl-plugin.component.scss']
})
export class OwlPluginComponent implements AfterViewInit {

  @Input()
  owlresponsive:any = {
    0:{
      items:1,
      dots: true
    },
    600:{
      items:1
    },
    1024:{
      items:3
    }
  };

  @Input()
  owlloop: any ={
    loop: true
  };

  @Input()
  startFromBegining: boolean = false;

  private owlid:string;

  constructor() {
    this.owlid = 'owl-' + Date.now().toString();
  }

  ngAfterViewInit() {
    $( document ).ready(function() {
      $("#btn_coches").attr("class","activemodel");
      $("#btn_suv").removeClass("activemodel");
    });

    let owl = $('#' + this.owlid);

    var _index = 1;

    var owlCar = owl.owlCarousel({
      center: true,
      loop:this.owlloop,
      nav:false,
      navText: ['<img src="assets/hardcode/img/back.png" alt="Anterior">', '<img src="assets/hardcode/img/next.png" alt="Siguiente">'],
      navSpeed: 300,
      navContainer: ['.nav'],
      dots: false,
      mouseDrag: true,
      callbacks: true,
      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: 'URLHash',
      responsiveClass:true,
      responsive: this.owlresponsive
    });

    owlCar.on('translate.owl.carousel', function (e) {
      $('.security-content .the_other_gifs').each(function () {
        var img = $(this);

        img.attr('src', img.attr('src') + '?a=' + Math.random());
      });
    });


    if (!this.startFromBegining) {
      owl.trigger('to.owl.carousel', _index );
    }

    function callback(event) {
      // Provided by the core
      var element   = event.target;         // DOM element, in this example .owl-carousel
      var name      = event.type;           // Name of the event, in this example dragged
      var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
      var items     = event.item.count;     // Number of items
      var item      = event.item.index;     // Position of the current item
      // Provided by the navigation plugin
      var pages     = event.page.count;     // Number of pages
      var page      = event.page.index;     // Position of the current page
      var size      = event.page.size;      // Number of items per page
      console.log('------------------------------------------- ^_^ item: ' + item);
      console.log('------------------------------------------- ^_^ element: ' + element);
      console.log('------------------------------------------- ^_^ name: ' + name);

      //[attr.href]="'#' + c.title.toLowerCase()"

    }//function callback


    $('.owl-next').click(function() {
      //owl.trigger('next.owl.carousel');

      if(_index == 6){
        _index = 0;
        setOwlCarruselButtons(0);
      } else {
        _index++;
        if(_index > 3){
          setOwlCarruselButtons(1);
        }//if
      } //else

      console.log(">>>>>>> " + _index);
    })

    $('.owl-prev').click(function() {
      //owl.trigger('prev.owl.carousel', [300]);

      if(_index == 0){
        _index = 6;
        //console.log('va de 0 a 6');
        setOwlCarruselButtons(1);
      } else {
        _index--;
        if(_index < 4){
          setOwlCarruselButtons(0);
        }//if
      } //else

      console.log("<<<<<<< " + _index);

    })


    $("#btn_coches").click(function() {
      // $("#btn_coches").attr("class","activemodel");
      // $("#btn_suv").removeClass("activemodel");
      _index = 1;
      setOwlCarruselButtons(0);
      //window.location.hash = "Elantra";
    });

    $("#btn_suv").click(function() {
      // $("#btn_suv").attr("class","activemodel");
      // $("#btn_coches").removeClass("activemodel");
      _index = 5;
      setOwlCarruselButtons(1);
      //window.location.hash = "Tucson";
    });

    $('#btn2_coches').click(function () {
      window.location.hash = "coches";
      setOwlCarruselButtons(0);
    });

    $('#btn2_suv').click(function () {
      window.location.hash = "suv";
      setOwlCarruselButtons(1);
    });


    function setOwlCarruselButtons(_flag) {
      switch (_flag){
        case 0:
          $("#btn_coches, #btn2_coches").attr("class","activemodel");
          $("#btn_suv, #btn2_suv").removeClass("activemodel");
          break;
        case 1:
          $("#btn_suv, #btn2_suv").attr("class","activemodel");
          $("#btn_coches, #btn2_coches").removeClass("activemodel");
          break;
      }//switch
    }


  }

}
