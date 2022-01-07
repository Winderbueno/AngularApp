//#region NgRx
import { ActionReducer } from '@ngrx/store';
//#endregion

//#region Module
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromAccount from '@account/store/';
import * as fromShoppingList from '@shoppingList/store/';
import * as fromTimer from '@timer/store/';
import * as fromToken from '@token/store/';
import * as fromForm from '@module/ngrx-form/store/';
//#endregion

/**
 * MetaReducer based on 'localStorageSync' module
 * It has the responsability of syncing NgRx Store State with localStorage
 * Its functionning can be configured in this file
 */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    // Feature State that are synced with local storage
    keys: [
      fromAccount.featureKey,
      fromShoppingList.featureKey,
      fromTimer.featureKey,
      fromToken.featureKey,
      fromForm.featureKey
    ],
    rehydrate: true
  })(reducer);
}
