import {Component, OnInit, Input} from '@angular/core';
import {HyuHProduct} from "../hyu-header-data.service";

@Component({
  selector: 'hyu-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input()
  product:HyuHProduct;


  constructor() { }

  ngOnInit() {
  }

}
