import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AppComponent } from '../app.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isFormIvnalid = false;
  areCredentialsInvalid = false;

  constructor(private AuthenticationService: AuthenticationService, private navbar: AppComponent) { }

  ngOnInit() {
  }

  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormIvnalid = true;
      this.areCredentialsInvalid = false;
      this.navbar.user = signInForm.value;
      return;
    }
    this.checkCredentials(signInForm);
  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.username, signInForm.value.password);
    if (!this.AuthenticationService.authenticate(signInData)) {
      this.isFormIvnalid = false;
      this.areCredentialsInvalid = true;
    }
  }

}
