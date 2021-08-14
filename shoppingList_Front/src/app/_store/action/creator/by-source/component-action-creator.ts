//#region NgRx
import { ActionCreator, ActionCreatorProps, createAction, NotAllowedCheck } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region App Component, Model
import { ActionSources } from '@app_action/enum/action-source';
//#endregion


export function createComponentAction (
  componentName:string,
  method: string)
  : ActionCreator<string, () => TypedAction<string>>;


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
