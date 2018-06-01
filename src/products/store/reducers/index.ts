import { ActionReducerMap } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducers';

export interface ProductsState {
  pizzas: fromPizzas.PizzasState;
}
// tslint:disable-next-line:eofline
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

