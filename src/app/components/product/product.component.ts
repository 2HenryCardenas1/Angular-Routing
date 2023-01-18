import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(

  ) { }

  selectedProduct = true;


  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: '',
      name: '',
      typeImg: ''
    }
  }
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() onShowDetail = new EventEmitter<string>();

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowProductDetail() {
    //Send event child to parent
    this.onShowDetail.emit(this.product.id.toString());
  }


}
