//#region NgRx
import { Action } from '@ngrx/store';
//#endregion

//#region App Component, Model
import { ShoppingList } from '@app_model/shopping-list.model';
//#endregion


/* Action */
export type ShoppingListAPIActions = LoadActiveSuccess | LoadActiveFailure;

/* Action Type */
export enum ShoppingListAPIActionTypes {
  LOAD_ACTIVE_SUCCESS = '[ShoppingList API] Load Active Success',
  LOAD_ACTIVE_FAILURE = '[ShoppingList API] Load Active Failure',
}

/* Action Definition */
export class LoadActiveSuccess implements Action {
  readonly type = ShoppingListAPIActionTypes.LOAD_ACTIVE_SUCCESS;

  constructor(public payload: { shoppingList: ShoppingList }) {}
}

export class LoadActiveFailure implements Action {
  readonly type = ShoppingListAPIActionTypes.LOAD_ACTIVE_FAILURE;

  constructor(public payload: { error:string }) {}
}
