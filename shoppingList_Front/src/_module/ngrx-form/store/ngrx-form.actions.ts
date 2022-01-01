//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
import { props } from '@ngrx/store';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
//#endregion

/* Action DTO */
export interface DynamicObject {
  id: string;
  someString?:string;
  someNumber?: number;
  someCheckbox?: boolean;
}


export const formSubmitAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'Submit',
);

export const SetDynamicObjectsAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'SET_DYNAMIC_OBJECTS',
  props<{ objects: DynamicObject[] }>()
);

export const CreateGroupElementAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'CREATE_GROUP_ELEMENT',
  props<{ name: string }>()
);

export const RemoveGroupElementAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'REMOVE_GROUP_ELEMENT',
  props<{ name: string }>()
);

