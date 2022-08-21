//#region NgRx
import { Action } from '@ngrx/store';
import { ROOT_EFFECTS_INIT } from '@ngrx/effects';
//#endregion

//#region This
import { EnterpriseState, initialState } from './enterprise.state';
import { IncomeTaxRow } from '../model/income-tax-row.model';
import { incomeTaxComputedAction } from './enterprise.actions';
//#endregion

export const featureKey = 'entreprise';

// TODO - This reducer use NgrxV8- version because ngrx-forms 
export function reducer(
  state = initialState,
  action: Action) : EnterpriseState {
  switch (action.type) {
    case ROOT_EFFECTS_INIT: { // TODO -> Should be on enterpriseModule load by router

      let ds:IncomeTaxRow[] = [ ...state.incomeTaxDataSource ];

      // Init income tax datasource
      if(state.incomeTaxDataSource.length == 1){
        state.thresholds.forEach((threshold, i) => {
          ds.splice(
            ds.length - 1, 0,
            {
              range: threshold + ' - ' + (state.thresholds[i+1] === undefined ? 'N/A' : state.thresholds[i+1]),
              rate: state.rates[i]
            }
          );
        });
      }

      return ({ ...state, incomeTaxDataSource: ds })
    }

    case incomeTaxComputedAction.type: {
      return ({ ...state, incomeTaxDataSource: (action as any).dataSource });
    }

    default: {
      return state;
    }
  }
}