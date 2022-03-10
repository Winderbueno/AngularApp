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
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  readonly isLogged$ = this.store.select(fromAccount.isLogged);

  constructor(private store: Store) {}

  toggleSideNav() {
    this.store.dispatch(fromStore.toggleSideNavAction());
  }
}
