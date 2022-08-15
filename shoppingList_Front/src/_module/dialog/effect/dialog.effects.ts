//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region This
import { DialogComponent } from '../component';
import * as fromAction from '../store/dialog.actions';
//#endregion


@Injectable()
export class DialogEffects {

  dialogRef: MatDialogRef<DialogComponent> | undefined;

  openDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAction.openDialogAction),
      map((action) => {

        // Create mat-dialog config object
        let dialogConfig: MatDialogConfig = {};
        if(action.config !== undefined) { dialogConfig = { ...action.config }; }
        dialogConfig.data = { component: action.component};

        // Open dialog
        this.dialogRef = this.dialog.open(DialogComponent, dialogConfig);
      })
    ), { dispatch: false }
  );

  closeDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAction.closeDialogAction),
      map(() => { if (this.dialogRef !== undefined) { this.dialogRef.close(); } })
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    public dialog: MatDialog
  ) { }
}
