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
  someString?: string;
  someNumber?: number;
  someCheckbox?: boolean;
}

export interface FormControl {
  name: string;
  value: string|boolean;
}

export const formSubmitAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'Submit',
);

export const AddGroupControl1Action = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'ADD_GROUP_CONTROL_1',
  props<{ objects: DynamicObject[] }>()
);

export const AddGroupControl2Action = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'ADD_GROUP_CONTROL_2',
  props<{ control : FormControl }>()
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

