//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromEnum from '@enum/store/';
//#endregion


@Injectable()
export class EnumEffects {

  loadAllEnum$ = createEffect(() =>

    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => fromEnum.loadEnumAction())
    )
  );

  constructor(
    private actions$: Actions
  ) {}
}
