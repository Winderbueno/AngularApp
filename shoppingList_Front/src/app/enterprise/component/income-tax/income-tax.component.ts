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
  rate: number;
  value: number;
}

@Component({
  selector: 'income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss'],
  providers: [CurrencyPipe]
})
export class IncomeTaxComponent {
  
  dataSource: Row[] = [
    { description: 'CA', rate: 0, value: 0 },
    { description: 'Cotisation Sociale', rate: 22, value: 0 },
    { description: 'Formation Pro', rate: 0.2, value: 0 },
    { description: 'Totaux', rate: 0, value: 0 },
  ];

  displayedColumns: string[] = ['description', 'rate', 'value'];
  
  constructor(
    public store: Store,
    private currencyPipe: CurrencyPipe) {

    this.store.select(fromForm.selectFormValue('Income'))
      .subscribe(incomeFormValue => {
        let CA = (incomeFormValue.TJ as number) * 218;
        
        // Income
        this.dataSource[0].value = CA;
        
        // Cotisation Sociale
        incomeFormValue.Acre ? this.dataSource[1].rate = 11 : this.dataSource[1].rate = 22;
        this.dataSource[1].value = CA * this.dataSource[1].rate / 100;

        // Formation Pro
        this.dataSource[2].value = CA * 0.2 / 100;

        this.dataSource[3].value = this.currencyPipe.transform(
          this.dataSource[1].value + this.dataSource[2].value,
          'USD')?.replace("$", "") as unknown as number;
      });   
  }
}