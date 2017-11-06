import {Component, Input, AfterViewInit, OnChanges, OnInit} from '@angular/core';
import {View360HotspotContentSerializer, ContentSerializer} from "../../../content-serializer";

declare var $:any;
declare var Foundation:any;
declare var SpriteSpin:any;

@Component({
  selector: 'hyu-spritespin-plugin',
  templateUrl: './spritespin-plugin.component.html',
  styleUrls: ['./spritespin-plugin.component.scss']
})
export class SpritespinPluginComponent implements OnInit, AfterViewInit, OnChanges {
  @Input()
  frames:string[];

  @Input()
  hspots:View360HotspotContentSerializer[];

  @Input()
  panorama_src:string;

  private refer_to:ContentSerializer;
  private spritespinContainerId:string;
  private spritespinModalId:string;
  private spritespinId:string;
  private spritespin:any;
  private api:any;
  private popup:any;
  private detailIndex = 0;
  private details = [];

  constructor() {
    this.refer_to = new ContentSerializer(
      './assets/hardcode/img/bg-busqueda.jpg', './assets/hardcode/img/bg-busqueda.jpg', '', '', '', '', '', '', ''
    );
    this.spritespinId = "sprite" + Date.now().toString();
    this.spritespinContainerId = "container-" + this.spritespinId;
    this.spritespinModalId = 'modal-' + this.spritespinId;
    this.panorama_src = null;
    this.frames = [];
    this.hspots = [];
  }

  ngOnInit(){
    $( "#prev" ).click(() => {
      this.setDetailIndex(this.detailIndex - 1);

    });

    $( "#next" ).click(() => {
      this.setDetailIndex(this.detailIndex + 1);
    });
  }

  ngAfterViewInit() {
    this.spritespin = $('#' + this.spritespinId);

    //let source = SpriteSpin.sourceArray('assets/hardcode/img/Tucson/Ash_Blue/TLe_Ash_Blue_1024_{frame}.png', { frame: [0,35], digits: 1 });
    let options;
    var bol_option = 1;
    setTimeout(() => {
      // init 360
      if(this.panorama_src != null){
        bol_option = 1;
        options = {
          //renderer: 'images',
          responsive: true,
          source: this.panorama_src,
          //animate: false,
          width: 600,
          height: 800,
          mods: [
            // change frame on mouse drag
            'drag',
            // enable the easing module. this will ease out the animation
            // after mouse release, instead of a hard stop
            'ease',
            // the panorama display module
            'panorama'
          ]
        };
      }else {
        bol_option = 2;
        options = {
          renderer: 'canvas',
          responsive: true,
          behavior: 'drag',
          source: this.frames,
          animate: false,
          sense: -1,
          loop: false,
          stopFrame: 0,
          wrap: false
        };
      }

      // Spritespin setup
      this.spritespin.spritespin(options);

      // Hotspots
      this.api = this.spritespin.spritespin("api");

      // Details control
      let container:string = "." + this.spritespinContainerId;
      let panoramic = this.panorama_src != null;
      let detailsDOM:any = $(container);

      let range:number = 5500;
      let inRange = (index, frame, range):boolean => {
        // console.log(' <<<<< inRange :: index ::' + index +  " frame :: " + frame + " range :: " + range);

        return (index > frame - range) && (index < frame + range);

      };


      let rangeItem:number = 350;
      let inRangeItem = (index, frame, rangeItem):boolean => {
        //console.log(' <<<<< inRangeItem :: index ::' + index +  " frame :: " + frame + " rangeItem :: " + rangeItem);

        return (index > frame - rangeItem) && (index < frame + rangeItem);
      };




      this.spritespin
        .bind("onLoad", () => {
          let data = this.api.data;
          data.stage.prepend(detailsDOM); // add current details
          detailsDOM.hide();              // hide current details
          //alert(bol_option);
          if (bol_option == 2) {
            $(container.replace('.', '#') + ' .spritespin-stage').css('background-size', '');
          }

          //
        })
        .bind("onFrame", () => {
          let data = this.api.data;

          if(panoramic){
            let finder = this.details.filter((d) => inRange(d, data.frame, range));



            if(finder.length > 0) {
              // detailsDOM.stop(false).hide();
              $(container + ".detail-" +finder[0]).stop(false).show();





              for(var i = 0; i< $(container + ".detail-" +finder[0]).children().length ;i = i+2){

                if(inRangeItem($(container + ".detail-" + finder[0]).children().eq(i).offset().left,data.frame,rangeItem)){
                  $(container + ".detail-" + finder[0]).children().eq(i).show();
                }else{
                  $(container + ".detail-" + finder[0]).children().eq(i).hide();
                }


              }




            } else {
              // detailsDOM.stop(false).hide();
            }
          } else {
            detailsDOM.stop(false).hide();
            $(container + ".detail-" + data.frame).stop(false).show();
          }

        });

    }, 70);

  }

  ngOnChanges() {
    this.details = this.hspots.map((hs:View360HotspotContentSerializer) => hs.init_frame);
    this.ngAfterViewInit();
  }

  HsClick(hs:View360HotspotContentSerializer) {
    let popup = $('#' + this.spritespinModalId);
    if(!this.popup){
      this.popup = new Foundation.Reveal(popup);
    }
    this.popup.open();
    this.refer_to = hs.refer_to
  }



  private setDetailIndex(index){


    //console.log(' <<<<< setDetailIndex :: index ::' + index );



    this.detailIndex = index;
    if (this.detailIndex < 0){
      this.detailIndex = this.details.length - 1;
    }
    if (this.detailIndex >= this.details.length){
      this.detailIndex = 0;
    }
    this.api.playTo(this.details[this.detailIndex]);


  }


}
