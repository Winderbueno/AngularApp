//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
//#endregion

//#region App Component, Model, Service
import { AlertService } from '@app_alert/service/alert.service';
import { AccountService } from '@app_account/service/account.service'
import { EmailStatusEnum } from "@app_account/model/enum/email-status.enum";
//#endregion


@Component({ templateUrl: 'verify-email.component.html' })
export class VerifyEmailComponent implements OnInit {

  EmailStatusEnum = EmailStatusEnum;
  emailStatus = EmailStatusEnum.Verifying;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    const token = this.route.snapshot.queryParams['token'];

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    this.accountService.verifyEmail(token)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success(
            'Verification successful, you can now login',
            { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: () => { this.emailStatus = EmailStatusEnum.Failed; }
      });
  }
}
