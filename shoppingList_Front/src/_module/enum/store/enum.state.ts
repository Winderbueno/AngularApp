//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//#endregion

//#region Store, Model
import { Enum } from "../model/enum.model";
//#endregion

/* State */
export interface EnumState extends EntityState<Enum> {}

/* Adapter */
export const adapter : EntityAdapter<Enum> =
  createEntityAdapter<Enum>({
    selectId: (obj: Enum) => obj.name, // TODO - enum is a reserved word of TS
  });

/* Initial State */
export const initialState: EnumState =
  adapter.getInitialState({});
