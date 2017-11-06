import {Component, NgZone, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {HyuDealer, HyuDealersService} from "../../../hyu-dealers.service";
import {MapsAPILoader} from "angular2-google-maps/core";

declare var google:any;

@Component({
  selector: 'hyu-dealers-map',
  templateUrl: './dealers-map.component.html',
  styleUrls: ['./dealers-map.component.scss']
})
export class DealersMapComponent implements OnInit{
  @Input()
  showall:boolean = false;

  @Input()
  showHeader:boolean = true;

  @Output()
  ondealerselected:EventEmitter<HyuDealer>;

  private dealers:HyuDealer[];
  private geolocating:boolean;

  //Mexico Centro histórico
  private _lat:number = 19.4361609;
  private _lng:number = -99.13731359999997;

  q:string;
  bounds:any;
  lat:number;
  lng:number;
  zoom:number = 13;
  selected:HyuDealer;

  constructor(private http:HyuDealersService,
              private gmapsApi: MapsAPILoader,
              private zone:NgZone) {
    this.ondealerselected = new EventEmitter<HyuDealer>();
    this.dealers = [];

    this.lat = this._lat;
    this.lng = this._lng;
    this.bounds = {};

    this.gmapsApi
      .load()
      .then(
        () => {
          this.UpdateMap();

          var autocomplete:any;
          var inputAddress = document.getElementById("dealers-search-box");
          autocomplete = new google.maps.places.Autocomplete(inputAddress, {});

          google.maps.event.addListener(autocomplete, 'place_changed', ()=> {
            this.zone.run(() => {
              this.geolocating = true;
              var place = autocomplete.getPlace();
              if(place.geometry)
                this.search(
                  'q=' + place.name,
                  place.geometry.location.lat(),
                  place.geometry.location.lng()
                );
              else
                this.search('q=' + place.name, 0, 0)
            });

          });
        }
      )
  }

  ngOnInit() {
    if(this.showall){
      this.http
        .query('')
        .subscribe(
          (r:HyuDealer[]) => {
            this.dealers = r;
            this.geolocating = false;
            this.bounds = this.generateBounds(this.dealers, true);
          }
        );
    }
  }

  Geolocate(qtext:string = "Ubicación actual"){
    this.geolocating = true;
    navigator
      .geolocation
      .getCurrentPosition(
        (position:any) => {
          this.search(
            "q[]=" + position.coords.latitude + "&q[]=" + position.coords.longitude,
            position.coords.latitude,
            position.coords.longitude
          );
          this.q = qtext;
        }
      )
  }

  UpdateMap() {
    this.bounds = this.generateBounds(this.dealers, this.showall);
    this.setLatLng(this.bounds);
  }

  MarkerClicked(dealer:HyuDealer){
    this.ondealerselected.emit(dealer);
    this.selected = dealer;
  }

  private generateBounds(markers:HyuDealer[], all:boolean = false): void {
    let bounds = new google.maps.LatLngBounds();

    if(all)
      markers.forEach((marker: any) => {
        bounds.extend(new google.maps.LatLng({lat: marker.lat, lng: marker.lng}));
      });
    else
    // Center at the nearest location
      if (markers && markers.length > 0)
        bounds.extend(
          new google.maps.LatLng(
            {
              lat: markers[0].lat,
              lng: markers[0].lng
            }
          )
        );
      else
      // Mexico centered
        bounds.extend(
          new google.maps.LatLng({lat: this._lat, lng: this._lng })
        );

    //check if there is only one marker
    if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
      var extendPoint = new google.maps.LatLng(
        bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01
      );
      bounds.extend(extendPoint);
    }

    return bounds;
  }

  private setLatLng(bounds:any){
    let data = {
      northeast: {
        latitude: bounds.getNorthEast().lat(),
        longitude: bounds.getNorthEast().lng()
      },
      southwest: {
        latitude: bounds.getSouthWest().lat(),
        longitude: bounds.getSouthWest().lng()
      }
    };

    this.lat = (data.northeast.latitude + data.southwest.latitude) / 2;
    this.lng = (data.northeast.longitude + data.southwest.longitude) / 2;
  }

  private search(q:string, lat:number, lng:number){
    this.http
      .query(q)
      .subscribe(
        (r:HyuDealer[]) => {
          this.dealers = r;

          if(this.dealers.length == 0){
            this.bounds = this.generateBounds(
              [
                new HyuDealer('', '', '', '', '', '', '', '', '', '', '', lat, lng, '', '', '', '', '')
              ]
            );
          } else {
            this.selected = this.dealers[0];
            this.bounds = this.generateBounds(this.dealers);
          }
          this.geolocating = false;
        }
      );
  }
}
