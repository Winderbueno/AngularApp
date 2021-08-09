//#region Angular & Material
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import * as AccountComponentActions from '@app_action/component/account.component.action';
//#endregion

//#region App Component, Model
import { EmailStatusEnum } from "@app_enum/email-status.enum";
//#endregion


@Component({ templateUrl: 'verify-email.component.html' })
export class VerifyEmailComponent implements OnInit {

  EmailStatusEnum = EmailStatusEnum;
  emailStatus = EmailStatusEnum.Verifying;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{}> // TODO
  ) { }

  ngOnInit() {
    const token = this.route.snapshot.queryParams['token']; // TODO

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true }); // TODO

    // Dispatch Verify Email action
    this.store.dispatch(
      AccountComponentActions.verifyEmailSubmit({
        token: token
      })
    );

  }
}
