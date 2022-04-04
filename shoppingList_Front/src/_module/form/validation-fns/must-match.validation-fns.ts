//#region Module
import { equalTo } from 'ngrx-forms/validation';
import { FormGroupState } from 'ngrx-forms';
//#endregion

//#region This
import { FormValue } from '../model/form-value.model';
import { DynamicControlValidationFn } from '../model/validation-fns.model';
//#endregion

export function mustMatch(refCtrlName: string, matchCtrlName: string): DynamicControlValidationFn {
  return (formState: FormGroupState<FormValue>) => {
    const refCtrl = formState.controls[refCtrlName];
    const matchCtrl = formState.controls[matchCtrlName];

    // The validationFn is generated only if there is no static error on matchCtrl
    if(matchCtrl.isInvalid && matchCtrl.errors.equalTo === undefined) {
      return;
    }

    return equalTo(refCtrl.value);
  };
}