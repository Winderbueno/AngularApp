//#region Angular, Material, RxJS
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ShopListPageActions from '@app_action/shopping-list-page.action';
import * as ShopListAPIActions from '@app_action/shopping-list-api.action';
//#endregion

//#region App Component, Model, Service
import { ShoppingListService } from '@app_shoppingList/service/shopping-list.service';
//#endregion


@Injectable()
export class ShoppingListEffects {

  getActive$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShopListPageActions.loadActive),

      mergeMap(() =>
        this.shoppingListService.getActive().pipe(
          map((shoppingList) => ShopListAPIActions.loadActiveSuccess({ ShoppingList: shoppingList })),
          catchError((error) => of(ShopListAPIActions.loadActiveFailed(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shoppingListService: ShoppingListService
  ) {}
}
