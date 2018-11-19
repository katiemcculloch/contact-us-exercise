import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
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
    const req = new HttpRequest("POST", this._Url, body, {
      reportProgress: true
    });

    return this.http.request(req);
  }
}
