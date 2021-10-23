//#region NgRx
import { relatedEntitySelector, rootEntitySelector } from 'ngrx-entity-relationship';
//#endregion

//#region Store
import * as fromSelectors from './shopping-list.selectors';
import * as fromEnum from '@enum/store/';
//#endregion

// shoppingList
export const rootShoppingList = rootEntitySelector(fromSelectors.selectState);

// shoppingList.category
export const relShoppingList = relatedEntitySelector(
  fromEnum.selectState,
  'companyId',
  'company',
);
