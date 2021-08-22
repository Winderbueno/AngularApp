//#region NgRx
import { createAction, props } from '@ngrx/store';
//#endregion

//#region App Component, Model
import { ShoppingList } from '@app_model/shopping-list.model';
//#endregion


/* Action Type */
export enum ShoppingListAPIActionTypes {
  LOAD_ACTIVE_SUCCESS = '[ShoppingList API] Load Active Success',
  LOAD_ACTIVE_FAILURE = '[ShoppingList API] Load Active Failure',
}


export const loadActiveSuccess = createAction(
  ShoppingListAPIActionTypes.LOAD_ACTIVE_SUCCESS,
  props<{ shoppingList: ShoppingList }>());


export const loadActiveFailure = createAction(
  ShoppingListAPIActionTypes.LOAD_ACTIVE_FAILURE,
  props<{ error:string }>());
