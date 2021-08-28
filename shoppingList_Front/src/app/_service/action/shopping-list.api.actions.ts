//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@app_action/creator/action-creator';
import { ActionSource } from '@app_action/enum/action-source';
import { API } from '@app_action/enum/action-api';
//#endregion

//#region App Model
import { ShoppingList } from '@app_model/shopping-list.model';
//#endregion


export const loadActiveSuccess = createAction(
  ActionSource.API,
  API.SHOPPING_LIST,
  'Load Active Success',
  props<{ shoppingList: ShoppingList }>()
);


export const loadActiveFailure = createAction(
  ActionSource.API,
  API.SHOPPING_LIST,
  'Load Active Failure',
  props<{ error: string }>()
);
