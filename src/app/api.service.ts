import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private _http: HttpClient) { }

    getShapes() {
        return this._http.get("http://localhost:2046/figures")
    }

    getUnits() {
        return this._http.get("http://localhost:2046/units")
    }
}