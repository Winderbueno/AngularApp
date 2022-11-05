//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromForm from '@form/store';
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

  versementLib = false;
  
  constructor(private store: Store) {
    this.store.select(fromStore
      .selectIncomeTaxDataSource)
      .subscribe(ds => this.dataSource = ds);

    this.store.select(fromForm
      .selectControlValue('Income', 'VersementLiberatoire'))
      .subscribe(val => this.versementLib = val as boolean)
  }
}