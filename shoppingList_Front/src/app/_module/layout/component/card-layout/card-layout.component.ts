//#region Angular, Material, RxJS
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//#endregion

//#region App Component, Model, Service
import { AccountService } from '@app_account/service/account.service'
//#endregion


@Component({ templateUrl: 'card-layout.component.html' })
export class CardLayoutComponent {

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {
    // TODO - This is specific to account, not to the layout
    // Redirect to home if already logged in
    if (this.accountService.accountValue.id != "null") {
      this.router.navigate(['/']);
    }
  }
}
