//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { UsedProduct } from '../../model/used-product.model';
//#endregion

export const productChipClickedAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'productChipClicked',
  props<{
    shoppingListId: string,
    category: string,
    subCategory: string,
    productUpdate: Update<UsedProduct>
  }>()
);

export const productChipDeleteButtonClickedAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'productChipDeleteButtonClicked',
  props<{
    shoppingListId: string,
    productId: string }>()
);

export const updateShoppingListProductAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'updateShoppingListProduct',
  props<{
    shoppingListId: string,
    product: Update<UsedProduct> }>()
);
