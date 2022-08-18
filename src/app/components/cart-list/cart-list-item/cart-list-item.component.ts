import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartProductModel } from 'src/app/models/Product';
import { RemoveFromCart } from 'src/app/store/actions';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent {
  @Input() product: CartProductModel = {
    id: 0,
    image: '',
    price: 0,
    title: '',
    qty: 0
  };
  constructor(private store: Store) { }

  removeFromCart() {
    this.store.dispatch(new RemoveFromCart(this.product));
  }

}
