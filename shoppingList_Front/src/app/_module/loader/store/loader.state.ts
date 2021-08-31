/* State */
export interface LoaderState {

  // TODO : Create a loader model ?
  isLoading: boolean;

  // Identify what has triggered the loader (a request)
  loaderTrigger: string;
}

/* Initial State */
export const initialState: LoaderState = {
  isLoading: false,
  loaderTrigger:"nothing"
};
