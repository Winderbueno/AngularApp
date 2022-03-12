//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Module
import * as fromRouter from '@ngrx/router-store';
//#endregion

//#region This
import * as fromStore from '../store';
//#endregion


@Injectable()
export class SideNavEffects {

  // On route change, if sideNav is open, close sideNav  
  closeSideNav$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRouter.routerRequestAction),
      withLatestFrom(this.store.select(fromStore.isOpenSideNav)),
      filter(([, isOpenSideNav]) => isOpenSideNav === true),
      map(() => fromStore.closeSideNavAction()), 
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}