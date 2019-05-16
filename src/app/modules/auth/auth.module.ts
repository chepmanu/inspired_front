import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login/login.component';

import { AuthRoutingModule } from './auth.routing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Actions, EffectsModule } from '@ngrx/effects';
import { authReducer } from '../../store/reducers/auth.reducers';
import { AuthEffects } from '../../store/effects/auth.effects';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    StoreModule.forFeature('AuthFeature', {
        auth: authReducer
    }),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
