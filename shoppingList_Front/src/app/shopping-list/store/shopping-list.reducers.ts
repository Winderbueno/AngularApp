//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Model, Action
import { ShoppingListState, initialState, adapter } from './shopping-list.state';
import * as fromForm from '@form/store';
import * as fromAPI from '../service/shopping-list.api.actions';
import * as fromComponent from '../component';
import * as AccountAPIActions from '@account/service/account.api.actions'; // TODO
//#endregion

export const featureKey = 'shoppingList';

const shoppingListReducer = createReducer(
  initialState,

  on(fromAPI.loadActiveSuccessAction,
    (state, { shoppingList }) => 
      { return adapter.addOne(shoppingList, { ...state, isActiveLoaded: true }) }
  ),

  on(
    AccountAPIActions.logoutSuccessAction,
    AccountAPIActions.logoutFailureAction,
    AccountAPIActions.refreshTokenFailureAction, // TODO - Any type of Logout should restore state to initial state
    (state) => 
      { return adapter.removeAll({ ...state, isActiveLoaded: false,}) }
  ),

  on(fromComponent.productChipClickedAction,
    (state, action) => {
      // Toggle product bought status 
      // TODO - Nested update should be avoided in reducer
      let changes = {
        ...state.entities[action.shoppingListId],
        catProducts: state.entities[action.shoppingListId]?.catProducts?.map((item) => {
          if (item.category !== action.category) { return item; }
          return { ...item,
            subCatProducts: item.subCatProducts.map((item) => {
              if (item.subCategory !== action.subCategory) { return item; }
              return { ...item,
                products: item.products.map((item) => {
                  if (item.usedProductId !== action.productUpdate.id) { return item; }
                  return { ...item, bought: !item.bought };})};})}})}
      
      return adapter.updateOne({
        id: action.shoppingListId,
        changes: changes
      }, state);
    }
  ),

  on(fromForm.buttonClickedAction,
    (state, action) => {
      if(action.buttonId === 'Reset Status') {
        // Reset all product bought status
        // TODO - Nested update should be avoided in reducer 
        let changes = {
          ...state.entities[1],
          catProducts: state.entities[1]?.catProducts?.map((item) => {
            return { ...item,
              subCatProducts: item.subCatProducts.map((item) => {
                return { ...item,
                  products: item.products.map((item) => {
                    return { ...item, bought: true };})};})}})}
                    
        return adapter.updateOne({ id: 1, changes: changes }, state);
      }
      return state; 
    }
  ),

  on(fromComponent.productChipDeleteButtonClickedAction,
    (state, action) => {

        // Delete Product
        // TODO - Nested update should be avoided in reducer 
        let changes = {
          ...state.entities[1],
          catProducts: state.entities[1]?.catProducts?.map((item) => {
            return { ...item,
              subCatProducts: item.subCatProducts.map((item) => {
                return { ...item,
                  products:  item.products.filter((item) => item.usedProductId !== Number(action.productId))
                };})}})}
                    
        return adapter.updateOne({ id: 1, changes: changes }, state);
      }
    
  ),

);


export function reducer(state: ShoppingListState | undefined, action: Action) {
  return shoppingListReducer(state, action);
}
