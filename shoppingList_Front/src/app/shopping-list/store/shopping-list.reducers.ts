//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Model, Action
import { ShoppingListState, initialState, adapter } from './shopping-list.state';
import * as fromForm from '@form/store';
import * as fromAPI from '../service/shopping-list.api.actions';
import * as fromComponent from '../component';
import * as AccountAPIActions from '@account/service/account.api.actions'; // TODO
import { UsedProduct } from '../model/current/used-product.model';
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
      if(action.buttonId !== 'Reset Status') { return state; }

      // Reset all product bought status
      // TODO - Nested update should be avoided in reducer 
      let changes = {
        ...state.entities[state.ids[0]],
        catProducts: state.entities[state.ids[0]]?.catProducts?.map((item) => {
          return { ...item,
            subCatProducts: item.subCatProducts.map((item) => {
              return { ...item,
                products: item.products.map((item) => {
                  return { ...item, bought: true };})};})}})}
                    
      return adapter.updateOne({ id: 1, changes: changes }, state); 
    }
  ),

  on(fromComponent.productChipDeleteButtonClickedAction,
    (state, action) => {

      // Delete Product
      // TODO - Nested update should be avoided in reducer 
      let changes = {
        ...state.entities[state.ids[0]], // TODO - Warn Id Ref
        catProducts: state.entities[state.ids[0]]?.catProducts?.map((item) => {
          
          let subCatToDelete:string|undefined;
          let filteredSubCatProd = item.subCatProducts.map((item) => {
            let filteredProd = item.products.filter(item => item.usedProductId !== Number(action.productId));
            if(filteredProd.length === 0) subCatToDelete = item.subCategory;
            return { ...item, products: filteredProd };
          });

          if (subCatToDelete) { 
            filteredSubCatProd = item.subCatProducts.filter(item => item.subCategory !== subCatToDelete); 
          }
          return { ...item, subCatProducts: filteredSubCatProd }
        })
      }
                    
      return adapter.updateOne({ id: 1, changes: changes }, state);
    }
  ),

  on(fromForm.formValidatedAction,
    (state, action) => {
      if(action.formId !== 'Add Product') { return state; }

      var prodToCreate: UsedProduct = {
        usedProductId: 1, 
        name: action.formValue.ProductName as string,
        bought: true,
        quantity: 1,
        note: "test"
      }

      let changes = {
        ...state.entities[state.ids[0]],
        catProducts: state.entities[state.ids[0]]?.catProducts?.map((item) => {
          if (item.category != action.formValue.Category) { return item; }
          return { ...item,
            subCatProducts: item.subCatProducts.map((item) => {
              if (item.subCategory != action.formValue.SubCategory) { return item; }
              return { ...item,
                products: [ ...item.products.slice(0, item.products.length),
                  prodToCreate]};})}})}
                    
      return adapter.updateOne({ id: 1, changes: changes }, state);
    }
  ),
);

export function reducer(state: ShoppingListState | undefined, action: Action) {
  return shoppingListReducer(state, action);
}