import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { PostMessageService } from "./post-message.service";
import { HttpEvent, HttpEventType } from "@angular/common/http";

describe("PostMessageService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PostMessageService]
    })
  );
  const mockBody = {
    email: "testing@testing.com",
    subject: "testsubject",
    body: "testbody"
  };

  it("should be created", () => {
    const service: PostMessageService = TestBed.get(PostMessageService);
    expect(service).toBeTruthy();
  });

  it("should send a body on the request, request should send, response header should be received", inject(
    [HttpTestingController, PostMessageService],
    (
      httpMock: HttpTestingController,
      postMessageService: PostMessageService
    ) => {
      postMessageService
        .postMessage(mockBody)
        .subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockBody);
            case HttpEventType.Sent:
              console.log("Request sent!");
            case HttpEventType.ResponseHeader:
              console.log("Response header received!");
          }
        });
    }
  ));
});
