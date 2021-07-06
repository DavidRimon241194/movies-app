import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import movies from './resource-data.json';
import empty from './adding-movies.json';

@Injectable({
  providedIn: 'root'
})

export class MoviesDataService {
  public moviesList: any = movies;
  public actionMovies = [];
  public dramaMovies = [];
  public comedyMovies = [];
  public elseMovies = [];
  public nameAllMovies = [];
  public tempMovie: any = empty;
  public idEmpty: number = 0;


  constructor() { }



  getAllMovies() {
    return this.moviesList;
  }

  getActionMovies() {
    for (var i = 0; i < this.moviesList.length; i++) {
      if (this.moviesList[i].category == 'Action' && !this.actionMovies.includes(this.moviesList[i]))
        this.actionMovies.push(this.moviesList[i])
    }
    return this.actionMovies;
  }
  getDramaMovies() {
    for (var i = 0; i < this.moviesList.length; i++) {
      if (this.moviesList[i].category == 'Drama' && !this.dramaMovies.includes(this.moviesList[i]))
        this.dramaMovies.push(this.moviesList[i])
    }
    return this.dramaMovies;
  }
  getComedyMovies() {
    for (var i = 0; i < this.moviesList.length; i++) {
      if (this.moviesList[i].category == 'Comedy' && !this.comedyMovies.includes(this.moviesList[i]))
        this.comedyMovies.push(this.moviesList[i]);
    }
    return this.comedyMovies;
  }
  getElseMovies() {
    for (var i = 0; i < this.moviesList.length; i++) {
      if (this.moviesList[i].category == 'Else' && !this.elseMovies.includes(this.moviesList[i]))
        this.elseMovies.push(this.moviesList[i]);
    }
    return this.elseMovies;
  }
  deleteMovie(movie) {
    let idMovie = this.moviesList.indexOf(movie);
    if (!this.moviesList.includes(movie))
      this.moviesList.splice(idMovie, 1);
  }
  getNamesOfAllMovies() {
    for (var i = 0; i < this.moviesList.length; i++) {
      this.nameAllMovies.push(this.moviesList[i].Title)
    }
    return this.nameAllMovies;
  }
  addMovie(f: any) {
    let temp: any = this.tempMovie;
    temp[this.idEmpty].id = this.moviesList.length + 1;
    temp[this.idEmpty].Image = f.image
    temp[this.idEmpty].iMDBLink = f.website;
    temp[this.idEmpty].Title = f.name;
    if (f.category === '1')
      temp[this.idEmpty].category = 'Action';
    if (f.category === '2')
      temp[this.idEmpty].category = 'Drama';
    if (f.category === '3')
      temp[this.idEmpty].category = 'Comedy';
    if (f.category === '4')
      temp[this.idEmpty].category = 'Else';
    this.moviesList.unshift(temp[this.idEmpty]);
    console.log(temp);
    this.idEmpty++;
  }
}

