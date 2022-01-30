//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromComponent from '../component/';
//#endregion


@Injectable()
export class RouterEffects {

  routeToLogin$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        fromComponent.clickOnLogoutMenuAction,
      ),
      tap(() => {
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }
}
