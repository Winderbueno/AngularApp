//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromAccount from '@account/store/';
import { Account } from '@account/model/account.model';
//#endregion

//#region Action
import * as ComponentActions from './toolbar.component.actions';
//#endregion


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  account!: Account[];
  isLogged: boolean = false;

  constructor(
    private router: Router,
    private store: Store
  ) { // TODO - Change selector to "GetConnectedAccount"
    this.store.select(fromAccount.isLogged).subscribe(value => this.isLogged=value);
    this.store.select(fromAccount.selectAccounts).subscribe(value => this.account=value);
  }

  ngOnInit(): void {}

  logout() {

    // Dispatch LogOut action
    this.store.dispatch(ComponentActions.toolbarLogOutAction());

    this.router.navigate(['/']);
  }

}
