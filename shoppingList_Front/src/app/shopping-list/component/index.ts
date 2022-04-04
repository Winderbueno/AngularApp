/* Action */
export {
  submitAddProductChipAction } from './add-product-chip/add-product-chip.actions';
export {
  productChipClickedAction,
  productChipDeleteButtonClickedAction,
  updateShoppingListProductAction } from './shopping-list-view/shopping-list-view.actions';

/* Component */
import { AddProductChipComponent } from './add-product-chip/add-product-chip.component';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { ShoppingListActionComponent } from './shopping-list-actions/shopping-list-actions.component';
import { ShoppingListViewComponent } from './shopping-list-view/shopping-list-view.component';

export const Components = [
  AddProductChipComponent,
  AddProductDialogComponent,
  ShoppingListActionComponent,
  ShoppingListViewComponent
];

export const RunTimeComponents = [
  AddProductDialogComponent
];

export { AddProductDialogComponent };
