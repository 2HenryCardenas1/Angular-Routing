import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

import {
  CreateProductDTO, Product, UpdateProductDTO
} from '../../models/product.model';

import { ProductsService } from '../../services/products.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;

  showProductDetail = false;
  productChosen: Product | null = null;
  limit = 10;
  offset = 0;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  @Input() products: Product[] = [];
  @Output() onLoadMore = new EventEmitter();

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  loadMore() {
    this.onLoadMore.emit();
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.statusDetail = 'loading';

    if (this.productChosen != null) {
      if (this.productChosen.id != id && this.showProductDetail == true) {
        this.showProductDetail = !this.showProductDetail;
      }
    }

    this.productsService.getOne(id).subscribe(
      {
        next: (data) => {
          this.showProductDetail = !this.showProductDetail;
          this.productChosen = data;
          this.statusDetail = 'success';
        },
        error: error => {
          this.statusDetail = 'error';
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
            confirmButtonText: 'Ok'
          })
        }
      }
    );
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo prodcuto',
      description: 'bla bla bla',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      categoryId: 2,
    };
    this.productsService.create(product).subscribe((data) => {
      this.products.unshift(data);
    });
  }

  updateProduct() {
    if (this.productChosen) {
      const changes: UpdateProductDTO = {
        title: 'change title',
      };
      const id = this.productChosen?.id;
      this.productsService.update(id, changes).subscribe((data) => {
        const productIndex = this.products.findIndex(
          (item) => item.id === this.productChosen?.id
        );
        this.products[productIndex] = data;
        this.productChosen = data;
      });
    }
  }

  deleteProduct() {
    if (this.productChosen) {
      const id = this.productChosen?.id;
      this.productsService.delete(id).subscribe(() => {
        const productIndex = this.products.findIndex(
          (item) => item.id === this.productChosen?.id
        );
        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
      });
    }
  }


}
