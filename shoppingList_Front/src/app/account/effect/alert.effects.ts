//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as RouterActions from '@ngrx/router-store';
//#endregion

//#region App Action, Selector, Model
import * as AccountAPIActions from '@app_service/action/account.api.actions';
import * as AlertActions from '@alert/store/alert.actions';
import * as AlertSelectors from '@alert/store/alert.selectors';
import { AlertTypeEnum } from '@alert/model/enum/alert-type.enum';
//#endregion


@Injectable()
export class AlertEffects {

  triggerErrorAlert$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
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
    // TODO -> Should not be in Account Module
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
    private store: Store
  ) { }
}
