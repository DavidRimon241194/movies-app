import { MoviesDataService } from './../movies-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-else-movies',
  templateUrl: './else-movies.component.html',
  styleUrls: ['./else-movies.component.css']
})
export class ElseMoviesComponent implements OnInit {
  elseMovies = [];

  constructor(private service: MoviesDataService) {
    this.elseMovies = service.getElseMovies();
  }

  ngOnInit() {
  }

  removeMovie(movie: object) {
    let id = this.elseMovies.indexOf(movie);
    this.elseMovies.splice(id, 1);
    this.service.moviesList.splice(id, 1);
  }
}
