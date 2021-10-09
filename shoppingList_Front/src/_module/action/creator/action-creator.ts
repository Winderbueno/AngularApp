//#region NgRx, Action Creator
import * as ngrx from '@ngrx/store';
import { ActionCreator, ActionCreatorProps, NotAllowedCheck } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion


export function createAction (
  sourceType: ActionSourceEnum,
  sourceName: string,
  method: string)
  : ActionCreator<string, () => TypedAction<string>>;


export function createAction <P extends object>(
  sourceType: ActionSourceEnum,
  sourceName: string,
  method: string,
  config: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>>;

// Implementation
export function createAction <P extends object>(
  sourceType: ActionSourceEnum,
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
