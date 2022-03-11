//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region Module
import * as fromRouter from '@ngrx/router-store';
//#endregion

//#region This
import * as fromStore from '../store';
//#endregion


@Injectable()
export class SideNavEffects {

  // On route change, close the sideNav  
  closeSideNav$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRouter.ROUTER_NAVIGATED),
      map(() => fromStore.closeSideNavAction()), 
    )
  );

  constructor(private actions$: Actions) {}
}