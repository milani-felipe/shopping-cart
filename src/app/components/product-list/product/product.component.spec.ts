import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { reducers } from 'src/app/store';
import { ShopEffects } from 'src/app/store/effects';
import { CartListItemComponent } from '../../cart-list/cart-list-item/cart-list-item.component';
import { CartListComponent } from '../../cart-list/cart-list.component';
import { HeaderComponent } from '../../header/header.component';
import { ProductListComponent } from '../product-list.component';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

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
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
