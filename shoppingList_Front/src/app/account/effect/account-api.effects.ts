//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromAction from '../store/action/';
import * as fromComponent from '../component/';
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
          map(() => fromAction.forgotPasswordSuccessAction({
            message: 'Please check your email for password reset instructions' // TODO - Msg
          })),
          catchError((error) => of(fromAction.forgotPasswordFailureAction({ error: error })))
    ))
  ));


  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromComponent.loginSubmitAction),
      exhaustMap((action) =>
        this.accountService.login(action.email, action.password).pipe(
          map((account: Account) => fromAction.loginSuccessAction({ account: account })),
          catchError((error) => of(fromAction.loginFailureAction({ error: error })))
    ))
  ));


  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toolbarLogOutAction), // TODO
      exhaustMap(() =>
        this.accountService.logout().pipe(
          map(() => fromAction.logoutSuccessAction()),
          catchError((error) => of(fromAction.logoutFailureAction({ error: error })))
    ))
  ));


  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromComponent.registerSubmitAction),
      exhaustMap((action) =>
        this.accountService.register(action.account).pipe(
          map(() => fromAction.registerSuccessAction({
            message: 'Registration successful, please check your email for verification instructions' // TODO - Msg
          })),
          catchError((error) => of(fromAction.registerFailureAction({ error: error })))
    ))
  ));


  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAction.refreshTokenAction),
      exhaustMap(() =>
        this.accountService.refreshToken().pipe(
          map((account: Account) => fromAction.refreshTokenSuccessAction({ account: account })),
          catchError((error) => of(fromAction.refreshTokenFailureAction({ error: error })))
    ))
  ));


  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromComponent.resetPasswordSubmitAction),
      exhaustMap((action) =>
        this.accountService.resetPassword(action.token, action.password, action.confirmPassword).pipe(
          map(() => fromAction.resetPasswordSuccessAction({ // TODO - Msg (Error msg are in BACK, Success msg are here)
            message: 'Password successfully reinitialised, you can now log in :)'
          })),
          catchError((error) => of(fromAction.resetPasswordFailureAction({ error: error })))
    ))
  ));


  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) {}
}
