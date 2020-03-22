import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

import { RegisterData } from '../models/registerData'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = new RegisterData
  
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this._router.navigate(['/login'])
      },
      err => console.log(err)
    )      
  }


}
