import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CreateProductDTO, Product, UpdateProductDTO } from '../../models/product.model';
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
  showProductDetail = false;

  productChosen: Product = {
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

  limit = 10;
  offset = 0;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(private storeService: StoreService, private productsService: ProductsService) {

  }

  ngOnInit() {
    this.myShoppingCart = this.storeService.getShoppingCart();
    this.productsService.getProductsByPage(this.limit, this.offset)
      .subscribe(data => {
        this.products = data;
        this.offset += this.limit;
      })
  }



  onAddToCart(product: Product) {

    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowProductDetail(id: string) {
    this.statusDetail = 'loading';
    if (this.productChosen.id != id && this.showProductDetail == true) {
      this.showProductDetail = !this.showProductDetail;
    }

    this.productsService.getProductById(id)
      .subscribe({
        next: data => {
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
      })

  }

  createProduct() {
    const newProduct: CreateProductDTO = {
      title: 'New Product',
      price: 213,
      images: [],
      description: 'New Product',
      categoryId: 1
    }
    this.productsService.createProduct(newProduct)
      .subscribe(data => {
        this.products.unshift(data);
      })
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'New Product NEW',
    }
    const id = this.productChosen.id;

    this.productsService.updateProduct(id, changes)
      .subscribe(data => {
        const product = this.products.findIndex(item => item.id == id);
        this.products[product] = data;
        this.productChosen = data;
      })
  }

  deleteProduct() {
    const idProductChosen = this.productChosen.id;
    this.productsService.deleteProduct(idProductChosen)
      .subscribe(() => {
        const productIndex = this.products.findIndex(item => item.id === idProductChosen);
        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
      });
  }

  loadMore() {
    this.productsService.getAllProducts(this.limit, this.offset)
      .subscribe(data => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      })
  }

} 
