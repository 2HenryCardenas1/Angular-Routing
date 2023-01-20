import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { CreateUserDTO, User } from '../models/users.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.API_URL}/api/users`

  constructor(private http: HttpClient) { }

  //DTO = Data Transfer Object
  create(dto: CreateUserDTO) {
    return this.http.post<User>(this.apiUrl, dto);
  }

  getAll() {
    return this.http.get<User[]>(this.apiUrl);
  }

}
