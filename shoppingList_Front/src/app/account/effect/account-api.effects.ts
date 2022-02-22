//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, switchMap, withLatestFrom, filter } from 'rxjs/operators';
//#endregion

//#region Action
import * as fromAPI from '../service/account.api.actions';
import * as fromStore from '../store';
import * as fromCore from '@core/store';
import * as fromForm from '@form/store';
import * as fromTimer from '@timer/store';
import * as fromToken from '@token/store';
//#endregion

//#region Service
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
          withLatestFrom(this.store.select(fromForm.selectFormValue(action.formId))),
          switchMap(([, formValue]) => {
            return this.accountService.forgotPassword(formValue.Email as string).pipe(
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
          withLatestFrom(this.store.select(fromForm.selectFormValue(action.formId))),
          switchMap(([, formValue]) => {
            return this.accountService.login(
              formValue.Email as string, 
              formValue.Password as string)
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
          withLatestFrom(this.store.select(fromForm.selectFormValue(action.formId))),
          switchMap(([, formValue]) => {
            return this.accountService.register(formValue)
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
      ofType(
        ROOT_EFFECTS_INIT,
        fromCore.accountWindowStorageChangeAction,
        fromTimer.timerEndedAction),
      filter((action:any) => {
        // Run effect only for corresponding timer
        let filter:boolean = true;
        if(action.type === fromTimer.timerEndedAction.type 
          && action.timerId !== "RefreshToken") filter=false; 
        return filter;
      }),
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
          withLatestFrom(this.store.select(fromForm.selectFormValue(action.formId))),
          withLatestFrom(this.store.select(fromToken.selectToken('Reset Password'))),
          switchMap(([[, formValue], token]) => {
            return this.accountService.resetPassword(
              token?.value, 
              formValue.Password as string, 
              formValue.ConfirmPassword as string).pipe(
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
