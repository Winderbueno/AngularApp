//#region Angular, Material, RxJS
import { Component } from '@angular/core';
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


@Component({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent extends FormComponent {

  constructor(
    formBuilder: FormBuilder,
    formErrorService: FormErrorService,
    loaderService: LoaderService,
    alertService: AlertService,
    accountService: AccountService,
  ) {
    super(formBuilder, formErrorService, loaderService, alertService, accountService);
    super.formDef = { email: ['', [Validators.required, Validators.email]] }
  }

  submitAction() {
    this.accountService.forgotPassword(this.f.email.value)
      .pipe(first())
      .subscribe({
        next: () => this.alertService.success('Please check your email for password reset instructions'),
        error: error => this.alertService.error(error)
      });
  }
}
