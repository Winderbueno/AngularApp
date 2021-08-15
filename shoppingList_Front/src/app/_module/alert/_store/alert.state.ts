//#region App Model
import { Alert } from "@app_alert/model/alert.model";
import { AlertTypeEnum } from '@app_alert/model/enum/alert-type.enum';
//#endregion

/* State */
export interface AlertState {
  alert: Alert;
}

/* Initial State */
export const initialState: AlertState = {
  alert: { id:"-1", type:AlertTypeEnum.Info },
};
