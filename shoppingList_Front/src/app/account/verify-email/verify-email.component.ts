//#region Angular & Material
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  ) { }

  ngOnInit() {
    const token = this.route.snapshot.queryParams['token'];

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // TODO - NgRx
    /*this.accountService.verifyEmail(token)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success(
            'Verification successful, you can now login',
            { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: () => { this.emailStatus = EmailStatusEnum.Failed; }
      });*/
  }
}
