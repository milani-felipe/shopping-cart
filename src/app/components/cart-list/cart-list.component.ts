import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from 'src/app/models/Product';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  items: ProductModel[] = [];
  total: number = 0;
  ngOnInit(): void {
    this.store.subscribe(data => {
      this.items = data.state.cart.items;
      this.total = data.state.cart.total;
    })
  }

}
