import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  myShoppingCart: Product[] = [];
  total = 0;
  today = new Date();
  date = new Date(2020, 11, 24);

  constructor(private storeService: StoreService, private productsService: ProductsService) {

  }

  ngOnInit() {
    this.myShoppingCart = this.storeService.getShoppingCart();
    this.productsService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      })
  }



  onAddToCart(product: Product) {

    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }


} 
