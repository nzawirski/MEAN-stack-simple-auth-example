import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor() { }
  toggledItem:string = "left"
  clickMessage = 'Nothing';

  onClickButt(v: string) {
    this.clickMessage = this.toggledItem;
  }

  onChange(event){
    this.toggledItem = event.value
  }

}
