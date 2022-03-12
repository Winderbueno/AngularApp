/* State */
export interface AlertState {
  isAlerting: boolean;
  keepAfterRouteChange: boolean;
}

/* Initial State */
export const initialState: AlertState = {
  isAlerting: false,
  keepAfterRouteChange: false
};
