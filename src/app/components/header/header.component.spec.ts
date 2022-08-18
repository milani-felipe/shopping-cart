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
import { CartListItemComponent } from '../cart-list/cart-list-item/cart-list-item.component';
import { CartListComponent } from '../cart-list/cart-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductComponent } from '../product-list/product/product.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent,
        HomeComponent,
        AppComponent,
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
