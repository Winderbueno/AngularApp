//#region Angular, Material, RxJS
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region App Component, Model, Service
import { FormComponent } from '@app_form/component/form.component';
//#endregion


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent extends FormComponent {

  ngOnInit(){
    super.formTitle = "Sign Up";
    super.formDef = {
      username: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }
    super.ngOnInit();
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
