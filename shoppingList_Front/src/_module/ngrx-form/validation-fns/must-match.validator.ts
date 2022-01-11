//#region Angular, Material, NgRx
import { FormGroupState } from 'ngrx-forms';
import { equalTo } from 'ngrx-forms/validation';
//#endregion

//#region Store
import { FormValue } from '../store/form.state';
import { StateParamValidationFn } from '../model/validation-fns.model';
//#endregion

interface MustMatchValidationError<T> {
  actual: T | null | undefined;
}
declare module 'ngrx-forms' {
  interface ValidationErrors {
    mustMatch?: MustMatchValidationError<any>
  }
}

export function mustMatch(refCtrlId: string): StateParamValidationFn {
  return (formState: FormGroupState<FormValue>) => {

    const refCtrl = formState.controls[refCtrlId];

    // TODO
    // Return if another validator has already found an error on the matchingControl
    //if (/*matchingCtrl.errors != {} &&*/ !matchingCtrl.errors.mustMatch) { 
    //return formState;
    //};

    // Set error on matchingControl if validation fails
    return equalTo(refCtrl.value);
  };
}
