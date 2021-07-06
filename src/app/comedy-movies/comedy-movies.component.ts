import { MoviesDataService } from './../movies-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedy-movies',
  templateUrl: './comedy-movies.component.html',
  styleUrls: ['./comedy-movies.component.css']
})
export class ComedyMoviesComponent implements OnInit {
  comedyMovies = [];

  constructor(private service: MoviesDataService) {
    this.comedyMovies = service.getComedyMovies();
  }

  ngOnInit() {
  }

  removeMovie(movie: object) {
    let id = this.comedyMovies.indexOf(movie);
    this.comedyMovies.splice(id, 1);
    this.service.moviesList.splice(id, 1);
  }
}
