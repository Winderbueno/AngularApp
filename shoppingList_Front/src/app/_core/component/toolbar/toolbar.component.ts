//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromAccount from '@account/store/';
//#endregion


@Component({
  selector: 'k-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {

  isLogged: boolean = false;

  constructor(private store: Store) {
    this.store.select(fromAccount.isLogged).subscribe(value => this.isLogged=value);
  }
}
