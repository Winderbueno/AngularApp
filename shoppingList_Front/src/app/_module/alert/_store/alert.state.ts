//#region App Model
import { Alert } from "@app_alert/model/alert.model";
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
