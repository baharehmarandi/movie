import {popularMoviesReducer, PopularMoviesState} from "./popular-movies.reducers";
import {nowPlayingMovieReducer, NowPlayingMovieState} from "./nowPlaying-movie.reducers";
import {upComingMovieReducer, UpComingMovieState} from "./upComing-movie.reducers";
import {combineReducers} from "@ngrx/store";
import {topRatedMovieReducer, TopRatedMovieState} from "./topRated-movie.reducers";
import {movieDetailsReducer, MovieDetailsState} from "./movieDetails.reducers";

export interface MovieState {
  popularMovie: PopularMoviesState,
  nowPlayingMovie: NowPlayingMovieState,
  upComingMovie: UpComingMovieState,
  topRatedMovie: TopRatedMovieState,
  detailsMovie: MovieDetailsState
}

export const movieKeyFeature = 'movies';

export const movieReducer = combineReducers({
  popularMovie: popularMoviesReducer,
  nowPlayingMovie: nowPlayingMovieReducer,
  upComingMovie: upComingMovieReducer,
  topRatedMovie: topRatedMovieReducer,
  detailsMovie: movieDetailsReducer
})
