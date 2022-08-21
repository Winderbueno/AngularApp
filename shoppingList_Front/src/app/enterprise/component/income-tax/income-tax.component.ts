//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region This
import { IncomeTaxRow } from '../../model/income-tax-row.model';
import * as fromStore from '../../store';
//#endregion


@Component({
  selector: 'income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss']
})
export class IncomeTaxComponent {
  
  dataSource: IncomeTaxRow[] = [];
  displayedColumns: string[] = ['range', 'rate', 'amount'];
  
  constructor(private store: Store) {
    this.store.select(fromStore.selectIncomeTaxDataSource)
      .subscribe(ds => this.dataSource = ds);
  }
}