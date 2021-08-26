/* State */
export interface TimeOutState {

  // TimeOut For Refresh Token
  refreshTokenTimeOutTime: number;
}

/* Initial State */
export const initialState: TimeOutState = {
  refreshTokenTimeOutTime: 1000 * 8
};
