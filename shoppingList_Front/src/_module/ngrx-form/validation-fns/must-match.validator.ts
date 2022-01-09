//#region Angular, Material, NgRx
import { FormGroupState, validate } from 'ngrx-forms';
import { equalTo } from 'ngrx-forms/validation';
import { FormValue } from '../store/form.state';
//#endregion


interface MustMatchValidationError<T> {
  actual: T | null | undefined;
}
declare module 'ngrx-forms' {
  interface ValidationErrors {
    mustMatch?: MustMatchValidationError<any>
  }
}

export function mustMatch(ctrlId: string, matchingCtrlId: string): any {
  return (formState:FormGroupState<FormValue>) => {

    const ctrl = formState.controls[ctrlId]
    const matchingCtrl = formState.controls[matchingCtrlId];

    // Return if another validator has already found an error on the matchingControl
    if (matchingCtrl.errors && !matchingCtrl.errors.mustMatch) { return formState; };
  
    // Set error on matchingControl if validation fails
    return validate(equalTo(ctrl.value))(matchingCtrl);
  };
}
