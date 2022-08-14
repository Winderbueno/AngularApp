//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';
//#endregion

//#region Module
import * as fromDialog from '@dialog/store';
import * as fromForm from '@form/store';
//#endregion


@Injectable()
export class DialogEffects {

  closeDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action: any) => action.formId === 'Add Product'),
      map(() => fromDialog.closeDialogAction())
    )
  );

  constructor(private actions$: Actions) { }
}
