//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//#endregion

//#region Store, Model
import { Timer } from "../model/timer.model";
//#endregion

/* State */
export interface TimerState extends EntityState<Timer> {}

/* Adapter */
export const adapter : EntityAdapter<Timer> =
  createEntityAdapter<Timer>({
    selectId: (timer: Timer) => timer.timerId,
  });

/* Initial State */
export const initialState: TimerState =
  adapter.getInitialState({});
