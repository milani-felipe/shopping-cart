import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from 'src/app/models/Product';
import { AppState } from 'src/app/store';
import { GetItems } from 'src/app/store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private store: Store<AppState>) {
     }
  data: ProductModel[] = [];
  ngOnInit(): void {
    this.store.dispatch(new GetItems());
    
    this.store.subscribe(data => {
      this.data = data.state.shoppList;
    })
  }

}
