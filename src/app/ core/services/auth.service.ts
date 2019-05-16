import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { User } from '../../models/user.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'token'
    })
  };

@Injectable({ providedIn: 'root'})
export class AuthService {

    private BASE_URL = 'http://localhost:8000/api/users';

    constructor(private http: HttpClient){}


    getToken(): string {
        return localStorage.getItem('token')
    }

    logIn(email: string, password: string): Observable<any> {
        const loginUrl = `${this.BASE_URL}/login/`;
        const user = {
            email: email,
            password: password
        }

        return this.http.post<User>(loginUrl,  { user }, httpOptions);
    }

    signUp(username: string, email: string, password: string): Observable<any> {
        const signupUrl = `${this.BASE_URL}/`;

        const user = {
            username: username,
            email: email,
            password: password
        }

        return this.http.post<User>(signupUrl, { user }, httpOptions);
    }

}
