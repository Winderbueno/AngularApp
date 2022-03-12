//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromStore from '../store';
import * as fromRouter from '@ngrx/router-store';
import { SnackbarComponent } from '../component';
import { AlertTypeEnumClass } from '../model/alert-type.enum';
//#endregion


@Injectable()
export class AlertEffects {

  snackBarRef: MatSnackBarRef<SnackbarComponent> | undefined;

  // Trigger alert
  triggerAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.triggerAlertAction),
      map((action) => {
        this.snackBarRef = this.snackBar.openFromComponent(SnackbarComponent, {
          data: action.message,
          panelClass: AlertTypeEnumClass[action.alertType]
        }); 
      })
    ), { dispatch: false }
  );
  
  // Dismiss alert
  dismissAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.dismissAlertAction),
      map(() => { 
        if(this.snackBarRef !== undefined) this.snackBarRef.dismiss();
        return fromStore.alertDismissedAction(); })
    )
  );

  // On route change, except if 'keepAfterRouteChange', dismiss alert
  keepAfterRouteChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRouter.routerNavigatedAction),
      withLatestFrom(this.store.select(fromStore.selectState)),
      filter(([, alertState]) => alertState.isAlerting),
      map(([, alertState]) => { 
        if(alertState.keepAfterRouteChange === true) return fromStore.keptAfterRouteChangeAction();        
        return fromStore.dismissAlertAction(); })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private snackBar: MatSnackBar
  ) {}
}
