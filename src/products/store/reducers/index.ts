import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducers';

export interface ProductsState {
  pizzas: fromPizzas.PizzasState;
}
// tslint:disable-next-line:eofline
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

// access the base datastructure of the state tree
export const getProductsState = createFeatureSelector<ProductsState>('products');

// step through the state tree to get pizza state from the ProductsState reducer
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) =>
  state.pizzas
);

// get each individual state from the state ProductsState tree Products -> pizzas -> data -> loaded -> loading
export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizza);
export const getPizzaLoaded = createSelector(getPizzaState, fromPizzas.getPizzaLoaded);
export const getPizzaLoading = createSelector(getPizzaState, fromPizzas.getPizzaLoading);
