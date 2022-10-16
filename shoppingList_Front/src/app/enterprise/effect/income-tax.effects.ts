//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { filter, withLatestFrom, switchMap } from 'rxjs/operators';
//#endregion

//#region Module
import { FormValue } from '@form/model';
import * as fromForm from '@form/store';
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
      filter((action: SetValueAction<FormValue>) => 
        (action.controlId === 'Income.CA' || action.controlId === 'Income.VersementLiberatoire')),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectState)),
          withLatestFrom(this.store.select(fromForm.selectFormValue('Income'))),
          switchMap(([[, state], formValue]) => {

            let isVersLib = formValue.VersementLiberatoire as boolean;
            let CA = formValue.CA as number;
            let ds: IncomeTaxRow[] = [...state.incomeTaxDataSource.map(row => { return { ...row }; })];
            let totalAmount: number = 0;

            if(isVersLib){
              // TODO - 2,2 is only for BNC (rate is different for BIC..)
              totalAmount = this.format.ToDecimal(CA * 2.2 / 100);
              ds = [{ range: 'Total' }];
            } else {
              // Apply tax allowance on CA
              let CA_Abattu = CA * (1 - 0.34);

              // Compute by tax slices
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
            }

            // Set total row
            let totalRow = ds[ds.length - 1];
            totalRow.amount = this.format.ToDecimal(totalAmount);
            totalRow.rate = Math.round(this.format.ToDecimal(totalAmount * 100 / CA));

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
