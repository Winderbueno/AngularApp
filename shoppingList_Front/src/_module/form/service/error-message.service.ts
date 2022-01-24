//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { FormControlState } from 'ngrx-forms';
//#endregion


@Injectable({ providedIn: 'root' })
export class ErrorMessageService {

  // Generate form error message
  getErrorMsg(ctrlState: FormControlState<string|boolean|number>): string {

    let errors = ctrlState.errors;
    let errMsg = '';

    // TODO - Add error message for all errors -> use @content module ?
    if (errors.required) {
      errMsg += 'Field is required';
    } else if (errors.email) {
      errMsg = 'Field should have an email format';
    } else if (errors.minLength) {
      errMsg = `Field length should be at least : ${ctrlState.errors!.minLength.minLength}`;
    } else if (errors.maxLength) {
      errMsg = `Field length should be at most : ${ctrlState.errors!.maxLength.maxLength}`;
    } else if (errors.equalTo) { // TODO - used for mustMatch
      errMsg = 'Fields should be the same';
    } else if (errors.number) {
      errMsg = 'Field should be a number';
    }

    return errMsg;
  }
}
