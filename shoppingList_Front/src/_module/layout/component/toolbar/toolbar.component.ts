//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region Action, Model
import * as ComponentActions from './toolbar.component.actions';
import * as AccountSelector from '@account/store/account.selectors';
import { Account } from '@account/model/account.model';
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
    this.store.select(AccountSelector.isLogged).subscribe(value => this.isLogged=value);
    this.store.select(AccountSelector.getAccounts).subscribe(value => this.account=value);
  }

  ngOnInit(): void {}

  logout() {

    // Dispatch LogOut action
    this.store.dispatch(ComponentActions.toolbarLogOutAction());

    this.router.navigate(['/']);
  }

}