//#region NgRx
import * as ngrx from '@ngrx/store';
import { ActionCreator, ActionCreatorProps, NotAllowedCheck } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region App Action
import { ActionSource } from '@app_action/enum/action-source.enum';
//#endregion


export function createAction (
  sourceType: ActionSource,
  sourceName: string,
  method: string)
  : ActionCreator<string, () => TypedAction<string>>;


export function createAction <P extends object>(
  sourceType: ActionSource,
  sourceName: string,
  method: string,
  config: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>>;

// Implementation
export function createAction <P extends object>(
  sourceType: ActionSource,
  sourceName: string,
  method: string,
  config?: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, () => TypedAction<string>>
    | ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>> {

    let actionString:string = '[' + sourceName + ' ' + sourceType + '] - '+ method;

    if( typeof config != 'undefined') {
      return ngrx.createAction(actionString, config);
    } else {
      return ngrx.createAction(actionString);
    }
}
