import { Component } from '@angular/core';
import { OnExit } from '../../../guards/exit.guard';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit {

  onExit() {
    const alert = confirm('Are you sure you want to leave?');

    return alert;
  }

}
