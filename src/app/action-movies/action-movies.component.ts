import { MoviesDataService } from './../movies-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-movies',
  templateUrl: './action-movies.component.html',
  styleUrls: ['./action-movies.component.css']
})
export class ActionMoviesComponent implements OnInit {
  actionMovies;
  constructor(private service: MoviesDataService) {
    this.actionMovies = service.getActionMovies();
  }

  ngOnInit() {
  }

  removeMovie(movie: object) {
    let id = this.actionMovies.indexOf(movie);
    this.actionMovies.splice(id, 1);
    this.service.moviesList.splice(id, 1);
  }
}
