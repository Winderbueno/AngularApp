//#region Angular & Material
import { Component } from '@angular/core';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import * as LoaderSelector from '../../_store/loader.selectors';
//#endregion


/**
 * Loader Component
 */
@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html' })
export class LoaderComponent {

  isLoading: boolean | undefined;

  constructor(private store: Store) {
    this.store.select(LoaderSelector.isLoading)
      .subscribe(value => this.isLoading=value);
  }
}
