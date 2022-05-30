//#region Angular, Material, NgRx
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromForm from '@form/store';
import { FieldFormatEnum, FormValue } from '@form/model';
//#endregion

export interface Row {
  description: string;
  value: number;
}


@Component({
  selector: 'income-tax',
  templateUrl: './income-tax.component.html'
})
export class IncomeTaxComponent {

  // Form
  formId = 'Income-Tax';
  FieldFormatEnum = FieldFormatEnum;

  // External value
  paramValues!: FormValue;
  CA: number = 0;

  dataSource: Row[] = [
    { description: 'CA', value: this.CA },
    { description: 'Cotisation Sociale', value: 0 },
  ];
  displayedColumns: string[] = ['description', 'value'];

  // Action
  resetFormAction = fromForm.resetFormAction({ formId: this.formId });

  constructor(public store: Store) {
    this.store.select(fromForm.selectFormValue('Income'))
      .subscribe(val => {
        this.paramValues = val;
        this.CA = (val.TJ as number) * 218;

        this.dataSource = [
          { description: 'CA', value: this.CA },
          { description: 'Cotisation Sociale', value: this.computeSocial() },
        ];
      });   
  }

  computeSocial(): number {
    let τ_Social = 22;
    if (this.paramValues.Acre) { τ_Social = 11; }

    return this.CA * τ_Social / 100;
  }
}