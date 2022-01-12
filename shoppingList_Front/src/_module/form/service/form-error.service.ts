//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { FormControlState } from 'ngrx-forms';
//#endregion


@Injectable({ providedIn: 'root' })
export class FormErrorService {

  // Generate form error message
  getErrorMsg(ctrlState: FormControlState<string|boolean|number>): string {

    let errMsg = '';

    if (ctrlState.errors.required) {
       errMsg += 'Please fill in this field';
    } else if (ctrlState.errors.email) {
       errMsg = 'Filled in email has not the good format';
    } else if (ctrlState.errors.minLength) {
       errMsg = `Field Length should be at least : ${ctrlState.errors!.minLength.minLength}`;
    } else if (ctrlState.errors.equalTo) { // TODO
       errMsg = 'Field should be the same';
    }

    return errMsg;
  }
}
