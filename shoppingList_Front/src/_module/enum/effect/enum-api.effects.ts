//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromAPI from '../service/enum.api.actions';
import * as fromStore from '../store'
//#endregion

//#region Service, Model
import { EnumService } from '../service/enum.service';
import { Enum } from '../model/enum.model';
//#endregion


@Injectable()
export class EnumAPIEffects {

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.loadEnumAction),
      exhaustMap(() =>
        this.enumService.getAll().pipe(
          map((obj: Enum[]) => fromAPI.loadAllSuccessAction({ enums: obj })),
          catchError((error) => of(fromAPI.loadAllFailureAction({ error: error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private enumService: EnumService
  ) {}
}
