export class HyuPage {
  constructor(public id: string,
              public name: string,
              public title: string,
              public path: string,
              public meta_description: string,
              public parent_id: string,
              public screenplay_text: string,
              public release_date: string,
              public content_type: string,
              public screenplay: Array<ContentSerializer[]>,
              public publishing_status: string = "preview",
              public updated_at: string = "") {
  }
}

export class ContentSerializer {
  public readonly landscape_is_video: boolean;
  public readonly portrait_is_video: boolean;

  constructor(
    public landscape_src:string,
    public portrait_src:string,
    public alt_text:string,
    public title:string,
    public caption_text:string,
    public content_text:string,
    public attributes_text:string,
    public link_to:string,
    public link_text:string,
    public colors:View360ColorSelectorContentSerializer[] = null,
    public children:ContentSerializer[] = null
  ) {
    this.landscape_is_video = landscape_src.toLowerCase().indexOf('mp4') >= 0;
    this.portrait_is_video = portrait_src.toLowerCase().indexOf('mp4') >= 0;
  }

}

export class View360ColorSelectorContentSerializer {
  constructor(
    public color_hex:string,
    public color_name:string,
    public frames_src:string[],
    public hotspots:View360HotspotContentSerializer[]
  ) {}
}

export class View360HotspotContentSerializer {
  constructor(
    public x:string,
    public y:string,
    public init_frame:number,
    public end_frame:number,
    public refer_to:ContentSerializer
  ) {}
}

