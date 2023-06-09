import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

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

  flag=false;

  constructor(private email:EmailService, private snack:MatSnackBar) { }

  doSubmitForm() {
    console.log("try to submit form");
    console.log("DATA is:", this.data);

    if(this.data.to=='' || this.data.subject=='' || this.data.message=='') {
      this.snack.open("Fields cannot be empty", "Ok");
      return;
    }

    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response=> {
        console.log(response);
        this.flag=false;
        this.snack.open("Sent successfully", "Ok");
      },
      error=> {
        console.log(error);
        this.flag=false;
        this.snack.open("Error Occured", "Ok");
      }

    )
  }

}
