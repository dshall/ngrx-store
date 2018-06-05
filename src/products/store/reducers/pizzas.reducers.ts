import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzasState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzasState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const data = action.payload;
      console.log('PAYLOAD', action.payload);
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }


    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

  }
  return state;
}

export const getPizzaLoading = (state: PizzasState) => state.loading;
export const getPizzaLoaded = (state: PizzasState) => state.loaded;
export const getPizza = (state: PizzasState) => state.data;

