import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from 'src/app/models/Product';
import { AppState } from 'src/app/store';
import { AddToCart, RemoveFromCart } from 'src/app/store/actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  inCart = false;
  @Input() product: ProductModel = {
    category: '',
    description: '',
    id: 0,
    image: '',
    price: 0,
    rating: {
      rate: 0,
      count: 0
    },
    count: 0,
    rate: 0,
    title: ''
  };
  cartItems: ProductModel[] = [];
  constructor(private store: Store<AppState>) { }

  addToCart(item: ProductModel) {
    this.store.dispatch(new AddToCart(item));
  }

  removeFromCart(item: ProductModel) {
    this.store.dispatch(new RemoveFromCart(item));
  }

  ngOnInit(): void {
    this.store.subscribe(data => {
      this.cartItems = data.state.cart.items;
      this.inCart = this.checkForItem();
    })
  }

  checkForItem() {
    for (const item of this.cartItems) {
      if (item.id === this.product.id) return true
    }
    return false;
  }
}
