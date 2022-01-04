//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { 
  addGroupControl, 
  createFormGroupState, 
  FormGroupState, 
  onNgrxForms, 
  onNgrxFormsAction, 
  SetValueAction, 
  updateGroup, validate } from 'ngrx-forms';
import { required, requiredTrue } from 'ngrx-forms/validation';
//#endregion

//#region State, Action
import { NgrxFormState, initialState, DynamicFormValue } from './ngrx-form.state';
import * as fromAction from './ngrx-form.actions';
//#endregion

export const featureKey = 'ngrx-form';


const validateMyForm = updateGroup<DynamicFormValue>({
  'MatField': validate(required),
  //'Maman': (validate(required, requiredTrue)) as FormGroupState<string|number|boolean>,
});

const formReducer = createReducer(
  initialState,
  onNgrxForms(),

  onNgrxFormsAction(SetValueAction, (state, action) => {
    
    let formInfo:string[] = action.controlId.split('.');
    

    const newDynamicForms = {...state};
    newDynamicForms[formInfo[0]] = validateMyForm(newDynamicForms[formInfo[0]]);

    return newDynamicForms;
  }),

  on(fromAction.CreateFormAction,
    (state, action) => {

      const newDynamicForms = {...state};
      newDynamicForms[action.name]=createFormGroupState<DynamicFormValue>(action.name, {});

      return newDynamicForms;
    }
  ),
  
  on(fromAction.AddGroupControlAction,
    (state, action) => {

      // TODO - Gerer l'ajout de * FormControl en une fois
      // const newFormValue = action.objects.reduce((v, obj) => {
      //   v[obj.id] = {
      //     someString: obj.someString,
      //     someNumber: obj.someNumber,
      //     someCheckbox: obj.someCheckbox,
      //   };
      //   return v;
      // }, {} as DynamicFormValue);

      const groupWithControl = addGroupControl<DynamicFormValue>(
        state[action.formID],
        action.control.name, 
        action.control.value);

      const newDynamicForms = {...state};
      newDynamicForms[action.formID]=groupWithControl;

      return newDynamicForms;
    }
  ),
);

export function reducer(state: NgrxFormState | undefined, action: Action) {
  return formReducer(state, action);
}