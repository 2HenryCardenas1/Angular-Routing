import { Component } from '@angular/core';
import { FilesService } from './services/files.service';
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
    private usersService: UsersService,
    private filesService: FilesService
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

  downloadFilePdf() {
    this.filesService.getFile('my_file.pdf', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', 'application/pdf')
      .subscribe({
        next: () => { }
      })
  }
}
