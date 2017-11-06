import { Injectable } from '@angular/core';
import {HyuHttpService} from "../services/hyu-http.service";
import {Observable} from "rxjs";

@Injectable()
export class HyuHeaderDataService {

  constructor(private http:HyuHttpService) { }

  query(): Observable<HyuH>{
    return this.http.query('header')
      .map((r:any) => this.parse(r))
  }

  private parse(r:any): HyuH {
    return new HyuH(
      r.cars.map((p) => this.parseProducts(p)),
      r.suvs.map((p) => this.parseProducts(p))
    )
  }

  private parseProducts(r:any): HyuHProduct{
    return new HyuHProduct (
      r.name, r.path, r.cover
    )
  }
}


export class HyuH {
  constructor(public cars:HyuHProduct[], public suvs:HyuHProduct[]){}
}

export class HyuHProduct {
  constructor(public name:string, public path:string, public cover:string){}
}
