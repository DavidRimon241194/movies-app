import { MoviesDataService } from './../movies-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drama-movies',
  templateUrl: './drama-movies.component.html',
  styleUrls: ['./drama-movies.component.css']
})
export class DramaMoviesComponent implements OnInit {
  dramaMovies = [];

  constructor(private service: MoviesDataService) {
    this.dramaMovies = service.getDramaMovies();
  }

  ngOnInit() {
  }

  removeMovie(movie: object) {
    let id = this.dramaMovies.indexOf(movie);
    this.dramaMovies.splice(id, 1);
    this.service.moviesList.splice(id, 1);
  }
}
