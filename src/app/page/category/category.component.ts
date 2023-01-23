import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';
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

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
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
          this.offset += this.limit;
        }
      })
  }

  loadMore() {
    if (this.categoryId != null) {
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
