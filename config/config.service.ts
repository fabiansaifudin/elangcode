import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable({
providedIn:  'root'
})

export class HttpService {

    private url = 'assets/silabus.json';

    constructor(private http: HttpClient) { }
    
    getSilabus() {
        return this.http.get(this.url);
    }
}
