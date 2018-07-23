import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from './listing';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    public constructor(private http: HttpClient) {}

    public listings(): Observable<Listing[]> {
        return this.http.get('/assets/mock-db.json') as Observable<Listing[]>;
    }
}
