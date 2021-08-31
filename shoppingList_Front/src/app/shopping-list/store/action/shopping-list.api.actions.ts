//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action_creator/creator/action-creator';
import { ActionSource } from '@action_creator/enum/action-source.enum';
import { API } from '@action_creator/enum/api.enum';
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
