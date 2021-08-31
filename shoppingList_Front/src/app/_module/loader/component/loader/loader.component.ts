//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region App Model, Action, Selector
import * as LoaderSelector from '@loader/store/loader.selectors';
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
