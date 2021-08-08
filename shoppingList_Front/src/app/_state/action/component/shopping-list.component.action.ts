//#region NgRx
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
//#endregion

//#region App Component, Model
import { UsedProduct } from '@app_model/used-product.model';
//#endregion


/* Action */
export type ShoppingListComponentsActions =
  LoadActive
  | ResetBoughtStatus
  | AddProduct
  | UpdateProduct
  | DeleteProduct;


/* Action Type */
export enum ShoppingListComponentsActionTypes {
  LOAD_ACTIVE = '[Shopping List Component] LoadActive',
  RESET_BOUGHT_STATUS = '[Shopping List Component] Reset Bought Status',
  ADD_PRODUCT = '[Shopping List Component] AddProduct',
  UPDATE_PRODUCT = '[Shopping List Component] UpdtProduct',
  DELETE_PRODUCT = '[Shopping List Component] DeleteProduct',
}

/* Action Definition */
export class LoadActive implements Action {
  readonly type = ShoppingListComponentsActionTypes.LOAD_ACTIVE;

  constructor(public payload: {}) {}
}

export class ResetBoughtStatus implements Action {
  readonly type = ShoppingListComponentsActionTypes.RESET_BOUGHT_STATUS;

  constructor(public payload: {
    ShoppingListId: string
  }) {}
}

export class AddProduct implements Action {
  readonly type = ShoppingListComponentsActionTypes.ADD_PRODUCT;

  constructor(public payload: {
    product: UsedProduct
  }) {}
}

export class UpdateProduct implements Action {
  readonly type = ShoppingListComponentsActionTypes.UPDATE_PRODUCT;

  constructor(public payload: {
    ShoppingListId: string,
    product: Update<UsedProduct>
  }) {}
}

export class DeleteProduct implements Action {
  readonly type = ShoppingListComponentsActionTypes.DELETE_PRODUCT;

  constructor(public payload: {
    ShoppingListId: string,
    ProductId: string
  }) {}

}
