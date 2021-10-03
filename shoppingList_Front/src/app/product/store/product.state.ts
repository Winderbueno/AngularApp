//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//#endregion

//#region Model
import { Product } from '@product/model/product.model';
//#endregion


/* State */
export interface ProductState extends EntityState<Product> {}


/* Adapter */
export const adapter : EntityAdapter<Product> =
  createEntityAdapter<Product>({
    selectId: (product: Product) => product.productId,
  });


/* Initial State */
export const initialState: ProductState =
  adapter.getInitialState({});
