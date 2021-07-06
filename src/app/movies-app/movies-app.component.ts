import { Router } from '@angular/router';
import { MoviesDataService } from './../movies-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'movies-app',
  templateUrl: './movies-app.component.html',
  styleUrls: ['./movies-app.component.css']
})
export class MoviesAppComponent implements OnInit {
  title = 'json-file-read-angular';
  private moviesList;

  constructor(private service: MoviesDataService, private router: Router) {
    this.moviesList = service.getAllMovies();
  }


  ngOnInit() {

  }

  removeMovie(movie: object) {
    let id = this.moviesList.indexOf(movie);
    this.service.moviesList.splice(id, 1);
    if (this.moviesList[id].category == 'Action')
      this.service.actionMovies.splice(id, 1);
    if (this.moviesList[id].category == 'Drama')
      this.service.dramaMovies.splice(id, 1);
    if (this.moviesList[id].category == 'Comedy')
      this.service.comedyMovies.splice(id, 1);
    if (this.moviesList[id].category == 'Else')
      this.service.elseMovies.splice(id, 1);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
    console.log(url);
  }
}
