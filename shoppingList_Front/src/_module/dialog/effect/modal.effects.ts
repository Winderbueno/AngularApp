//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region This
import { DialogComponent } from '../component';
import * as fromAction from '../store/modal.actions';
//#endregion


@Injectable()
export class DialogEffects {

  dialogRef: MatDialogRef<DialogComponent> | undefined;

  openDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAction.openDialogAction),
      map((action) => {

        

        this.dialogRef = this.dialog.open(
          DialogComponent,
          { width: '400px', data: { component: action.component } }
        );
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
