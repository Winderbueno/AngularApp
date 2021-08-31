//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
//#endregion

//#region App Action, Service, Selector
import * as ShoppingListAPIActions from '@app_shoppingList/store/action/shopping-list.api.actions';
import * as ShoppingListComponentActions from '@app_shoppingList/component/shopping-list/shopping-list.actions';
import * as AccountAPIActions from '@app_account/store/action/account.api.actions';
import { ShoppingListService } from '@app_shoppingList/service/shopping-list.service';
import { ShoppingList } from '@app_shoppingList/model/shopping-list.model';
//#endregion


@Injectable()
export class ShoppingListAPIEffects {

  // Load user's active shoppingList from server
  getActive$ = createEffect(() => this.actions$.pipe(
    ofType(
      ShoppingListComponentActions.loadActive,
      AccountAPIActions.loginSuccess),

    switchMap(() =>
      this.shoppingListService.getActive().pipe(
        map((sl: ShoppingList) => ShoppingListAPIActions.loadActiveSuccess({ shoppingList: sl })),
        catchError((error) => of(ShoppingListAPIActions.loadActiveFailure({ error: error })))
      )
    )
  )
  );

  //{ shoppingList: shoppingList }
  constructor(
    private actions$: Actions,
    private shoppingListService: ShoppingListService
  ) { }
}
