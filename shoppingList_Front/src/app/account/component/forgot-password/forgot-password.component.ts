//#region Angular, Material, RxJS
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
//#endregion

//#region App Component, Model, Service
import { FormComponent } from '@app_form/component/form.component';
//#endregion


@Component({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent extends FormComponent {

  ngOnInit(){
    super.formTitle = "Forgot Password";
    super.ngOnInit();
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
