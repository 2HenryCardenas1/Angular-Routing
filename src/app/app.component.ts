import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageParent = '';
  showImage = true;
  

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
