﻿/* State */
export {
  FormState,
  FormValue
} from './form.state';

/* Reducer */
export {
  featureKey,
  reducer
} from './form.reducers';

/* Action */
export {
  addControlInFormAction,
  clearFormValueAction,
  clickedOnButtonAction,
  createFormAction,
  deleteFormAction,
  dynamicValidateFormAction,
  formValidatedAction,
  removeControlInFormAction,
  resetFormAction,
  submitFormAction,
  validateFormAction,  
  validateControlAction
} from './form.actions';

/* Selector */
export {
  selectState,
  selectForm,
  selectFormValue,
  selectControlValue
} from './form.selectors';
