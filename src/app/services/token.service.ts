import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private apiUrl = `${environment.API_URL}/api/auth`
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  profile(token: string) {
    return this.http.get(`${this.apiUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
