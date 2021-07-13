import { Component } from '@angular/core';
import { Router } from '@angular/router';

//#region App Component, Model, Service
import { AccountService } from '@app_account/service/account.service'

@Component({
  templateUrl: 'card-layout.component.html',
  styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent {

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {
    // Redirect to home if already logged in
    if (this.accountService.accountValue.id != "null") {
      this.router.navigate(['/']);
    }
  }
}
