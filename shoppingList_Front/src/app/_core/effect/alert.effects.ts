//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Module
import * as fromAlert from '@alert/store';
//#endregion

//#region This
import * as fromStore from '../store';
//#endregion


@Injectable()
export class AlertEffects {

  // When sideNav is toggled, dismiss alert  
  dismissAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.toggleSideNavAction),
      withLatestFrom(this.store.select(fromAlert.isAlerting)),
      filter(([, isAlerting]) => isAlerting === true),
      map(() => fromAlert.dismissAlertAction()), 
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}