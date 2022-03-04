//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, filter, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Module
import * as fromForm from '@form/store/';
//#endregion

//#region This
import * as fromAPI from '../service/shopping-list.api.actions';
import * as fromComponent from '../component';
import * as fromStore from '../store';
import { CreateProductReq } from '../model/current/create-product-req.model';
//#endregion


@Injectable()
export class AddProductAggregatorEffects {

  mapAddProductFormSubmitToAPICall$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action) => action.formId === 'Add Product'),
      withLatestFrom(this.store.select(fromStore.selectActive)),
      map(([action, shoppingList]) => {
        
        var prodToCreate: CreateProductReq = {
          category: action.formValue.Category as string,
          subCategory: action.formValue.SubCategory as string,
          name: action.formValue.ProductName as string,
          quantity: 1,
          note: "test" // TODO - This field should note be that
        }

        return fromAPI.createProductCallAction({
          shoppingListId: shoppingList[0].shoppingListId,
          product: prodToCreate
        });
      })
    )
  );

  mapAddProductChipSubmitToAPICall$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromComponent.submitAddProductChipAction),
      withLatestFrom(this.store.select(fromStore.selectActive)),
      map(([action, shoppingList]) => {
        
        var prodToCreate: CreateProductReq = {
          category: action.controlId.split('-')[1],
          subCategory: action.controlId.split('-')[2],
          name: action.controlValue,
          quantity: 1,
          note: "test" // TODO - This field should note be that
        }

        return fromAPI.createProductCallAction({
          shoppingListId: shoppingList[0].shoppingListId,
          product: prodToCreate
        });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
