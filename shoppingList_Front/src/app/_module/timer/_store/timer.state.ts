import { Timer } from "../model/timer.model";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

/* State */
export interface TimerState extends EntityState<Timer> {}


/* Adapter */
export const adapter : EntityAdapter<Timer> =
  createEntityAdapter<Timer>({
    selectId: (timer: Timer) => timer.name,
  });


/* Initial State */
export const initialState: TimerState =
  adapter.getInitialState({});
