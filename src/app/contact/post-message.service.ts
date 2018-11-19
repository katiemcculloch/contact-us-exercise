import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostMessageService {
  _Url = "";

  constructor(private http: HttpClient, private router: Router) {
    this._Url =
      "http://interview-contact-submit-api-lb-1009699934.us-east-1.elb.amazonaws.com/contact-us/send";
  }

  postMessage(body: object) {
    this.http.post(this._Url, body).subscribe(
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
}
