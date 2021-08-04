//#region NgRx
import { createAction, props } from '@ngrx/store';


import { ShoppingList } from '@app_model/shopping-list.model';


var actionType: string = "[Shopping List API] ";

export const loadActiveSuccess = createAction(
  actionType + 'Active Load Success',
  props<{ ShoppingList: ShoppingList }>()
);

export const loadActiveFailed = createAction(
  actionType + 'Active Load Failed',
  props<{ ShoppingList: ShoppingList }>()
);
