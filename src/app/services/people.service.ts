import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

    constructor(private http: HttpClient) { }

    private baseUrl = 'https://swapi.dev/api/';

    getPeople(): Observable<any>{
        return this.http.get(`${this.baseUrl}people`);
    }
}
