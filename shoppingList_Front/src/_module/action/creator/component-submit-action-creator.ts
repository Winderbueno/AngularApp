//#region NgRx
import { ActionCreator, ActionCreatorProps, NotAllowedCheck } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region App Action
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion


export function createSubmitAction(
  sourceType:ActionSource,
  sourceName:string,)
  : ActionCreator<string, () => TypedAction<string>>;

export function createSubmitAction<P extends object>(
  sourceType:ActionSource,
  sourceName:string,
  config: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>>;


export function createSubmitAction<P extends object>(
  sourceType:ActionSource,
  sourceName:string,
  config?: ActionCreatorProps<P> & NotAllowedCheck<P>)
  : ActionCreator<string, () => TypedAction<string>>
    | ActionCreator<string, (props: P & NotAllowedCheck<P>) => P & TypedAction<string>> {


        if( typeof config != 'undefined') {
          return createAction(sourceType, sourceName, 'Submit', config);
        } else {
          return createAction(sourceType, sourceName, 'Submit');
        }
}
