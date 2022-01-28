//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromAccount from '@account/store/';
//#endregion


@Component({ templateUrl: 'root.component.html' })
export class RootComponent {

  isLogged: boolean = false;

  constructor(
    private store: Store,
    private router: Router,
  ) {

    this.store.select(fromAccount.isLogged).subscribe(value => this.isLogged=value)
    // TODO - This is specific to account, not to the layout
    // Redirect to home if already logged in
    if (this.isLogged) { this.router.navigate(['/']); }
  }
}
