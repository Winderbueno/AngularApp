/* State */
export interface LoaderState {

  // TODO : Create a loader model ?
  isLoading: boolean;

  // Identify what has triggered the loader (a request)
  triggerSource: string;
}

/* Initial State */
export const initialState: LoaderState = {
  isLoading: false,
  triggerSource:"nothing"
};
