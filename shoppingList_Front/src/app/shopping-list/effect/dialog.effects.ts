//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as Components from '../component';
import * as fromForm from '@form/store';
import { DialogAddProductComponent } from '../component';
//#endregion


@Injectable()
export class DialogEffects {

  dialogRef:MatDialogRef<DialogAddProductComponent> | undefined;

  openDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.buttonClickedAction),
      filter((action) => action.buttonId === 'Add Product'),
      map(() => { this.dialogRef = this.dialog.open(
        Components.DialogAddProductComponent, 
        { width: '400px' }
      );})
    ), { dispatch: false }
  );

  closeDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.buttonClickedAction),
      filter((action) => action.buttonId === 'Dialog.Product.Cancel'),
      map(() => { if(this.dialogRef !== undefined) this.dialogRef.close(); })
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    public dialog: MatDialog
  ) {}
}