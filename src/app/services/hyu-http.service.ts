import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {environment} from "../../environments/environment";

@Injectable()
export class HyuHttpService {
  public API_HOST = environment.production ? "http://api.evershift.com.mx" : "http://localhost:3000";
  public API_VERSION = "v1";
  public API = this.API_HOST + "/" + this.API_VERSION;

  constructor(private http:Http) { }

  query(source:string, public_url:boolean = false): Observable<{}> {
    return this.http.get(this.API + '/' + source)
      .map((res: Response) => {
        return res.json()
      })
      .catch(this.handleError.bind(this));
  }

  private handleError(error:any){
    console.log(error);
    return Observable.throw(error);
  }
}

