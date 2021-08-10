//#region NgRx
import { adapter } from '@app_state/shopping-list.state';
//#endregion


/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
