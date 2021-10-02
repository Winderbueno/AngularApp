//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromAPI from '../service/account.api.actions';
import * as fromComponent from '../component/';
import * as TimerTriggeredActions from '@account/store/action/timer-triggered.actions';
import { toolbarLogOutAction } from '@layout/component';// TODO -
//#endregion

//#region Service, Model
import { AccountService } from '@account/service/account.service';
import { Account } from '@account/model/account.model';
//#endregion


@Injectable()
export class AccountAPIEffects {

  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromComponent.forgotPasswordSubmitAction),
      exhaustMap((action) =>
        this.accountService.forgotPassword(action.email).pipe(
          map(() => fromAPI.forgotPasswordSuccessAction({
            message: 'Please check your email for password reset instructions' // TODO - Msg
          })),
          catchError((error) => of(fromAPI.forgotPasswordFailureAction({ error: error })))
    ))
  ));


  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromComponent.loginSubmitAction),
      exhaustMap((action) =>
        this.accountService.login(action.email, action.password).pipe(
          map((account: Account) => fromAPI.loginSuccessAction({ account: account })),
          catchError((error) => of(fromAPI.loginFailureAction({ error: error })))
    ))
  ));


  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toolbarLogOutAction), // TODO
      exhaustMap(() =>
        this.accountService.logout().pipe(
          map(() => fromAPI.logoutSuccessAction()),
          catchError((error) => of(fromAPI.logoutFailureAction({ error: error })))
    ))
  ));


  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromComponent.registerSubmitAction),
      exhaustMap((action) =>
        this.accountService.register(action.account).pipe(
          map(() => fromAPI.registerSuccessAction({
            message: 'Registration successful, please check your email for verification instructions' // TODO - Msg
          })),
          catchError((error) => of(fromAPI.registerFailureAction({ error: error })))
    ))
  ));


  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        // TODO -> Also called at App Init, maybe start timout at App Init ?
        TimerTriggeredActions.refreshTokenTimerEnded),
      exhaustMap(() =>
        this.accountService.refreshToken().pipe(
          map((account: Account) => fromAPI.refreshTokenSuccessAction({ account: account })),
          catchError((error) => of(fromAPI.refreshTokenFailureAction({ error: error })))
    ))
  ));


  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromComponent.resetPasswordSubmitAction),
      exhaustMap((action) =>
        this.accountService.resetPassword(action.token, action.password, action.confirmPassword).pipe(
          map(() => fromAPI.resetPasswordSuccessAction({ // TODO - Msg (Error msg are in BACK, Success msg are here)
            message: 'Password successfully reinitialised, you can now log in :)'
          })),
          catchError((error) => of(fromAPI.resetPasswordFailureAction({ error: error })))
    ))
  ));


  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) {}
}
