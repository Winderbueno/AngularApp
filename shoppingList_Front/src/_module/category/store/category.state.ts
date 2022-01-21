//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//#endregion

//#region Store, Model
import { Category } from "../model/category.model";
//#endregion

/* State */
export interface CategoryState extends EntityState<Category> {}

/* Adapter */
export const adapter : EntityAdapter<Category> =
  createEntityAdapter<Category>({
    selectId: (cat: Category) => cat.id,
  });

/* Initial State */
export const initialState: CategoryState =
  adapter.getInitialState({});
