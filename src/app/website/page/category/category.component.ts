import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categoryId: string | null = null;
  limit = 10;
  offset = 0;
  products: Product[] = [];
  productId: string | null = null;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.categoryId = params.get('id');
          if (this.categoryId) {
            return this.productsService.getProductsByCategory(this.categoryId, this.limit, this.offset)

          }
          return []
        })
      )
      .subscribe({
        next: (data) => {
          this.products = data;

        }
      });

    //send query params to the server
    this.route.queryParamMap
      .subscribe({
        next: (params) => {
          this.productId = params.get('product');
          console.log(this.productId);
        }
      })
  }

  loadMore() {
    if (this.categoryId) {
      this.productsService.getProductsByCategory(this.categoryId, this.limit, this.offset).subscribe(
        {
          next: (data) => {
            this.products = this.products.concat(data);
            this.offset += this.limit;
          }
        }
      );
    }
  }

}
