//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { FormControlState } from 'ngrx-forms';
//#endregion


@Injectable({ providedIn: 'root' })
export class NgrxFormErrorService {

  // Generate form error message
  getErrorMsg(ctrlState: FormControlState<string|boolean|number>): string {

    let errMsg = '';

    if (ctrlState.errors.required) {
       errMsg += 'Please fill in this field';
    } else if (ctrlState.errors.email) {
       errMsg = 'Filled in email has not the good format';
    } else if (ctrlState.errors.minlength) { // TODO
       //errMsg = `Field Length should be at least : ${formCtrl.errors!.minlength.requiredLength}`;
    } //else if (formCtrl.hasError('mustMatch')) {
    //   errMsg = 'Field should be the same';
    // }

    return errMsg;
  }
}
