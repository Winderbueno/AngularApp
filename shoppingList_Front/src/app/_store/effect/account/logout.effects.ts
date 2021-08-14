//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import { toolbarLogOut } from '@app_layout/component/toolbar/toolbar.component.actions';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
//#endregion


@Injectable()
export class LogoutEffects {


  /* Call logout */
  logout$ = createEffect(() => this.actions$.pipe(
    ofType(toolbarLogOut),

    exhaustMap(() =>
      this.accountService.logout()
        .pipe(
          /* TODO_NGRX
            next: this.router.navigate(['/account/login']);
            error:  }
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
