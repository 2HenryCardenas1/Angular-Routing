import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Auth } from '../models/auth.model';
import { User } from '../models/users.model';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`
  constructor(
    private http: HttpClient,
    private TokenService: TokenService) { }

  //save token
  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          this.TokenService.saveToken(response.access_token);
        })
      );
  }

  profile() {
    return this.http.get<User>(`${this.apiUrl}/profile`);
  }

  //login and profile details
  loginAndProfile(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(() => {
          return this.profile();
        }
        )
      )
  }
}
