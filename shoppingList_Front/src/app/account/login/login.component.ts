//#region Angular & Material
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
//#endregion

//#region App Component, Model
import { FormComponent } from '@app_form/component/form.component';
//#endregion


@Component({ templateUrl: './login.component.html' })
export class LoginComponent extends FormComponent {

  ngOnInit(){
    super.title = "Sign In";
    super.ngOnInit();
  }

  submitAction(): void {
    this.accountService.login(this.ctrls.Email.value, this.ctrls.Password.value)
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
