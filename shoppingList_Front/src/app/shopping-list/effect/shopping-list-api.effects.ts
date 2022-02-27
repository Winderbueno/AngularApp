//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, filter } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromForm from '@form/store/';
import * as fromAPI from '../service/shopping-list.api.actions';
import * as fromComponent from '../component';
import * as fromStore from '../store/';
//#endregion

//#region Service, Model
import { ShoppingListService } from '../service/shopping-list.service';
import { ShoppingList } from '../model/current/shopping-list.model';
import { CreateProductReq } from '../model/current/create-product-req.model';
//#endregion


@Injectable()
export class ShoppingListAPIEffects {

  // Load user's active shoppingList from server
  getActive$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromStore.loadActiveAction),
      switchMap(() =>
        this.shoppingListService.getActive().pipe(
          map((sl: ShoppingList) => fromAPI.loadActiveSuccessAction({ shoppingList: sl })),
          catchError((error) => of(fromAPI.loadActiveFailureAction({ error: error })))
        )
      )
  ));

  resetBoughtStatus$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromForm.buttonClickedAction),
      filter((action) => action.buttonId === 'Reset Status'),
      switchMap(() =>
        this.shoppingListService.resetBoughtStatus("1")
          .pipe(
            map((resp) => fromAPI.resetBoughtStatusSuccessAction({ shoppingList: resp })),
            catchError((resp) => of(fromAPI.loadActiveFailureAction({ error: resp })))
        )
      )
  ));

  createProduct$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action) => action.formId === 'Add Product'),
      switchMap((action) => {
        
        var prodToCreate: CreateProductReq = {
          category: action.formValue.Category as string,
          subCategory: action.formValue.SubCategory as string,
          name: action.formValue.ProductName as string,
          quantity: 1,
          note: "test" // TODO - This field should note be that
        }

        return this.shoppingListService.createProduct("1", prodToCreate)
          .pipe(
            map((resp) => fromAPI.createProductSuccessAction({ product: resp })),
            catchError((resp) => of(fromAPI.createProductFailureAction({ error: resp }))));
      })
    )
  );

  updtProduct$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromComponent.productChipClickedAction),
      switchMap((action) =>
        this.shoppingListService.updtProduct(action.shoppingListId, action.productUpdate.changes)
          .pipe(
            map((resp) => fromAPI.updtProductSuccessAction({ message: resp })),
            catchError((resp) => of(fromAPI.updtProductFailureAction({ error: resp })))
        )
      )
  ));

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromComponent.productChipDeleteButtonClickedAction),
      switchMap((action) =>
        this.shoppingListService.deleteProduct(action.shoppingListId, action.productId)
          .pipe(
            map((resp) => fromAPI.deleteProductSuccessAction({ message: resp })),
            catchError((resp) => of(fromAPI.deleteProductFailureAction({ error: resp })))
        )
      )
  ));

  constructor(
    private actions$: Actions,
    private store: Store,
    private shoppingListService: ShoppingListService
  ) { }
}
