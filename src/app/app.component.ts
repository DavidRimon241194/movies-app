import { AuthenticationService } from './authentication.service';
import { MoviesDataService } from './movies-data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first-angular-pro';
  public user: string;
  private moviesList;

  constructor(public authenticationService: AuthenticationService, private service: MoviesDataService) {
    this.moviesList = service.getAllMovies();
  }

  logout() {
    this.authenticationService.logout();
  }

}
