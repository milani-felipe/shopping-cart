import { Action } from '@ngrx/store';
import { CartProductModel, ProductModel } from '../models/Product';

export enum ActionTypes {
    CART_ADD = '[Product] Add to cart',
    CART_REMOVE = '[Product] Remove from cart',
    PRODUCTS_LOAD = '[Products] Load items from server',
    PRODUCTS_LOAD_SUCCESS = '[Products] Load success'
}

export class AddToCart implements Action {
    readonly type = ActionTypes.CART_ADD;

    constructor(public payload: CartProductModel) { }
}

export class GetItems implements Action {
    readonly type = ActionTypes.PRODUCTS_LOAD;
}

export class RemoveFromCart implements Action {
    readonly type = ActionTypes.CART_REMOVE;

    constructor(public payload: CartProductModel) { }
}

export class LoadSuccess implements Action {
    readonly type = ActionTypes.PRODUCTS_LOAD_SUCCESS;

    constructor(public payload: ProductModel[]) { }
}

export type ActionsList =
 AddToCart | 
 RemoveFromCart | 
 LoadSuccess | 
 GetItems