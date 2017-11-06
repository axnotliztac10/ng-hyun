import {Component, ViewChild, Input, AfterViewInit} from '@angular/core';

declare var $:any;

@Component({
  selector: 'hyu-video-player',
  template: `

  <video loop autoplay #videoPlayer (click)="ToggleVideo(i)">
    <source [src]="src" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>/>
    Browser not supported
  </video>
    <a id="volUp"><img src="/assets/hardcode/img/volume0.png" alt="volumen"></a>
`,
  styles: [`
    video {
      width: 100%;
    }
    #volUp{
    display: block;
    position:absolute;
    width:50px;
    height: 50px;
    bottom: 60px;
    right: 40px;
    }
    
  `]
})
export class VideoPlayerComponent implements AfterViewInit {
  @Input()
  src:string;

  @ViewChild('videoPlayer')
  videoplayer: any;

  constructor() {
    this.src = '';
  }

  ngAfterViewInit(){

    $.fn.isOnScreen = function(){

      var win = $(window);

      var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft(),
        right : null,
        bottom : null
      };
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();

      var bounds = this.offset();
      bounds.right = bounds.left + this.outerWidth();
      bounds.bottom = bounds.top + this.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };

    $( document ).ready(function() {

      setInterval (function () {
        $('video').each(function(){
          //console.log('aqui');
          //if ($(this).is(":in-viewport")) {
          if ($(this).isOnScreen()) {
            //console.log('-------------------------- video play');
            $(this)[0].play();
          } else {
            //console.log('-------------------------- video pause');
            $(this)[0].pause();
          }
        });
      }, 1000);

    });


    var $video = $(this.videoplayer.nativeElement),
      videoElement = $video[0];
      videoElement.volume = 0;

    $video.on('canplaythrough',
      () => {
        if (videoElement.readyState > 3)
          this.videoplayer.nativeElement.play();
      }
    );


  //  volumen

    document.getElementById("volUp").addEventListener("click", function () {
      setVol(); // up by 10%
    }, false);


// change volume based on incoming value
    function setVol() {
      var vol = videoElement.volume;


      if(vol >= 0.9)
        vol = 0;
      else
        vol = 1;
      videoElement.volume = vol;
      //  test for range 0 - 1 to avoid exceptions
    }

  }
}
