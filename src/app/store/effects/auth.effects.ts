import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { of } from 'rxjs'
import { tap,switchMap, catchError, map,} from 'rxjs/operators';

import { AuthService } from '../../ core/services/auth.service';
import {
    AuthActionTypes,
    LogIn, LogInSuccess,
    SignUp, SignupSuccess,
    SignupFailure, LogInFailure
  } from '../actions/auth.actions';
import { EffectsFeatureModule } from '@ngrx/effects/src/effects_feature_module';


@Injectable()

export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: AuthService,
        private router: Router
    ) {}


    @Effect()
  Login: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
      map((action: LogIn) => action.payload),
      switchMap(payload => {
        return this.authService.logIn(payload.email, payload.password)
        .pipe(
          map((user) => {
            return new LogInSuccess(user);
          }),
          catchError((error) => {
            return of(new LogInFailure({ error: error }));
          }));
    }));

    @Effect({ dispatch: false })
  LoginSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      //when the user logs in successfully, the token and email are saved to localStorage
      localStorage.setItem('token', user.payload.user.token);
      localStorage.setItem('email', user.payload.user.email);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LoginFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect()
  Signup: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP),
    map((action: SignUp) => action.payload),
    switchMap(payload => {
      return this.authService.signUp(payload.username, payload.email, payload.password)
      .pipe(
        map((user) => {
          return new SignupSuccess(user);
        }),
        catchError((error) => {
          return of(new SignupFailure({error: error}));
        })
      )
    })
  )

  @Effect({ dispatch: false })
  SignupSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap((user) => {
      //when the user logs in successfully, the token and email are saved to localStorage
      localStorage.setItem('token', user.payload.user.token);
      localStorage.setItem('email', user.payload.user.email);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  SignupFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );
}
