//#region Angular & Material
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import * as RouterStore from '@ngrx/router-store';
import { AlertTypeEnum } from '../../_module/alert/model/enum/alert-type.enum';
import { Router, ActivatedRoute } from '@angular/router';

//#endregion

//#region App Service
//#endregion


@Injectable()
export class RouterEffects {

  /* Call login */
  changeRoute$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        AccountAPIActions.loginSuccess),
        // TODO -> Lancer une action qui declenche le router
      map(() => AccountAPIActions.loginSuccess({account: { accountId:"1"}})) // WARNNNN -> Loop
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }
}
