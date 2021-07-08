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


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent extends FormComponent {

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
    super.formDef = {
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue]
    }
  }

  submitAction() {
    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success(
            'Registration successful, please check your email for verification instructions',
            { keepAfterRouteChange: true }
          );
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: error => { this.alertService.error(error); }
      });
  }
}
