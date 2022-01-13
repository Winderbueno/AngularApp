//#region NgRx, Action Creator
import * as ngrx from '@ngrx/store';
import { ActionCreator, ActionCreatorProps, NotAllowedCheck } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
import { ModuleEnum } from '../enum/module.enum';
//#endregion

export function createAction (
  module: ModuleEnum,
  emitterType: EmitterTypeEnum,
  method: string)
  : ActionCreator<string, () => TypedAction<string>>;

export function createAction <P extends object>(
  module: ModuleEnum,
  emitterType: EmitterTypeEnum,
  method: string,
  config: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>>;

// Implementation
export function createAction <P extends object>(
  module: ModuleEnum,
  emitterType: EmitterTypeEnum,
  method: string,
  config?: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, () => TypedAction<string>>
    | ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>> {

    let actionString:string = '@k' + '/' + module;
    emitterType === EmitterTypeEnum.STORE ? 
      actionString = actionString + '-' :
      actionString = actionString + '/';
    actionString = actionString + 
      emitterType +
      '/'+ method;

    if( typeof config != 'undefined') {
      return ngrx.createAction(actionString, config);
    } else {
      return ngrx.createAction(actionString);
    }
}
