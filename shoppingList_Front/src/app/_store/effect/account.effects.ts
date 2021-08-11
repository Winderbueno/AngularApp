//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import * as AccountComponentActions from '@app_action/component/account.component.actions';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
import { Account } from '@app_model/account.model';
//#endregion


@Injectable()
export class AccountEffects {


  /* Call login route */
  login$ = createEffect(() => this.actions$.pipe(
    ofType(AccountComponentActions.loginSubmit),

    exhaustMap((action) =>
      this.accountService.login(action.email, action.password)
        .pipe(
          map((account: Account) => AccountAPIActions.loginSuccess({ account: account })),
          catchError((error) => of(AccountAPIActions.loginFailure({ error: error })))
        )
    )
  ));


  /* Call register route */
  register$ = createEffect(() => this.actions$.pipe(
    ofType(AccountComponentActions.registerSubmit),

    exhaustMap((action) =>
      this.accountService.register(action.account)
        .pipe(
          /* TODO_NGRX
            next: () => {
              this.alertService.success(
                'Registration successful, please check your email for verification instructions',
                { keepAfterRouteChange: true });
              this.router.navigate(['../login'], { relativeTo: this.route });},
            error: error => { this.alertService.error(error); }
          */
          map(() => AccountAPIActions.genericSuccess()),
          catchError((error) => of(AccountAPIActions.loginFailure({ error: error })))
        )
    )
  ));

  /* Call register route */
  forgotPassword$ = createEffect(() => this.actions$.pipe(
    ofType(AccountComponentActions.forgotPasswordSubmit),

    exhaustMap((action) =>
      this.accountService.forgotPassword(action.email)
        .pipe(
          /* TODO_NGRX
            next: () => this.alertService.success('Please check your email for password reset instructions'),
            error: error => this.alertService.error(error)
          */
          map(() => AccountAPIActions.genericSuccess()),
          catchError((error) => of(AccountAPIActions.loginFailure({ error: error })))
        )
    )
  ));


  /* Call resetPassword route */
  resetPassword$ = createEffect(() => this.actions$.pipe(
    ofType(AccountComponentActions.resetPasswordSubmit),

    exhaustMap((action) =>
      this.accountService.resetPassword(action.token, action.password, action.confirmPassword)
        .pipe(
          /* TODO_NGRX
            next: () => {
              this.alertService.success(
                'Password successfully reinitialised, you can now log in :)',
                { keepAfterRouteChange: true });
              this.router.navigate(['../login'], { relativeTo: this.route });},
            error: error => { this.alertService.error(error); }
          */
          map(() => AccountAPIActions.genericSuccess()),
          catchError((error) => of(AccountAPIActions.loginFailure({ error: error })))
        )
    )
  ));


  // Call login service
  verifyEmail$ = createEffect(() => this.actions$.pipe(
    ofType(AccountComponentActions.verifyEmailSubmit),

    exhaustMap((action) =>
      this.accountService.verifyEmail(action.token)
        .pipe(
          /* TODO - NgRx
            next: () => {
              this.alertService.success(
                'Verification successful, you can now login',
                { keepAfterRouteChange: true });
                this.router.navigate(['../login'], { relativeTo: this.route });},
            error: () => { this.emailStatus = EmailStatusEnum.Failed; }
          */
          map(() => AccountAPIActions.genericSuccess()),
          catchError((error) => of(AccountAPIActions.loginFailure({ error: error })))
        )
    )
  ));

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}