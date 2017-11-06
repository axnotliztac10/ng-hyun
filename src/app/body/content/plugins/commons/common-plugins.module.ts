import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule, GoogleMapsAPIWrapper} from "angular2-google-maps/core";

import {FooterComponent} from "./footer/footer.component";
import {FullpageSlidePluginComponent } from './fullpage-slide-plugin/fullpage-slide-plugin.component';
import {OwlPluginComponent } from './owl-plugin/owl-plugin.component';
import {View360Component } from './view-360/view-360.component';
import { Color360Component } from './view-360/color-360/color-360.component';
import {SpritespinPluginComponent } from './spritespin-plugin/spritespin-plugin.component';

import {HyuDealersService} from "../../hyu-dealers.service";
import { DealersMapComponent } from './dealers-map/dealers-map.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot(
      {
        apiKey: 'AIzaSyBqgm99Iffg7FqQDTjwV9QvfYuaVmYcE1c',
        libraries: ['places']
      }
    ),
  ],
  declarations: [
    FooterComponent,
    FullpageSlidePluginComponent,
    OwlPluginComponent,
    View360Component,
      Color360Component,
    SpritespinPluginComponent,
    DealersMapComponent,
    VideoPlayerComponent,
  ],
  exports: [
    FooterComponent,
    FullpageSlidePluginComponent,
    OwlPluginComponent,
    View360Component,
    DealersMapComponent,
    VideoPlayerComponent
  ],
  providers: [HyuDealersService, GoogleMapsAPIWrapper]
})

export class CommonPluginsModule { }
