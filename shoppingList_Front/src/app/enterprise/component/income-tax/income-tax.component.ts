//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromForm from '@form/store';
import { FormatService } from '@app/enterprise/service/format.service';
//#endregion

export interface Row {
  threshold: number;
  rate: number;
  amount: number;
}

@Component({
  selector: 'income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss']
})
export class IncomeTaxComponent {
  
  dataSource: Row[] = [
    { threshold: 26070, rate: 11, amount: 0 },
    { threshold: 74545, rate: 30, amount: 0 },
    { threshold: 160336, rate: 41, amount: 0 },
    { threshold: -1, rate: 45, amount: 0 },
  ];

  displayedColumns: string[] = ['threshold', 'rate', 'amount'];
  
  constructor(
    public store: Store,
    private format: FormatService
  ) {

    this.store.select(fromForm.selectControlValue('Income', 'CA'))
      .subscribe(CA => {
        
        // Apply tax allowance on CA
        let CA_Abattu = (CA as number) * (1 - 0.34);
        
        // Compute income tax amount by slices
        let previousThreshold = 10225;
        this.dataSource.forEach(row => {
          if(CA_Abattu > row.threshold) { 
            row.amount = this.format.ToDecimal((row.threshold - previousThreshold) * row.rate / 100); 
          }
          else if (CA_Abattu > previousThreshold) { 
            row.amount = this.format.ToDecimal((CA_Abattu - previousThreshold) * row.rate / 100); 
          }
          else if (CA_Abattu < previousThreshold) { 
            row.amount = 0; 
          }
          previousThreshold = row.threshold;
        });
      });   
  }
}