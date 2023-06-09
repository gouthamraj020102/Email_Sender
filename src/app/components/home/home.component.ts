import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private snack:MatSnackBar) { }

  btnClick() {
    console.log("btn click");
    this.snack.open("Hey, welcome to this app", "Cancel");
  }
}
