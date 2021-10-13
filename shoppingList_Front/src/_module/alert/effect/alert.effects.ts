//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromStore from '../store/';
import * as fromRouter from '@ngrx/router-store'; // TODO - Cela cree une dependance avec le router
//#endregion


@Injectable()
export class AlertEffects {

  // On Route Change, except if 'keepAfterRouteChange', Dismiss Alert
  dismissAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRouter.routerRequestAction),
      withLatestFrom(this.store.select(fromStore.selectState)),
      filter(([action, alert]) => alert.alert != null && alert.keepAfterRouteChange === false),
      map(() => { return fromStore.dismissAlertAction(); })
    )
  );

  // On Route Change, if 'keepAfterRouteChange', keepAfterRouteChange Alert
  keepAfterRouteChangeAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRouter.routerRequestAction),
      withLatestFrom(this.store.select(fromStore.selectState)),
      filter(([action, alert]) => alert.keepAfterRouteChange === true),
      map(() => { return fromStore.keptAfterRouteChangeAction(); })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
