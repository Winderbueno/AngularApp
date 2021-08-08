//#region NgRx
import { createAction, props } from '@ngrx/store';
//#endregion

import { UsedProduct } from '@app_model/used-product.model';


export enum ShoppingListPagesActionTypes {
  LOAD_ACTIVE = '[Shopping List Page] LoadActive',
  ADD_PRODUCT = '[Shopping List Page] AddProduct',
  UPDT_PRODUCT = '[Shopping List Page] UpdtProduct',
  DELETE_PRODUCT = '[Shopping List Page] DeleteProduct',
}

export const loadActive = createAction(
  props<{ Product: UsedProduct }>()


//Payload
// - UpdtProduct : props<{ ShoppingListId: string, Product: UsedProduct }>()
// - DeleteProduct : props<{ ShoppingListId: string, ProductId: string }>()
