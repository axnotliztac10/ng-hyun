import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {HyuHttpService} from "../../services/hyu-http.service";

@Injectable()
export class HyuDealersService {
  private source:string ='dealers';

  constructor(private http: HyuHttpService) {}

  query(q:string): Observable<HyuDealer[]> {
    return this.http
      .query(this.source + '?' + q)
      .map(
        (d:any) => d.map(
          (r:any) => this.parseData(r)
        )
      )
  }

  private parseData(d:any):HyuDealer {
    return new HyuDealer(
      d.id,
      d.name,
      d.caption_text,
      d.email,
      d.webpage,
      d.address_text1,
      d.address_text2,
      d.zip_code,
      d.phone1,
      d.phone2,
      d.geo_state_id,
      d.lat,
      d.lng,
      d.map_name,
      d.fb,
      d.tw,
      d.schedule,
      d.updated_at
    );
  }
}

export class HyuDealer {
  constructor(public id:string,
              public name:string,
              public caption_text:string,
              public email:string,
              public webpage:string,
              public address_text1:string,
              public address_text2:string,
              public zip_code:string,
              public phone1:string,
              public phone2:string,
              public geo_state_id:string,
              public lat:number,
              public lng:number,
              public map_name:string,
              public fb:string,
              public tw:string,
              public schedule:string,
              public updated_at:string){}
}


