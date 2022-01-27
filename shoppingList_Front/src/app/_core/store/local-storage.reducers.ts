//#region NgRx
import { ActionReducer } from '@ngrx/store';
//#endregion

//#region Module
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromAccount from '@account/store/';
import * as fromShoppingList from '@shoppingList/store/';
import * as fromTimer from '@timer/store/';
import * as fromToken from '@token/store/';
//#endregion

/**
 * MetaReducer based on 'localStorageSync' module
 * See : https://github.com/btroncone/ngrx-store-localstorage/blob/master/README.md
 * It has the responsability of syncing NgRx Store State with localStorage and can be configured in this file
 */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    // State synced with localStorage
    keys: [
      fromAccount.featureKey,
      fromShoppingList.featureKey,
      fromTimer.featureKey,
      fromToken.featureKey,

      // Array of formId to sync with localStorage
      // TODO - saisie manuelle du nom du form... pas top
      { form : ['Form','Alert'] }
    ],
    rehydrate: true
  })(reducer);
}