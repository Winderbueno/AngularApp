//#region Angular
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
//#endregion


@Injectable({ providedIn: 'root' })
export class FormErrorService {

  // Generate form error message
  getErrorMsg(formCtrl: AbstractControl): string {

    let errMsg = '';

    if (formCtrl.hasError('required')) {
      errMsg += 'Please fill in this field';
    } else if (formCtrl.hasError('email')) {
      errMsg = 'Filled in email has not the good format';
    } else if (formCtrl.hasError('minlength')) {
      errMsg = `Field Length should be at least : ${formCtrl.errors!.minlength.requiredLength}`;
    } else if (formCtrl.hasError('mustMatch')) {
      errMsg = 'Field should be the same';
    }

    return errMsg;
  }
}
