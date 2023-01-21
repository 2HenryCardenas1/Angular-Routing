import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start = performance.now();

    return next.handle(request)
      .pipe(
        tap(() => {
          const end = performance.now();
          console.log(`Request for ${request.urlWithParams} took ${end - start} ms`);
        })
      );
  }
}
