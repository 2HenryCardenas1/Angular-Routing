import {
  Component,
  EventEmitter,
  Input, Output
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  img = '';

  @Input('image')
  set contentImage(newImage: string) {
    this.img = newImage;
  }
  @Output() loaded = new EventEmitter<string>();

  imageDefault =
    'https://st.depositphotos.com/1116329/5039/v/450/depositphotos_50398461-stock-illustration-vector-black-web-icon-on.jpg';


  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Send event child to parent');
    this.loaded.emit(this.img);
  }
}
