import { NewMovieComponent } from './new-movie/new-movie.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { MoviesAppComponent } from './movies-app/movies-app.component'
import { ActionMoviesComponent } from './action-movies/action-movies.component';
import { DramaMoviesComponent } from './drama-movies/drama-movies.component';
import { ComedyMoviesComponent } from './comedy-movies/comedy-movies.component';
import { ElseMoviesComponent } from './else-movies/else-movies.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'movies-app', component: MoviesAppComponent, canActivate: [AuthGuard] },
    { path: 'action-movies', component: ActionMoviesComponent, canActivate: [AuthGuard] },
    { path: 'drama-movies', component: DramaMoviesComponent, canActivate: [AuthGuard] },
    { path: 'comedy-movies', component: ComedyMoviesComponent, canActivate: [AuthGuard] },
    { path: 'else-movies', component: ElseMoviesComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'new-movie', component: NewMovieComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
