//#region Angular & Material
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//#endregion

//#region App Component, Model
import { AccountService } from '@app_service/account.service'
//#endregion


@Component({ templateUrl: 'card-layout.component.html' })
export class CardLayoutComponent {

  constructor(
    private router: Router,
    private accountService: AccountService // TODO - Use NgRxStore
  ) {
    // TODO - This is specific to account, not to the layout
    // Redirect to home if already logged in
    if (this.accountService.accountValue.accountId != "null") {
      this.router.navigate(['/']);
    }
  }
}
