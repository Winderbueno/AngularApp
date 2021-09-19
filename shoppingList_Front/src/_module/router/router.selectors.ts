//#region NgRx
import { createFeatureSelector } from '@ngrx/store';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
//#endregion

export const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
  selectCurrentRoute, // current route
  selectFragment, // current route fragment
  selectQueryParams, // current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // current route data
  selectUrl, // current url
} = getSelectors(selectRouter);
