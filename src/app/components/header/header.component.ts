import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModel } from 'src/app/models/State';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  @Output() toggleCart: EventEmitter<any> =  new EventEmitter();
  cart: CartModel = {
    items: [],
    total: 0
  };
  totalItems = 0;
  ngOnInit(): void {
    this.store.subscribe(data => {
      this.cart = data.state.cart;
      this.showTotalItems();
    })
  }

  showTotalItems() {
    this.totalItems = 0;
    for(let item of this.cart.items) {
      this.totalItems += item.qty
    }
  }

}
