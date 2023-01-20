import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;

  token = '';
  userDetail: User = {
    id: '',
    name: '',
    email: '',
    password: ''
  };
  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ) {

  }
  ngOnInit() {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService.login('test@test.com', '123456')
      .pipe(
        switchMap((response) => {
          this.token = response.access_token;
          return this.authService.profile(this.token)
        }
        )
      )
      .subscribe({
        next: (response) => {
          console.log(response)
          this.userDetail = response;
        }
      })
  }


}
