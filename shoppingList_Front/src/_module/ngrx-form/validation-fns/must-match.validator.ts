//#region Angular, Material, NgRx
import { FormGroupState, ProjectFn, updateRecursive, validate } from 'ngrx-forms';
import { equalTo } from 'ngrx-forms/validation';
//#endregion

//#region Store
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

export function mustMatch(ctrlId: string, matchingCtrlId: string): ProjectFn<any> {
  return (formState:FormGroupState<FormValue>) => {

    if(formState.id === 'Form Demo'){
      const ctrl = formState.controls[ctrlId]
      let matchingCtrl = formState.controls[matchingCtrlId];

      // TODO

      // Return if another validator has already found an error on the matchingControl
      //if (/*matchingCtrl.errors != {} &&*/ !matchingCtrl.errors.mustMatch) { 
         //return formState;
      //};

      // Set error on matchingControl if validation fails
      return updateRecursive(formState, 
        s => s.id === formState.id+'.'+matchingCtrlId ?
          validate(equalTo(ctrl.value))(s) :
          s);
    } else {
      return formState;
    }
    
  };
}
