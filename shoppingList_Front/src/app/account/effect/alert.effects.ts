//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromAction from '../store/action/';
import * as fromComponent from '../component/';
import * as fromAlert from '@alert/store/';
//#endregion

//#region Model
import { AlertTypeEnum } from '@alert/model/enum/alert-type.enum';
//#endregion


@Injectable()
export class AlertEffects {

  triggerErrorAlert$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        fromAction.loginFailureAction,
        fromAction.logoutFailureAction,
        fromAction.registerFailureAction,
        fromAction.forgotPasswordFailureAction,
        fromAction.registerFailureAction,
        fromAction.resetPasswordFailureAction
      ),
      map((action) => fromAlert.triggerAlertAction({
        alertType: AlertTypeEnum.Error,
        message: action.error,
        keepAfterRouteChange: false
      }))
    )
  );


  triggerKeepAfterRouteErrorAlert$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        fromAction.autoLogOutAction,
      ),
      map((action) => fromAlert.triggerAlertAction({
        alertType: AlertTypeEnum.Error,
        message: action.error,
        keepAfterRouteChange: true
      }))
    )
  );


  triggerSuccessAlert$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        fromAction.resetPasswordSuccessAction,
        fromAction.registerSuccessAction,
        fromAction.forgotPasswordSuccessAction,
        fromComponent.emailTokenValidatedAction
      ),
      map((action) => fromAlert.triggerAlertAction({
        alertType: AlertTypeEnum.Success,
        message: action.message,
        keepAfterRouteChange: true
      }))
    )
  );


  constructor(
    private actions$: Actions
  ) { }
}
