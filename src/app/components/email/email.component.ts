import { Component } from '@angular/core';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  data= {
    to: "",
    subject: "",
    message: ""
  }

  doSubmitForm() {
    console.log("try to submit form");
    console.log("DATA is:", this.data);
  }

}
