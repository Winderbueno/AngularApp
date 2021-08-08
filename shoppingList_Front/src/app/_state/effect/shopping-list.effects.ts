//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShoppingListPagesActions } from '@app_action/page/shopping-list.page.action';
import { ShoppingListAPIActions }  from '@app_action/api/shopping-list.api.action';
//#endregion

//#region App Service
import { ShoppingListService } from '@app_service/shopping-list.service';
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
