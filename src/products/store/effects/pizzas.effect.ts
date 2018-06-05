import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as pizzaActions from '../actions';
import * as fromServices from '../../services';
import { Pizza } from '../../models/pizza.model';
import { of } from 'rxjs';

@Injectable()
export class PizzaEffects {
  constructor(
     private actions$: Actions,
     private pizzaService: fromServices.PizzasService
    ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
  .pipe(
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
      );
    })
  );

}
