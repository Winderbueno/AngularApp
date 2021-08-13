//#region NgRx
import { ActionCreator, ActionCreatorProps, createAction, NotAllowedCheck } from '@ngrx/store';
//#endregion

//#region App Component, Model
import { TypedAction } from '@ngrx/store/src/models';
//#endregion


/* Action Type */
export enum ActionSources {
  API = 'API',
  COMPONENT = 'Component',
  PAGE = 'Page'
}

export function createComponentSubmitAction(
  componentName:string)
  : ActionCreator<string, () => TypedAction<string>>;

export function createComponentSubmitAction<P extends object>(
  componentName:string,
  config: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>>;


export function createComponentSubmitAction<P extends object>(
  componentName:string,
  config?: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, () => TypedAction<string>>
    | ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>> {


        if( typeof config != 'undefined') {
          return createComponentAction(componentName, 'Submit', config);
        } else {
          return createComponentAction(componentName, 'Submit');
        }
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
  : ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>>;

// Implementation
export function createComponentAction <P extends object>(
  componentName:string,
  method: string,
  config?: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, () => TypedAction<string>>
    | ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>> {

    if( typeof config != 'undefined') {
      return createAction('[' + componentName + ActionSources.COMPONENT + '] - ' + method, config);
    } else {
      return createAction('[' + componentName + ActionSources.COMPONENT + '] - ' + method);
    }
}
