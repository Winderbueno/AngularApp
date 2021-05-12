import { Component } from '@angular/core';
import { Router } from '@angular/router';

//#region Model and Service
import { AccountService } from '@app_service/business/account.service'

@Component({ templateUrl: 'layout.component.html' })
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