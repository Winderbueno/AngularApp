//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import { forgotPasswordSubmit } from '@app_account/forgot-password/forgot-password.actions';
import { loginSubmit } from '@app_account/login/login.actions';
import { toolbarLogOut } from '@app_layout/toolbar/toolbar.component.actions';
import { registerSubmit } from '@app_account/register/register.actions';
import * as ComponentActions from '@app_account/reset-password/reset-password.actions';
import { validateResetToken } from '@app_account/reset-password/reset-password.actions';
import { verifyEmailSubmit } from '@app_account/verify-email/verify-email.actions';
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
            message: 'Please check your email for password reset instructions'
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
            message: 'Registration successful, please check your email for verification instructions'
          })),
          catchError((error) => of(AccountAPIActions.registerFailure({ error: error })))
    ))
  ));


  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toolbarLogOut /* TODO wich action ? */),
      exhaustMap(() =>
        this.accountService.refreshToken().pipe(
          /* TODO_NGRX
            next:
              set Account info in store
              Then : startRefreshTokenTimer();
            error:  }
          */
          map(() => AccountAPIActions.refreshTokenSuccess()),
          catchError((error) => of(AccountAPIActions.refreshTokenFailure({ error: error })))
    ))
  ));


  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ComponentActions.resetPasswordSubmit),
      exhaustMap((action) =>
        this.accountService.resetPassword(action.token, action.password, action.confirmPassword).pipe(
          map(() => AccountAPIActions.resetPasswordSuccess({
            message: 'Password successfully reinitialised, you can now log in :)'
          })),
          catchError((error) => of(AccountAPIActions.resetPasswordFailure({ error: error })))
    ))
  ));

  verifyEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(verifyEmailSubmit),
      exhaustMap((action) =>
        this.accountService.verifyEmail(action.token).pipe(
          /* TODO - NgRx
            error: () => { this.emailStatus = EmailStatusEnum.Failed; }
          */
          map(() => AccountAPIActions.verifyEmailSuccess({
            message: 'Verification successful, you can now login'
          })),
          catchError((error) => of(AccountAPIActions.verifyEmailFailure({ error: error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
