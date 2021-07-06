import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SignInData } from './model/signInData';
import password from './pass.json';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userCode = password[0].code;
  private passCode = password[1].code;

  private readonly mockedUder = new SignInData(this.userCode, this.passCode);
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['movies-app']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkUsername(signInData.getUsername()) && this.checkPassword(signInData.getPassword());
  }

  private checkUsername(username: string): boolean {
    return username === this.mockedUder.getUsername();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUder.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

}
