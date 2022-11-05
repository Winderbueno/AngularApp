//#region NgRx
import { Action } from '@ngrx/store';
//#endregion

//#region This
import { EnterpriseState, initialState } from './enterprise.state';
import { incomeTaxComputedAction } from './enterprise.actions';
//#endregion

export const featureKey = 'entreprise';

// TODO - This reducer use NgrxV8- version because ngrx-forms 
export function reducer(
  state = initialState,
  action: Action) : EnterpriseState {
  switch (action.type) {
    case incomeTaxComputedAction.type: {
      return ({ ...state, incomeTaxDataSource: (action as any).dataSource });
    }

    default: {
      return state;
    }
  }
}