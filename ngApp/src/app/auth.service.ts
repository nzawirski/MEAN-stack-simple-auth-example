import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

import { LoginData } from './models/loginData'
import { RegisterData } from './models/registerData'
import { User } from './models/user'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3001/api/users/"
  private _loginUrl = "http://localhost:3001/api/login/"

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(registerData:RegisterData):Observable<User> {
    return this.http.post<User>(this._registerUrl, registerData, httpOptions)
  }

  loginUser(loginData:LoginData):Observable<any> {
    return this.http.post(this._loginUrl, loginData, httpOptions)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
