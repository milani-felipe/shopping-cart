import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CartListItemComponent } from 'src/app/components/cart-list/cart-list-item/cart-list-item.component';
import { CartListComponent } from 'src/app/components/cart-list/cart-list.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductComponent } from 'src/app/components/product-list/product/product.component';
import { reducers } from 'src/app/store';
import { ShopEffects } from 'src/app/store/effects';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
