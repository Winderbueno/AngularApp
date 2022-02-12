//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, filter } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromForm from '@form/store/';
import * as fromAPI from '../service/shopping-list.api.actions';
import * as fromStore from '../store/';
//#endregion

//#region Service, Model
import { ShoppingListService } from '../service/shopping-list.service';
import { ShoppingList } from '../model/current/shopping-list.model';
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
      ofType(fromForm.clickedOnButtonAction),
      filter((action) => action.buttonId === 'Reset Status'),
      switchMap(() =>
        this.shoppingListService.resetBoughtStatus("1").pipe(
          map((resp) => fromAPI.resetBoughtStatusSuccessAction({ shoppingList: resp })),
          catchError((resp) => of(fromAPI.loadActiveFailureAction({ error: resp })))
        )
      )
  ));

  constructor(
    private actions$: Actions,
    private shoppingListService: ShoppingListService
  ) { }
}
