import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HyuHttpService} from "../../services/hyu-http.service";
import {
  HyuPage, ContentSerializer, View360ColorSelectorContentSerializer,
  View360HotspotContentSerializer
} from "./content-serializer";

@Injectable()
export class HyuContentService {
  private source:string ='hyundai?path=';
  private cache:any = {};

  constructor(private http: HyuHttpService) {}

  query(path:string = ''): Observable<HyuPage> {
    let p = 'url:' + path,
      cContent = this.cache[p];

    if (cContent == null)
      return this.http
        .query(this.source + path)
        .map((d: any) => {
          this.cache[p] = this.parseData(d);
          return this.cache[p];
        });
    else
      return Observable.of(cContent);
  }

  private parseData(d:any):HyuPage {
    let r:Array<any> = JSON.parse(d.screenplay_text);

    return new HyuPage(
      d.id,
      d.name,
      d.title,
      d.path,
      d.meta_description,
      d.parent_id,
      d.screenplay_text,
      d.release_date,
      d.content_type,
      r.map((d:Array<any>) => d.map((c:Array<any>) => this.parseContentSerializer(c))),
      d.publishing_status,
      d.updated_at
    );
  }

  private parseContentSerializer(c:any): ContentSerializer{
    if (!c.colors) c.colors = [];
    if (!c.children) c.children = [];

    return new ContentSerializer(
      c.landscape_src,
      c.portrait_src,
      c.alt_text,
      c.title,
      c.caption_text,
      c.content_text,
      c.attributes_text,
      c.link_to,
      c.link_text,
      c.colors.map((color) => this.parse360(color)),
      c.children.map(c => this.parseContentSerializer(c))
    )

  }

  private parse360(c:any): View360ColorSelectorContentSerializer {
    if (!c.hotspots) c.hotspots = [];

    return new View360ColorSelectorContentSerializer(
      c.color_hex,
      c.color_name,
      c.frames_src,
      c.hotspots.map((h:any) => this.parseHotspots(h))
    )
  }

  private parseHotspots(h:any): View360HotspotContentSerializer{
    return new View360HotspotContentSerializer(
      h.x, h.y, h.init_frame, h.end_frame, this.parseContentSerializer(h.refer_to)
    )
  }
}
