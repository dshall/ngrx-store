
import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducers';
import * as fromRoot from '../../../app/store';
import { getPizzaEntities } from '../reducers/pizzas.reducers';
import { Pizza } from '../../models/pizza.model';
// step through the state tree to get pizza state from the ProductsState reducer
export const getPizzaState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) =>
  state.pizzas
);

export const getSelectedPizza = createSelector(
  getPizzaEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params];
  }
);
// get each individual state from the state ProductsState tree Products -> pizzas -> data -> loaded -> loading

export const getPizzaLoaded = createSelector(getPizzaState, fromPizzas.getPizzaLoaded);
export const getPizzaLoading = createSelector(getPizzaState, fromPizzas.getPizzaLoading);
export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzaEntities);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);
