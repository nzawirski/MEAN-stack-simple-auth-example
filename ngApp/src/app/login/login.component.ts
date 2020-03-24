import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoginData } from '../models/loginData'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = new LoginData
  waitingForResponse:boolean = false

  constructor(private _auth: AuthService, private _router: Router,  private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  loginUser () {
    this.waitingForResponse = true
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        this.waitingForResponse = false
        localStorage.setItem('token', res.token)
        this._router.navigate(['/secret'])
      },
      err => {
        this.waitingForResponse = false
        this.openSnackBar(err.status != 0 ? err.error.message : "Could not connect to server", "OK")
      }
    ) 
  }

}
