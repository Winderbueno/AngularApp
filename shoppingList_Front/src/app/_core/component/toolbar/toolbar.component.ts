//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromAccount from '@account/store/';
import * as fromStore from '../../store/';
//#endregion


@Component({
  selector: 'core-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {

  isLogged: boolean = false;

  constructor(private store: Store) {
    this.store.select(fromAccount.isLogged).subscribe(value => this.isLogged=value);
  }

  toggleSideNav() {
    this.store.dispatch(fromStore.toggleSideNavAction());
  }
}
