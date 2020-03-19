import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SomeDataService {

  private _meUrl = "http://localhost:3001/api/me";

  constructor(private http: HttpClient) { }

  getMe(){
    return this.http.get<any>(this._meUrl)
  }
}
