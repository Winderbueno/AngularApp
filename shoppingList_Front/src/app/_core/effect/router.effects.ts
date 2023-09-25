//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Module
import * as fromRouter from '@router/router.selectors';
//#endregion

//#region This
import * as fromStore from '../store';
//#endregion


@Injectable()
export class RouterEffects {

  routeToLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.accountWindowStorageChangeAction),
      withLatestFrom(this.store.select(fromRouter.selectUrl)),
      map(([action, currentUrl]) => {
        let newValue = action.event.newValue;
        let oldValue = action.event.oldValue;

        if (oldValue === newValue) { return; } 

        let wasLogged = oldValue.includes('"isLogged":true');
        let wasNotLogged = oldValue.includes('"isLogged":false');
        let hasLoggedIn = newValue.includes('"isLogged":true');
        let hasLoggedout = newValue.includes('"isLogged":false');
        
        if(wasNotLogged && hasLoggedIn && currentUrl && currentUrl.includes('auth')) { 
          this.router.navigate(['shop']); 
        }
        else if (wasLogged && hasLoggedout) { this.router.navigate(['auth/login']); }
      })
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    protected router: Router,
    protected route: ActivatedRoute
  ) { }
}
