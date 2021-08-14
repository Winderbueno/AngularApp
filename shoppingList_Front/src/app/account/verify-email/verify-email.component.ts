//#region Angular & Material
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//#endregion

//#region NgRx
import { Store, select } from '@ngrx/store';
import * as RouterSelector from '@app_selector/router.selectors';
//#endregion

//#region App Component, Model
import * as ComponentActions from './verify-email.actions';
import { EmailStatusEnum } from "@app_enum/email-status.enum";
//#endregion


@Component({ templateUrl: 'verify-email.component.html' })
export class VerifyEmailComponent implements OnInit {

  EmailStatusEnum = EmailStatusEnum;
  emailStatus = EmailStatusEnum.Verifying;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit() {
    //const token = this.store.pipe(select(RouterSelector.selectQueryParam('token')));
    const token = this.route.snapshot.queryParams['token']; // TODO - get from store

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Dispatch Verify Email action
    this.store.dispatch(
      ComponentActions.verifyEmailSubmit({
        token: token
      })
    );

  }
}
