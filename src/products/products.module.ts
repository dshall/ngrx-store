import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';

import { StoreModule } from '@ngrx/store';

// reducers
import { reducers } from './store/reducers/index';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.ProductsComponent,
  },
  {
    path: ':id',
    component: fromContainers.ProductItemComponent,
  },
  {
    path: 'new',
    component: fromContainers.ProductItemComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('products', reducers),
    RouterModule.forChild(ROUTES),
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule {}
