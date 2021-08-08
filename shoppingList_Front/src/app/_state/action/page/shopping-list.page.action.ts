//#region NgRx
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
//#endregion

//#region App Component, Model
import { UsedProduct } from '@app_model/used-product.model';
//#endregion


/* Action */
export type ShoppingListPagesActions =
  LoadActive
  | ResetBoughtStatus
  | AddProduct
  | UpdateProduct
  | DeleteProduct;


/* Action Type */
export enum ShoppingListPagesActionTypes {
  LOAD_ACTIVE = '[Shopping List Page] LoadActive',
  RESET_BOUGHT_STATUS = '[Shopping List Page] Reset Bought Status',
  ADD_PRODUCT = '[Shopping List Page] AddProduct',
  UPDATE_PRODUCT = '[Shopping List Page] UpdtProduct',
  DELETE_PRODUCT = '[Shopping List Page] DeleteProduct',
}

/* Action Definition */
export class LoadActive implements Action {
  readonly type = ShoppingListPagesActionTypes.LOAD_ACTIVE;

  constructor(public payload: {}) {}
}

export class ResetBoughtStatus implements Action {
  readonly type = ShoppingListPagesActionTypes.RESET_BOUGHT_STATUS;

  constructor(public payload: {
    ShoppingListId: string
  }) {}
}

export class AddProduct implements Action {
  readonly type = ShoppingListPagesActionTypes.ADD_PRODUCT;

  constructor(public payload: {
    product: UsedProduct
  }) {}
}

export class UpdateProduct implements Action {
  readonly type = ShoppingListPagesActionTypes.UPDATE_PRODUCT;

  constructor(public payload: {
    ShoppingListId: string,
    product: Update<UsedProduct>
  }) {}
}

export class DeleteProduct implements Action {
  readonly type = ShoppingListPagesActionTypes.DELETE_PRODUCT;

  constructor(public payload: {
    ShoppingListId: string,
    ProductId: string
  }) {}

}
