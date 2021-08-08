//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShoppingListComponentsActionTypes } from '@app_action/component/shopping-list.component.action';
import { LoadActiveSuccess, LoadActiveFailure }  from '@app_action/api/shopping-list.api.action';
//#endregion

//#region App Service
import { ShoppingListService } from '@app_service/shopping-list.service';
//#endregion


@Injectable()
export class ShoppingListEffects {

  //Load user's active shoppingList from server
  getActive$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingListComponentsActionTypes.LOAD_ACTIVE),

      mergeMap(() =>
        this.shoppingListService.getActive().pipe(
          map((shoppingList) => new LoadActiveSuccess({ shoppingList: shoppingList })),
          //catchError((error) => of(ShoppingListAPIActions.loadActiveFailed(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shoppingListService: ShoppingListService
  ) {}
}
