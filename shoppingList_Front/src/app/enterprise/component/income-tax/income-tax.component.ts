//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromForm from '@form/store';
import { FormatService } from '@app/enterprise/service/format.service';
//#endregion

export interface Row {
  range?: string;
  threshold?: number;
  rate?: number;
  amount?: number;
}

@Component({
  selector: 'income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss']
})
export class IncomeTaxComponent {
  
  thresholds: number[] = [10225, 26070, 74545, 160336];
  rates: number[] = [11, 30, 41, 45];

  dataSource: Row[] = [{ range: 'Total', amount: 0 }];

  displayedColumns: string[] = ['range', 'rate', 'amount'];
  
  constructor(
    public store: Store,
    private format: FormatService
  ) {
    
    // Init datasource with threshold & rate
    this.thresholds.forEach((threshold, i) => {
      this.dataSource.splice(
        this.dataSource.length - 1, 0,
        {
          threshold: threshold,
          range: threshold + ' - ' + (this.thresholds[i+1] === undefined ? 'N/A' : this.thresholds[i+1]),
          rate: this.rates[i]
        }
      );
    });    

    this.store.select(fromForm.selectControlValue('Income', 'CA'))
      .subscribe(CA => {
        
        // Apply tax allowance on CA
        let CA_Abattu = (CA as number) * (1 - 0.34);
        
        // Compute income tax amount by slices
        this.dataSource.forEach((row, i) => {
          if(CA_Abattu > this.thresholds[i+1]) { 
            row.amount = this.format.ToDecimal((this.thresholds[i+1] - this.thresholds[i]) * row.rate! / 100); 
          }
          else if (CA_Abattu > this.thresholds[i]) { 
            row.amount = this.format.ToDecimal((CA_Abattu - this.thresholds[i]) * row.rate! / 100); 
          }
          else if (CA_Abattu < this.thresholds[i]) { 
            row.amount = 0; 
          }
        });
      });   
  }
}