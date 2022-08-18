import { Injectable } from '@angular/core';
    import { Actions, Effect, ofType } from '@ngrx/effects';
    import { EMPTY } from 'rxjs';
    import { catchError, map, mergeMap } from 'rxjs/operators';
    import { ActionTypes } from './actions';
    import { ProductService } from '../services/product.service';
    
    @Injectable()
    export class ShopEffects {
      constructor(
        private actions$: Actions,
        private productService: ProductService
      ) {}
      
      @Effect()
      loadProducts$ = this.actions$.pipe(
        ofType(ActionTypes.PRODUCTS_LOAD),
        mergeMap(() =>
          this.productService.getProducts().pipe(
            map(products => {
              return { type: ActionTypes.PRODUCTS_LOAD_SUCCESS, payload: products };
            }),
            catchError(() => EMPTY)
          )
        )
      );
    }