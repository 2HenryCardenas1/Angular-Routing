import { HttpContext, HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

//Intercepting requests and responses

const CHECK_TIME = new HttpContextToken<boolean>(() => false);
export function checkTime() {
  return new HttpContext().set(CHECK_TIME, true);
}

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.context.get(CHECK_TIME)) {
      const start = performance.now();

      return next.handle(request)
        .pipe(
          tap(() => {
            const end = performance.now();
            console.log(`Request for ${request.urlWithParams} took ${end - start} ms`);
          })
        );
    }
    return next.handle(request);

  }
}
