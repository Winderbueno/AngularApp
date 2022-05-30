//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
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
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss'],
  providers: [CurrencyPipe]
})
export class IncomeTaxComponent {

  // Form
  formId = 'Income-Tax';
  FieldFormatEnum = FieldFormatEnum;

  // External value
  paramValues!: FormValue;

  dataSource: Row[] = [
    { description: 'CA', value: 0 },
    { description: 'Cotisation Sociale', value: 0 },
    { description: 'Formation Professionelle', value: 0 },
    { description: 'Totaux', value: 0 },
  ];
  displayedColumns: string[] = ['description', 'value'];

  // Action
  resetFormAction = fromForm.resetFormAction({ formId: this.formId });

  constructor(
    public store: Store,
    private currencyPipe: CurrencyPipe) {

    this.store.select(fromForm.selectFormValue('Income'))
      .subscribe(val => {
        this.paramValues = val;
        let CA = (val.TJ as number) * 218;
        
        // Income
        this.dataSource[0].value = CA;
        
        // Social
        this.dataSource[1].value = this.computeSocial(CA);
        this.dataSource[2].value = CA * 0.2 / 100;

        this.dataSource[3].value = currencyPipe.transform(
          this.dataSource[1].value + this.dataSource[2].value,
          'USD')?.replace("$", "") as unknown as number;
      });   
  }

  computeSocial(CA: number): number {
    let τ_Social = 22;
    if (this.paramValues.Acre) { τ_Social = 11; }
    return CA * τ_Social / 100;
  }
}