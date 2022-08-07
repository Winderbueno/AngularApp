/* Reducer */
export {
  featureKey,
  reducer
} from './form.reducers';

/* Action */
export {
  addControlInFormAction,
  buttonClickedAction,
  clearFormValueAction,
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
  getFormToPersist,
  selectState,
  selectForm,
  selectFormConf_Validate,
  selectFormValue,
  selectControl,
  selectControlValue  
} from './form.selectors';
