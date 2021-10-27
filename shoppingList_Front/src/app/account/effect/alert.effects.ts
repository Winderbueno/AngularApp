//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromAPI from '../service/account.api.actions';
import * as fromComponent from '../component/';
import * as fromStore from '../store/';
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
        fromAPI.loginFailureAction,
        fromAPI.logoutFailureAction,
        fromAPI.registerFailureAction,
        fromAPI.forgotPasswordFailureAction,
        fromAPI.registerFailureAction,
        fromAPI.resetPasswordFailureAction
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
        fromStore.autoLogOutAction,
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
        fromAPI.resetPasswordSuccessAction,
        fromAPI.registerSuccessAction,
        fromAPI.forgotPasswordSuccessAction,
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
    private actions$: Actions,
    private store: Store
  ) { }
}
