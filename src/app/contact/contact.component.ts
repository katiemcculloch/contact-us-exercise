import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(form: HTMLFormElement) {
    var body = {
      email: form.value.email,
      subject: form.value.subject,
      body: form.value.body
    };

    console.log(body);

    this.http
      .post(
        "http://interview-contact-submit-api-lb-1009699934.us-east-1.elb.amazonaws.com/contact-us/send",
        body
      )
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(["/success"]);
        },
        err => {
          console.log("Error occured");

          window.alert(
            "There was an issue with your request, please try submitting again"
          );
        }
      );
  }

  ngOnInit() {}
}
