//#region NgRx
import { adapter } from '@app_state/account.state';
//#endregion


/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
