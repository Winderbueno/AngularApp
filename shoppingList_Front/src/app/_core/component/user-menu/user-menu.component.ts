//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region Model, Action
import * as fromAccount from '@account/store/';
import { Account } from '@account/model/account.model';
import * as ComponentActions from './user-menu.component.actions';
//#endregion


@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html'
})
export class UserMenuComponent {

  account!: Account[];

  constructor(
    private router: Router,
    private store: Store
  ) {
    // TODO - Change selector to "GetConnectedAccount"
    this.store.select(fromAccount.selectAccounts)
      .subscribe(value => this.account=value);
  }

  logout() {
    this.store.dispatch(ComponentActions.clickOnLogoutMenuAction());
  }
}
