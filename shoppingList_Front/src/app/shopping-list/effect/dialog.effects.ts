//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromComponent from '../component';
//#endregion


@Injectable()
export class DialogEffects {

  // Open Dialog
  openDialog$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        // TODO - Use generic onButtonClickAction 
        fromComponent.clickOnAddProductButtonAction,
      ),
      map(action => {
        this.dialog.open(
          fromComponent.DialogAddProductComponent, 
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
