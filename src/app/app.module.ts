import { NewMovieComponent } from './new-movie/new-movie.component';
import { MoviesDataService } from './movies-data.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesAppComponent } from './movies-app/movies-app.component';
import { ActionMoviesComponent } from './action-movies/action-movies.component';
import { DramaMoviesComponent } from './drama-movies/drama-movies.component';
import { ComedyMoviesComponent } from './comedy-movies/comedy-movies.component';
import { ElseMoviesComponent } from './else-movies/else-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesAppComponent,
    ActionMoviesComponent,
    DramaMoviesComponent,
    ComedyMoviesComponent,
    ElseMoviesComponent,
    AllMoviesComponent,
    LoginComponent,
    NewMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    MoviesDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
