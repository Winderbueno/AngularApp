//#region NgRx
import { ActionCreator, ActionCreatorProps, createAction, NotAllowedCheck } from '@ngrx/store';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion


/* Action Type */
export enum ActionTypes {
  API = 'API',
  COMPONENT = 'Component',
  PAGE = 'Page'
}

// Signature
export function createComponentAction (
  componentName:string,
  method: string)
  : ActionCreator<string, () => TypedAction<string>>;

// Signature
export function createComponentAction <P extends object>(
  componentName:string,
  method: string,
  config: ActionCreatorProps<P> & NotAllowedCheck<P>)
  :ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>>;

// Implementation
export function createComponentAction <P extends object>(
  componentName:string,
  method: string,
  config?: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, () => TypedAction<string>>
    | ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>> {

    if( typeof config != 'undefined') {
      return createAction('[' + componentName + ActionTypes.COMPONENT + '] - ' + method, config);
    } else {
      return createAction('[' + componentName + ActionTypes.COMPONENT + '] - ' + method)
    }
  ;
}
