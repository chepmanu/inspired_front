import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { Writting } from '../../models/writting.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'token'
    })
  };

@Injectable({ providedIn: 'root'})
export class WrittingService {

    private BASE_URL = 'http://localhost:8000/api';

    constructor(private http: HttpClient){}


    

    get(): Observable<any> {
        const fetchUrl = `${this.BASE_URL}/writtings/`;

        return this.http.get<Writting>(fetchUrl, httpOptions);
    }

    postWritting(body: string, title: string, description: string, url: string): Observable<any> {
        const postUrl = `${this.BASE_URL}/writtings/`;
        const writting = {
            body: body,
            title: title,
            description: description,
            url: url
        }

        return this.http.post<Writting>(postUrl,  { writting }, httpOptions);
    }
    
}
