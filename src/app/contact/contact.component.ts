import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { PostMessageService } from "./post-message.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public router: Router,
    private postMessageService: PostMessageService
  ) {}

  onSubmit = (form: HTMLFormElement) => {
    var self = this;
    var body = {
      email: form.value.email,
      subject: form.value.subject,
      body: form.value.body
    };

    this.postMessageService.postMessage(body).subscribe(
      (res => {
        console.log(res);

        self.router.navigate(["/success"]);
      }).bind(this),
      err => {
        console.log("Error occured");
        window.alert(
          "There was an issue with your request, please try submitting again"
        );
      }
    );
  };

  ngOnInit() {}
}
