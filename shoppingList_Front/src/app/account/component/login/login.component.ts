//#region Angular, Material, RxJS
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region App Component, Model, Service
import { FormComponent } from '@app/_shared/form/component/form.component';
//#endregion


@Component({ templateUrl: './login.component.html' })
export class LoginComponent extends FormComponent {

  ngOnInit(){
    super.formTitle = "Login";
    super.formDef = { email: ['', [Validators.required, Validators.email]] };
    super.ngOnInit();
  }

  submitAction(): void {
    console.log(super.formTitle);
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
