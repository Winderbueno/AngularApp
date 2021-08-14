//#region Angular & Material
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import * as AccountSelector from '@app_selector/account.selectors';
//#endregion


@Component({ templateUrl: 'card-layout.component.html' })
export class CardLayoutComponent {

  constructor(
    private store: Store,
    private router: Router,
  ) {

    // TODO - This is specific to account, not to the layout
    // Redirect to home if already logged in
    if (this.store.select(AccountSelector.isLogged)) {
      this.router.navigate(['/']);
    }
  }
}
