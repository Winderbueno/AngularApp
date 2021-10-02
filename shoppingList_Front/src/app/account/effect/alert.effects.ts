//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromAPI from '@account/service/account.api.actions';
import * as fromComponent from '@account/component/';
import * as fromAlert from '@alert/store/';
import * as fromRouter from '@ngrx/router-store';
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
      map((error) => fromAlert.triggerAlertAction({
        alertType: AlertTypeEnum.Error,
        message: error.error,
        keepAfterRouteChange: false
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


  dismissAlert$ = createEffect(() =>
    // TODO -> Should not be in Account Module
    this.actions$.pipe(
      ofType(fromRouter.routerRequestAction),
      withLatestFrom(this.store.select(fromAlert.getAlertState)),
      map(([action, alertState]) => {

        if(alertState.keepAfterRouteChange===true){
          return fromAlert.keptAfterRouteChangeAction();
        } else { // TODO - Don't dismiss Alert if no alert in the state, but require 'not to dispatch in this case action'
          return fromAlert.dismissAlertAction();
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
