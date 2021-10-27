import { Categorisation } from "../../model/categorisation.model";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

/* State */
export interface CategorisationState extends EntityState<Categorisation> {}

/* Adapter */
export const adapter : EntityAdapter<Categorisation> =
  createEntityAdapter<Categorisation>({
    selectId: (cat: Categorisation) => cat.id,
  });

/* Initial State */
export const initialState: CategorisationState =
  adapter.getInitialState({});
