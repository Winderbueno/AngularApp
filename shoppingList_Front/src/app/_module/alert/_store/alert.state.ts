//#region App Model
import { Alert } from "../model/alert.model";
//#endregion

/* State */
export interface AlertState {
  alert: Alert | undefined;
}

/* Initial State */
export const initialState: AlertState = {
  alert: undefined,
};
