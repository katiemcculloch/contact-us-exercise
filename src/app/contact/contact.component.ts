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
    private router: Router,
    private postMessageService: PostMessageService
  ) {}

  onSubmit(form: HTMLFormElement) {
    var body = {
      email: form.value.email,
      subject: form.value.subject,
      body: form.value.body
    };

    this.postMessageService.postMessage(body);
  }

  ngOnInit() {}
}
