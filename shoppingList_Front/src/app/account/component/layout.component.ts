import { Component } from '@angular/core';
import { Router } from '@angular/router';

//#region Model and Service
import { AccountService } from '@app_account/service/account.service'

@Component({
  templateUrl: 'layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
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
