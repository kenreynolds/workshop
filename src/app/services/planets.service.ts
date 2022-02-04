import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlanetsService {

    constructor(private http: HttpClient) { }

    baseUrl = 'https://swapi.dev/api/';

    getPlanets(): Observable<any>{
        return this.http.get(`${this.baseUrl}planets`);
    }
}
