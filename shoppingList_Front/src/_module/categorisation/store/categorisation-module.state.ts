import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Category } from "@module/categorisation/model/category.model";

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
