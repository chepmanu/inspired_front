import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

import { appState } from '../../../../store/app.state';
import { User } from '../../../../models/user.model';
import { SignUp} from '../../../../store/actions/auth.actions';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user:User = new User;
  constructor(private store: Store<appState>) { }

  ngOnInit() {
  }

  onSubmit(): void{
    const payload = {
      username: this.user.username,
      email: this.user.email,
      password: this.user.password
    }

    this.store.dispatch( new SignUp(payload))

  }

}
