import {Component, NgZone} from '@angular/core';
import {HyuDealersService, HyuDealer} from "../../../hyu-dealers.service";
import {MapsAPILoader} from "angular2-google-maps/core";

declare var  google:any;

@Component({
  selector: '[hyu-footer]',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent {
  private dealers:HyuDealer[];
  private geolocating:boolean;

  q:string;
  bounds:any;
  lat:number;
  lng:number;
  zoom:number = 13;
  selected:HyuDealer;

  constructor(private http:HyuDealersService,
              private gmapsApi: MapsAPILoader,
              private zone:NgZone) {

    this.dealers = [];

    this.lat = 19.4361609;
    this.lng = -99.13731359999997;
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
    this.bounds = this.generateBounds(this.dealers);
    this.setLatLng(this.bounds);
  }

  MarkerClicked(dealer:HyuDealer){
    this.selected = dealer
  }

  private generateBounds(markers:HyuDealer[]): void {
    let bounds = new google.maps.LatLngBounds();

    if (markers && markers.length > 0){
      // Center at the nearest location
      bounds.extend(
        new google.maps.LatLng(
          {
            lat: markers[0].lat,
            lng: markers[0].lng
          }
          )
      );

      /*
       markers.forEach((marker: any) => {
        bounds.extend(new google.maps.LatLng({lat: marker.lat, lng: marker.lng}));
       });
      */
    }

    else
    // Mexico centered
      bounds.extend(
        new google.maps.LatLng({lat: 19.4361609, lng: -99.13731359999997 })
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

