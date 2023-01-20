import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageParent = '';
  showImage = true;

  constructor(
    private usersService: UsersService

  ) { }

  createUser() {
    this.usersService.create({
      name: 'Test',
      email: 'test@test.com',
      password: '123456'
    })
      .subscribe({
        next: (user) => {
          console.log("User created", user)
        }
      })

  }

  toggleImg() {
    this.showImage = !this.showImage;
  }

  onLoaded(event: string) {
    console.log('loaded parent', event);
  }

  onInput(input: string) {
    console.log(input);
  }
}
