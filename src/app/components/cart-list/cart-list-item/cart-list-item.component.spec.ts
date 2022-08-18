import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { Action, Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { reducers } from 'src/app/store';
import { ShopEffects } from 'src/app/store/effects';
import { HeaderComponent } from '../../header/header.component';
import { ProductListComponent } from '../../product-list/product-list.component';
import { ProductComponent } from '../../product-list/product/product.component';
import { CartListComponent } from '../cart-list.component';
import { initialState } from 'src/app/store/reducer';

import { CartListItemComponent } from './cart-list-item.component';
import { ActionsList, ActionTypes } from 'src/app/store/actions';

describe('CartListItemComponent', () => {
  let component: CartListItemComponent;
  let fixture: ComponentFixture<CartListItemComponent>;
  let store: MockStore<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent,
        AppComponent,
        HeaderComponent,
        ProductListComponent,
        ProductComponent,
        CartListComponent,
        CartListItemComponent ],
        imports: [
          BrowserModule,
          AppRoutingModule,
          HttpClientModule,
          StoreModule.forRoot(reducers),
          EffectsModule.forRoot([ShopEffects])
        ],
        providers: [
          provideMockStore({ initialState }),
    ]
    })
    .compileComponents();
    store = TestBed.get<Store<any>>(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send CART_REMOVE action', () => {
    component.product = {
      id: 0,
      image: 'c',
      price: 0,
      title: 'd',
      qty: 1
    }
    component.removeFromCart()
    store.scannedActions$.subscribe((a: Action) => expect(
      [
        '@ngrx/store/init',
        ActionTypes.CART_REMOVE,
      ].includes(a.type)).toBeTruthy()
    );
  })
});
