import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from './../movies-data.service';


@Component({
  selector: 'new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  public sameMovieName: boolean = false;
  public wrongImdbUrl: boolean = false;
  public wrongImageUrl: boolean = false;
  public baseImdbUrl: string = "https://www.imdb.com/";
  public baseImageUrl: string = "https://m.media-amazon.com/images";

  categories = [
    { id: 1, name: 'אקשן' },
    { id: 2, name: 'דרמה' },
    { id: 3, name: 'קומדיה' },
    { id: 4, name: 'שאר הקטגוריות' }
  ];

  constructor(private servise: MoviesDataService, private router: Router) { }

  ngOnInit() {

  }

  submit(f) {
    console.log(f);
    if (this.noteUnique(f.name)) {
      this.sameMovieName = true;
      return;
    }
    /*if (this.diffrentUrl(f.website, this.baseImdbUrl)) {
      this.wrongImdbUrl = true;
      return;
    }
    if (this.diffrentUrl(f.image, this.baseImageUrl)) {
      this.wrongImageUrl = true;
      return;
    }*/
    this.servise.addMovie(f);
    this.router.navigate(['movies-app'])
    return;
  }

  goBack() {
    this.router.navigate(['movies-app'])
  }

  noteUnique(name: string) {
    return this.servise.getNamesOfAllMovies().includes(name);
  }

  diffrentUrl(realUrl: string, baseUrl: string) {
    let tempStr: string = realUrl;
    if (tempStr.includes(baseUrl))
      return false;
    return true;
    /*for (let i = 0; i < baseUrl.length; i++) {
      if (baseUrl[i] != realUrl[i])
        return false
    }
    return true;*/
  }



}