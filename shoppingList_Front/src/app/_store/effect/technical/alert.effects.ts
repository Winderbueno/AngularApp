//#region Angular & Material
import { Injectable } from '@angular/core';
import { map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
//#endregion

//#region App Action, Selector, Model
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import * as ShoppingListAPIActions from '@app_action/api/shopping-list.api.actions';
import * as RouterActions from '@ngrx/router-store';
import * as AlertActions from '@app_alert/_store/alert.actions';
import * as AlertSelectors from '@app_alert/_store/alert.selectors';
import { AlertTypeEnum } from '@app_alert/model/enum/alert-type.enum';
//#endregion


@Injectable()
export class AlertEffects {

  triggerErrorAlert$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        ShoppingListAPIActions.loadActiveFailure,
        AccountAPIActions.loginFailure,
        AccountAPIActions.logoutFailure,
        AccountAPIActions.registerFailure,
        AccountAPIActions.forgotPasswordFailure,
        AccountAPIActions.registerFailure,
        AccountAPIActions.verifyEmailFailure,
        AccountAPIActions.resetPasswordFailure),
      map((error) => AlertActions.triggerAlert({
        alertType: AlertTypeEnum.Error,
        message: error.error,
        keepAfterRouteChange: false
      }))
    )
  );


  triggerSuccessAlert$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        AccountAPIActions.resetPasswordSuccess,
        AccountAPIActions.registerSuccess,
        AccountAPIActions.verifyEmailSuccess,
        AccountAPIActions.forgotPasswordSuccess),
      map((action) => AlertActions.triggerAlert({
        alertType: AlertTypeEnum.Success,
        message: action.message,
        keepAfterRouteChange: true
      }))
    )
  );


  dismissAlert$ = createEffect(() =>

    this.actions$.pipe(
      ofType(RouterActions.routerRequestAction),
      withLatestFrom(this.store.select(AlertSelectors.getAlertState)),
      map(([action, alertState]) => {

        if(alertState.keepAfterRouteChange===true){
          return AlertActions.hasBeenKeptAfterRouteChange();
        } else { // TODO - Don't dismiss Alert if no alert in the state, but require 'not to dispatch in this case action'
          return AlertActions.dismissAlert();
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
  ) { }
}
