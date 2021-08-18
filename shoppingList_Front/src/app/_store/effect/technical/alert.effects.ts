//#region Angular & Material
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import * as AlertActions from '@app_alert/_store/alert.actions';
import { AlertTypeEnum } from '../../../_module/alert/model/enum/alert-type.enum';

//#endregion

//#region App Service
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
        keepAfterRouteChange: true // TODO -> Has currently no impact
      }))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
  ) { }
}
