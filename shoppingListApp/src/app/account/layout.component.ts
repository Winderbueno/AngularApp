import { Component } from '@angular/core';
import { Router } from '@angular/router';

//#region Model and Service
import { AuthenticationService } from '@app/_shared/service/authentication.service'

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
    constructor(
        private router: Router,
        private authentService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authentService.accountValue) {
            this.router.navigate(['/']);
        }
    }
}