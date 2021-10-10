//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { APIEnum } from '@app/model/enum/api.enum';
import { ShoppingList } from '@shoppingList/model/shopping-list.model';
//#endregion


export const loadActiveSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.SHOPPING_LIST,
  'Load Active Success',
  props<{ shoppingList: ShoppingList }>()
);


export const loadActiveFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.SHOPPING_LIST,
  'Load Active Failure',
  props<{ error: string }>()
);


export const resetBoughtStatusSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.SHOPPING_LIST,
  'Reset Bought Status Success',
  props<{ shoppingList: ShoppingList }>()
);


export const resetBoughtStatusFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.SHOPPING_LIST,
  'Reset Bought Status Failure',
  props<{ error: string }>()
);
