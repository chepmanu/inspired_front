import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './modules/auth/auth.module';
import { HomeModule} from './modules/home/home.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout/auth-layout.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TokenInterceptor } from './ core/interceptors/token.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    NavComponent,
    FooterComponent,
    ContentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    // HomeModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),

    AppRoutingModule
  ],
  providers: [HttpClientModule,
    { provide: 
      HTTP_INTERCEPTORS, useClass: 
      TokenInterceptor, multi: 
      true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
