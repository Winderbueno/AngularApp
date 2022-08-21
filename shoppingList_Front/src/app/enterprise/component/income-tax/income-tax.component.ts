//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromForm from '@form/store';
//#endregion

//#region This
import { Row } from './row.model';
import { IncomeTaxStore } from './income-tax.store';
//#endregion


@Component({
  selector: 'income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss'],
  providers: [IncomeTaxStore],
})
export class IncomeTaxComponent {
  
  dataSource: Row[] = [];
  displayedColumns: string[] = ['range', 'rate', 'amount'];
  
  constructor(
    public store: Store,
    private readonly incomeTaxStore: IncomeTaxStore) {

    this.incomeTaxStore.initDatasource();

    this.store
      .select(fromForm.selectControlValue('Income', 'CA'))
      .subscribe(CA => {
        this.incomeTaxStore.compute(CA as unknown as number);
      });

    this.incomeTaxStore.ds$.subscribe(ds => this.dataSource = ds);
  }
}