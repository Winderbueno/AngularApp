//#region NgRx
import { Action } from '@ngrx/store';
//import { Update } from '@ngrx/entity';
//#endregion

//#region App Component, Model
//import { UsedProduct } from '@app_model/used-product.model';
//#endregion


/* Action */
export type ShoppingListPagesActions = LoadActive | ResetBoughtStatus;

/* Action Type */
export enum ShoppingListPagesActionTypes {
  LOAD_ACTIVE = '[Shopping List Page] LoadActive',
  RESET_BOUGHT_STATUS = '[Shopping List Page] Reset Bought Status',
  ADD_PRODUCT = '[Shopping List Page] AddProduct',
  UPDT_PRODUCT = '[Shopping List Page] UpdtProduct',
  DELETE_PRODUCT = '[Shopping List Page] DeleteProduct',
}

/* Action Definition */
export class LoadActive implements Action {
  readonly type = ShoppingListPagesActionTypes.LOAD_ACTIVE;

  constructor() {}
}

export class ResetBoughtStatus implements Action {
  readonly type = ShoppingListPagesActionTypes.RESET_BOUGHT_STATUS;

  constructor(public payload: { ShoppingListId:string }) {}
}

//Payload
// - UpdtProduct : { ShoppingListId: string, Product: UsedProduct }>()
// - DeleteProduct : { ShoppingListId: string, ProductId: string }>()
