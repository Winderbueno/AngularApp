//#region Angular, Material, RxJS
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { FormComponent } from '@app/_shared/form/component/field-password/form.component';
import { FormErrorService } from '@app/_shared/form/service/form-error.service';
import { LoaderService } from '@app/_shared/loader/loader.service';
import { AlertService } from '@app_alert/service/alert.service';
import { AccountService } from '@app_account/service/account.service';
//#endregion


@Component({ templateUrl: './login.component.html' })
export class LoginComponent extends FormComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    formBuilder: FormBuilder,
    formErrorService: FormErrorService,
    loaderService: LoaderService,
    alertService: AlertService,
    accountService: AccountService,
  ) {
    super(formBuilder, formErrorService, loaderService, alertService, accountService);
    super.formDef = { email: ['', [Validators.required, Validators.email]] }
  }

  submitAction(): void {
    this.accountService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // Get return url from route parameters or default to '/'
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
          this.router.navigate([returnUrl]);
        },
        error: error => { this.alertService.error(error); }
      });
  }
}
