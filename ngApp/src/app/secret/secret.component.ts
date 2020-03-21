import { Component, OnInit } from '@angular/core';
import { SomeDataService } from '../some-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  someData = {
    first_name: "",
    last_name: ""
  }
  constructor(private _dataService: SomeDataService,private _router: Router) { }

  ngOnInit() {
    this._dataService.getMe()
      .subscribe(
        res => this.someData = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

}
