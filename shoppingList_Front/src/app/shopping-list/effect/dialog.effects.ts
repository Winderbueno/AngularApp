//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as Components from '../component';
import * as fromForm from '@form/store';
//#endregion


@Injectable()
export class DialogEffects {

  // Open Dialog
  openDialog$ = createEffect(() =>

    this.actions$.pipe(
      ofType(fromForm.buttonClickedAction),
      filter((action) => action.buttonId === 'Add Product'),
      map(action => {
        this.dialog.open(
          Components.DialogAddProductComponent, 
          { width: '400px' }
        );
        return action;
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    public dialog: MatDialog,
  ) { }
}
