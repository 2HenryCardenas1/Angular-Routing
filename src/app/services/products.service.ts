import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}/api/products`;

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get<Product[]>(this.apiUrl, { params })
      .pipe(
        retry(3)
      );
  }

  getProductById(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 404) {
            return throwError(() =>
              'Product not found ') // this is the personalized error message
          }
          return throwError(() => 'Something went wrong')
        })
      )
  }

  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiUrl}`,
      {
        params: {
          limit,
          offset
        }
      })

  }

  createProduct(product: CreateProductDTO) {

    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: string, product: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }



}
