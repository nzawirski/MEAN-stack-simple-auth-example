import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterData } from '../models/registerData'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerUserData = new RegisterData
  waitingForResponse:boolean = false
  
  constructor(private _auth: AuthService, private _router: Router, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  registerUser() {
    this.waitingForResponse = true
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this.waitingForResponse = false
        this._router.navigate(['/login'])
      },
      err => {
        this.waitingForResponse = false
        this.openSnackBar(err.status != 0 ? err.error.message : "Could not connect to server", "OK")
      }
    )      
  }


}
