//#region NgRx
import { ActionReducer } from '@ngrx/store';
import { localStorageSync, rehydrateApplicationState } from 'ngrx-store-localstorage';
//#endregion

//#region Module
import * as fromAccount from '@account/store';
import * as fromForm from '@form/store';
import * as fromShoppingList from '@shoppingList/store';
import * as fromTimer from '@timer/store';
//#endregion

//#region This
import * as Actions from '../core.actions';
import { GlobalState } from '../state/global.state';
//#endregion

const featureKeys: Array<string>= [
  fromAccount.featureKey,
  fromShoppingList.featureKey,
  fromTimer.featureKey,
  fromForm.featureKey
];

const featureSliceKeys: Array<object>= [];
let formKeyId: number | undefined = undefined;

/**
 * MetaReducer based on 'localStorageSync' module
 * See : https://github.com/btroncone/ngrx-store-localstorage/blob/master/README.md
 * It has the responsability of syncing 'globalState' with 'browserStorage'
 * according to a configuration object
 */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: GlobalState, action: any) => {

    // Dynamically get form to sync
    if (state && state.form) {
      let formIds = { form: fromForm.getFormToPersist(state.form) };
      formKeyId === undefined ? 
        formKeyId = featureSliceKeys.push(formIds) - 1 : 
        featureSliceKeys[formKeyId] = formIds;
    }

    // When localStorage is modified by another tab, 
    // Sync ngrx global state of 'account' feature with localStorage
    if (action.type === Actions.accountWindowStorageChangeAction.type) {
      const rehydratedState = rehydrateApplicationState(
        ['account'], 
        localStorage, k => k, true);
      return { ...state, ...rehydratedState };
    }

    return localStorageSync({
      rehydrate: true, // On startup, initial global state from local storage
      keys: [...featureKeys, ...featureSliceKeys] // State slices to sync
    })(reducer)(state, action);
  }
}