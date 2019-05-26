import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../../../../models/user.model';
import { appState } from '../../../../../store/app.state';
import { LogIn } from '../../../../../store/actions/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User;

  constructor(private store: Store<appState>) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const payload = {
      username: this.user.username,
      email: this.user.email,
      password: this.user.password
    }

    this.store.dispatch(new LogIn(payload))

  }

}
