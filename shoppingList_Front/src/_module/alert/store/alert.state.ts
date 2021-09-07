//#region App Model
import { Alert } from "@alert/model/alert.model";
//#endregion

/* State */
export interface AlertState {
  keepAfterRouteChange: boolean | undefined;
  alert?: Alert;
}

/* Initial State */
export const initialState: AlertState = {
  keepAfterRouteChange: false
};
