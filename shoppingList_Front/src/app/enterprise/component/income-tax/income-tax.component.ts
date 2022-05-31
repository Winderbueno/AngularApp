//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromForm from '@form/store';
//#endregion

export interface Row {
  threshold: number;
  rate: number;
  amount: number;
}

@Component({
  selector: 'income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss'],
  providers: [CurrencyPipe]
})
export class IncomeTaxComponent {
  
  dataSource: Row[] = [
    { threshold: 10225, rate: 11, amount: 0 },
    { threshold: 26070, rate: 30, amount: 0 },
    { threshold: 74545, rate: 41, amount: 0 },
    { threshold: 160336, rate: 45, amount: 0 },
  ];

  displayedColumns: string[] = ['threshold', 'rate', 'amount'];
  
  constructor(
    public store: Store,
    private currencyPipe: CurrencyPipe
  ) {

    this.store.select(fromForm.selectFormValue('Income'))
      .subscribe(incomeFormValue => {
        let CA_Abattu = (incomeFormValue.CA as number) * 0.34;
        
        // Income
        let row0 = this.dataSource[0];
        if(CA_Abattu > row0.threshold) {
          row0.amount =  this.currencyPipe.transform(row0.threshold * row0.rate,
            'USD')?.replace("$", "") as unknown as number;
        }
      });   
  }
}