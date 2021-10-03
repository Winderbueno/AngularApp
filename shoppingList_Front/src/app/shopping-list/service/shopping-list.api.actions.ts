//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
import { API } from '@action/enum/api.enum';
//#endregion

//#region Model
import { ShoppingList } from '../model/shopping-list.model';
//#endregion


export const loadActiveSuccessAction = createAction(
  ActionSource.API,
  API.SHOPPING_LIST,
  'Load Active Success',
  props<{ shoppingList: ShoppingList }>()
);


export const loadActiveFailureAction = createAction(
  ActionSource.API,
  API.SHOPPING_LIST,
  'Load Active Failure',
  props<{ error: string }>()
);
