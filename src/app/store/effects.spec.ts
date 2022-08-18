
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ShopEffects } from './effects';
import * as fromActions from './actions';
import { ProductService } from  '../services/product.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Store > Data > DataEffect', () => {
  let actions$: Observable<Action>;
  let effects: ShopEffects;
  let productService: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ShopEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        // {
        //   provide: ProductService,
        //   useValue: jasmine.createSpyObj('ProductService', ['getProducts'])
        // }
      ],
    });

    effects = TestBed.get<ShopEffects>(ShopEffects);
    productService = TestBed.get<ProductService>(ProductService);
  }));
  
  it('SHOULD dispatch SetData action WHEN LoadData action is dispatched', () => {
    const data: any = [{
      category: 'a',
      description: 'b',
      id: 0,
      image: 'c',
      price: 0,
      rating: {
        rate: 0,
        count: 0
      },
      count: 0,
      rate: 0,
      title: 'd'
    }];
    spyOn(productService, 'getProducts').and.returnValue(of([data]))
    actions$ = of({ type: fromActions.ActionTypes.PRODUCTS_LOAD });

    effects.loadProducts$.subscribe(action => {
      expect(action.type).toBe(fromActions.ActionTypes.PRODUCTS_LOAD_SUCCESS);
      expect(action.payload.length).toEqual(1);
    });
  });
});