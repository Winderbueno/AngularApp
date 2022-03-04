//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, filter, withLatestFrom } from 'rxjs/operators';
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
      withLatestFrom(this.store.select(fromStore.selectActive)),
      switchMap(([, shoppingList]) =>
        this.shoppingListService.resetBoughtStatus(shoppingList[0].shoppingListId)
          .pipe(
            map((resp) => fromAPI.resetBoughtStatusSuccessAction({ shoppingList: resp })),
            catchError((resp) => of(fromAPI.loadActiveFailureAction({ error: resp })))
        )
      )
  ));

  addProduct$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromAPI.createProductCallAction),
      switchMap((action) => {
        return this.shoppingListService.createProduct(
          action.shoppingListId, 
          action.product)
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
