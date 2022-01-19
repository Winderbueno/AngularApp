//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { FormControlState } from 'ngrx-forms';
//#endregion


@Injectable({ providedIn: 'root' })
export class FormErrorService {

  // Generate form error message
  getErrorMsg(ctrlState: FormControlState<string|boolean|number>): string {

    let errMsg = '';

    // TODO - Add error message for all errors -> usea @content module ?
    if (ctrlState.errors.required) {
      errMsg += 'Please fill in this field';
    } else if (ctrlState.errors.email) {
      errMsg = 'Filled in email has not the good format';
    } else if (ctrlState.errors.minLength) {
      errMsg = `Field length should be at least : ${ctrlState.errors!.minLength.minLength}`;
    } else if (ctrlState.errors.maxLength) {
      errMsg = `Field length should be smaller than : ${ctrlState.errors!.maxLength.maxLength}`;
    } else if (ctrlState.errors.equalTo) { // TODO - used for mustMatch
      errMsg = 'Field should be the same';
    }

    return errMsg;
  }
}
