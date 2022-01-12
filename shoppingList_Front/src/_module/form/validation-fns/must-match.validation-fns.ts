//#region Angular, Material, NgRx
import { FormGroupState } from 'ngrx-forms';
import { equalTo } from 'ngrx-forms/validation';
//#endregion

//#region Store
import { FormValue } from '../store/form.state';
import { StateParamControlValidationFn } from '../model/validation-fns.model';
//#endregion

interface MustMatchValidationError<T> {
  actual: T | null | undefined;
}
declare module 'ngrx-forms' {
  interface ValidationErrors {
    mustMatch?: MustMatchValidationError<any>
  }
}

export function mustMatch(refCtrlId: string): StateParamControlValidationFn {
  return (formState: FormGroupState<FormValue>) => {
    const refCtrl = formState.controls[refCtrlId];
    return equalTo(refCtrl.value);
  };
}
