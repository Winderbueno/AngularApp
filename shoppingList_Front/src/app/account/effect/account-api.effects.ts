//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, switchMap, withLatestFrom, filter } from 'rxjs/operators';
//#endregion

//#region Action
import * as fromAPI from '../service/account.api.actions';
import * as fromStore from '../store';
import * as fromForm from '@form/store';
import * as fromToken from '@token/store';
//#endregion

//#region Service, Model
import { AccountService } from '@account/service/account.service';
//#endregion


@Injectable()
export class AccountAPIEffects {

  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action) => action.formId === 'Forgot Password'),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromForm.selectFormById(action.formId))),
          switchMap(([, formState]) => {
            return this.accountService.forgotPassword(formState.value.Email as string).pipe(
              map(() => fromAPI.forgotPasswordSuccessAction({ // TODO - Msg (Error msg are in BACK, Success msg are here)
                message: 'Please check your email for password reset instructions'
              })),
              catchError((error) => of(fromAPI.forgotPasswordFailureAction({ error: error })))
            );
          })
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action) => action.formId === 'Sign In'),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromForm.selectFormById(action.formId))),
          switchMap(([, formState]) => {
            return this.accountService.login(
              formState.value.Email as string, 
              formState.value.Password as string)
              .pipe(
                map((response) => fromAPI.loginSuccessAction({ account: response })),
                catchError((response) => of(fromAPI.loginFailureAction({ error: response })))
              );
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.logoutAction),
      exhaustMap(() =>
        this.accountService.logout().pipe(
          map(() => fromAPI.logoutSuccessAction()),
          catchError((response) => of(fromAPI.logoutFailureAction({ error: response })))
    ))
  ));

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action) => action.formId === 'Sign Up'),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromForm.selectFormById(action.formId))),
          switchMap(([, formState]) => {
            return this.accountService.register(formState.value)
              .pipe(
                map(() => fromAPI.registerSuccessAction({  // TODO - Msg
                  message: 'Registration successful, please check your email for verification instructions'
                })),
                catchError((error) => of(fromAPI.registerFailureAction({ error: error })))
              );
          })
        )
      )
    )
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.refreshTokenAction),
      exhaustMap(() =>
        this.accountService.refreshToken().pipe(
          map((response) => fromAPI.refreshTokenSuccessAction({ account: response })),
          catchError((response) => of(fromAPI.refreshTokenFailureAction({ error: response })))
    ))
  ));

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action) => action.formId === 'Reset Password'),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromForm.selectFormById(action.formId))),
          withLatestFrom(this.store.select(fromToken.selectTokenByName('Reset Password'))),
          switchMap(([[, formState], token]) => {
            return this.accountService.resetPassword(
              token?.value, 
              formState.value.Password as string, 
              formState.value.ConfirmPassword as string).pipe(
              map(() => fromAPI.resetPasswordSuccessAction({ // TODO - Msg
                message: 'Password successfully reinitialised, you can now log in :)'
              })),
              catchError((error) => of(fromAPI.resetPasswordFailureAction({ error: error })))
            );
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private accountService: AccountService
  ) {}
}
