//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Store
import * as fromStore from '../../store';
//#endregion


/**
 * Loader Component
 */
@Component({
  selector: 'k-loader',
  templateUrl: 'loader.component.html' })
export class LoaderComponent {

  isLoading: boolean | undefined;

  constructor(private store: Store) {
    this.store.select(fromStore.isLoading)
      .subscribe(value => this.isLoading=value);
  }
}
