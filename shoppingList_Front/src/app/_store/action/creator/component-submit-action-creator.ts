//#region NgRx
import { ActionCreator, ActionCreatorProps, NotAllowedCheck } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region App Component, Model
import { createComponentAction } from '@app_action/creator/source-creator/component-action-creator';
//#endregion


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
