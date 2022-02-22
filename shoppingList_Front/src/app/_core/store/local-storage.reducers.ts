//#region NgRx
import { ActionReducer, State } from '@ngrx/store';
import { 
  localStorageSync, 
  rehydrateApplicationState } from 'ngrx-store-localstorage';
//#endregion

//#region Module
import * as Actions from './core.actions';
import * as fromAccount from '@account/store/';
import * as fromShoppingList from '@shoppingList/store/';
import * as fromTimer from '@timer/store/';
//#endregion


/**
 * MetaReducer based on 'localStorageSync' module
 * See : https://github.com/btroncone/ngrx-store-localstorage/blob/master/README.md
 * It has the responsability of syncing NgRx Store State 
 * with localStorage and can be configured in this file
 */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: State<any>, action: any) => {

    const keys = [
      fromAccount.featureKey,
      fromShoppingList.featureKey,
      fromTimer.featureKey,

      // Array of formId to sync with localStorage
      // TODO - saisie manuelle du nom du form... pas top
      { 
        form : [
          'Form',
          'Alert',
          'Theme-Menu',
          'ShoppingListActions'
        ] 
      }
    ];

    // When localStorage is modified by another tab, 
    // Sync ngrx global state of 'account' feature with localStorage
    if (action.type === Actions.accountWindowStorageChangeAction.type) {
      const rehydratedState = rehydrateApplicationState(
        ['account'], 
        localStorage, k => k, true);
      return { ...state, ...rehydratedState };
    }

    return localStorageSync({
      // Pull initial state from local storage on startup
      rehydrate: true,
      // Feature states synced with localStorage
      keys: keys
    })(reducer)(state, action);
  }
}