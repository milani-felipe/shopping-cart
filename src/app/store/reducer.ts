import { StateModel } from '../models/State';
import { ActionsList, ActionTypes } from './actions';

export const initialState: any = {
  shoppList: [],
  cart: { items: [], total: 0 }
};

export function ShopReducer(state = initialState, action: ActionsList) {
  switch (action.type) {
    case ActionTypes.PRODUCTS_LOAD_SUCCESS:
      return {
        ...state,
        shoppList: [...action.payload]
      };

    case ActionTypes.CART_ADD:
      return {
        ...state,
        ...{cart: {items: [...state.cart.items, action.payload], total: parseFloat((state.cart.total + action.payload.price).toFixed(2))}}
      };

    case ActionTypes.CART_REMOVE:
      return {
        ...state,
        ...{cart: {
          items:[...state.cart.items.filter((item: any) => item.title !== action.payload.title)], 
          total: parseFloat((state.cart.total - action.payload.price).toFixed(2))
        }}
      };

    default:
      return state;
  }
}