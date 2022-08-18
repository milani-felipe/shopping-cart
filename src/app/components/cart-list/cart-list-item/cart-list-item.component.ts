import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from 'src/app/models/Product';
import { RemoveFromCart } from 'src/app/store/actions';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent {
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
  constructor(private store: Store) { }

  removeFromCart() {
    this.store.dispatch(new RemoveFromCart(this.product));
  }

}
