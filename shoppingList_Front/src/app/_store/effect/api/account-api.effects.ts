//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region App Action
import * as AccountAPIActions from '@app_service/action/account.api.actions';
import * as TimerTriggeredActions from '@app_store/timer-triggered.actions';
import { forgotPasswordSubmit } from '@app_account/component/forgot-password/forgot-password.actions';
import { toolbarLogOut } from '@layout/toolbar/toolbar.component.actions';
import { loginSubmit } from '@app_account/component/login/login.actions';
import { registerSubmit } from '@app_account/component/register/register.actions';
import * as ComponentActions from '@app_account/component/reset-password/reset-password.actions';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
import { Account } from '@app_model/account.model';
//#endregion


@Injectable()
export class AccountAPIEffects {

  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(forgotPasswordSubmit),
      exhaustMap((action) =>
        this.accountService.forgotPassword(action.email).pipe(
          map(() => AccountAPIActions.forgotPasswordSuccess({
            message: 'Please check your email for password reset instructions' // TODO - Msg
          })),
          catchError((error) => of(AccountAPIActions.forgotPasswordFailure({ error: error })))
    ))
  ));


  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSubmit),
      exhaustMap((action) =>
        this.accountService.login(action.email, action.password).pipe(
          map((account: Account) => AccountAPIActions.loginSuccess({ account: account })),
          catchError((error) => of(AccountAPIActions.loginFailure({ error: error })))
    ))
  ));


  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toolbarLogOut),
      exhaustMap(() =>
        this.accountService.logout().pipe(
          map(() => AccountAPIActions.logoutSuccess()),
          catchError((error) => of(AccountAPIActions.logoutFailure({ error: error })))
    ))
  ));


  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSubmit),
      exhaustMap((action) =>
        this.accountService.register(action.account).pipe(
          map(() => AccountAPIActions.registerSuccess({
            message: 'Registration successful, please check your email for verification instructions' // TODO - Msg
          })),
          catchError((error) => of(AccountAPIActions.registerFailure({ error: error })))
    ))
  ));


  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        // TODO -> Also called at App Init, maybe start timout at App Init ?
        TimerTriggeredActions.refreshTokenTimerEnded),
      exhaustMap(() =>
        this.accountService.refreshToken().pipe(
          map((account: Account) => AccountAPIActions.refreshTokenSuccess({ account: account })),
          catchError((error) => of(AccountAPIActions.refreshTokenFailure({ error: error })))
    ))
  ));


  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ComponentActions.resetPasswordSubmit),
      exhaustMap((action) =>
        this.accountService.resetPassword(action.token, action.password, action.confirmPassword).pipe(
          map(() => AccountAPIActions.resetPasswordSuccess({ // TODO - Msg (Error msg are in BACK, Success msg are here)
            message: 'Password successfully reinitialised, you can now log in :)'
          })),
          catchError((error) => of(AccountAPIActions.resetPasswordFailure({ error: error })))
    ))
  ));


  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
