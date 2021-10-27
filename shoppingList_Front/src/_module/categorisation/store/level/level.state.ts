import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Level } from "@module/categorisation/model/level.model";

/* State */
export interface LevelState extends EntityState<Level> {}

/* Adapter */
export const adapter : EntityAdapter<Level> =
  createEntityAdapter<Level>({
    selectId: (cat: Level) => cat.id,
  });

/* Initial State */
export const initialState: LevelState =
  adapter.getInitialState({});
