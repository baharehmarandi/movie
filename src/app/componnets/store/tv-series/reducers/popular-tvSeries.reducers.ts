import {ITvSeriesResult} from "../../../models/tv-series.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {PopularTvSeriesActions} from "../actions/tv-series.actions";

export interface PopularTvSeriesState {
  popularTvSeries?: ITvSeriesResult[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
  total?: number
}

export const initialState: PopularTvSeriesState = {
  popularTvSeries: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
  total: undefined
}

export const popularTvSeriesReducer = createReducer(
  initialState,
  on(PopularTvSeriesActions.loadPopularTvSeries, (state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(PopularTvSeriesActions.loadPopularTvSeriesSuccess,(state, action) => ({
    ...state,
    loading: false,
    success: true,
    popularTvSeries: action.payload,
    total: action.total
  })),
  on(PopularTvSeriesActions.loadPopularTvSeriesFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error,
  }))
)
