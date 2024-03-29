import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { SuccessComponent } from "./contact/success/success.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ContactComponent,
        SuccessComponent
      ]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("div").textContent).toContain("Home");
  });
});
