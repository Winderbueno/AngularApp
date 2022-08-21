//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { filter, withLatestFrom, switchMap } from 'rxjs/operators';
//#endregion

//#region Module
import * as fromForm from '@form/model';
import { SetValueAction } from 'ngrx-forms';
import { FormatService } from '../service/format.service';
//#endregion

//#region This
import * as fromStore from '../store';
import { IncomeTaxRow } from '../model/income-tax-row.model';
//#endregion


@Injectable()
export class IncomeTaxEffects {

  computeIncomeTax$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetValueAction.TYPE),
      filter((action: SetValueAction<fromForm.FormValue>) => action.controlId === 'Income.CA'),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectState)),
          switchMap(([action, state]) => {

            // Apply tax allowance on CA
            let CA = action.value as unknown as number;
            let CA_Abattu = CA * (1 - 0.34);

            // Compute income tax amount by slices
            let ds: IncomeTaxRow[] = [...state.incomeTaxDataSource.map(row => { return { ...row }; })];
            let totalAmount: number = 0;
            ds.forEach((row, i) => {
              row.amount = 0;
              if (CA_Abattu > state.thresholds[i + 1]) {
                row.amount = this.format.ToDecimal((state.thresholds[i + 1] - state.thresholds[i]) * row.rate! / 100);
              }
              else if (CA_Abattu > state.thresholds[i]) {
                row.amount = this.format.ToDecimal((CA_Abattu - state.thresholds[i]) * row.rate! / 100);
              }
              totalAmount = row.amount + totalAmount;
            });

            // Set total row
            let totalRow = ds[ds.length - 1];
            totalRow.amount = this.format.ToDecimal(totalAmount);
            totalRow.rate = Math.trunc(this.format.ToDecimal(totalAmount * 100 / CA));

            return of(fromStore.incomeTaxComputedAction({dataSource: ds }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private format: FormatService) {}
}
