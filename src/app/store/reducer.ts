import { StateModel } from '../models/State';
import { ActionsList, ActionTypes } from './actions';

export const initialState: any = {
  shoppList: [],
  cart: { items: [], total: 0 }
};

function getIndexOf(items: any[], id: number) {
  for(let i = 0; i< items.length; i++) {
    if (items[i].id === id) {
      return i;
    }
  }
  return -1;
}

export function ShopReducer(state = initialState, action: ActionsList) {
  switch (action.type) {
    case ActionTypes.PRODUCTS_LOAD_SUCCESS:
      return {
        ...state,
        shoppList: [...action.payload]
      };

    case ActionTypes.CART_ADD:
      let index = getIndexOf(state.cart.items, action.payload.id);
      let cartItem = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        qty: index >= 0 ? (state.cart.items[index].qty + 1) : 1,
        image: action.payload.image
      }
      let newCart = state.cart.items.filter((item: any) => item.id !== action.payload.id);
      if(index >= 0) {
        newCart.splice(index, 0 , cartItem);
      } else {
        newCart.push(cartItem)
      }
      return {
        ...state,
        ...{cart: {items: newCart, total: parseFloat((state.cart.total + action.payload.price).toFixed(2))}}
      };

    case ActionTypes.CART_REMOVE:
      let indexOf = getIndexOf(state.cart.items, action.payload.id);
      let cartItemRemove = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        qty: (state.cart.items[indexOf].qty - action.payload.qty),
        image: action.payload.image
      }
      let newCartRemove = state.cart.items.filter((item: any) => item.id !== action.payload.id);
      if (cartItemRemove.qty !== 0) {
        newCartRemove.splice(indexOf, 0 , cartItemRemove);
      }
      return {
        ...state,
        ...{cart: {items: newCartRemove, total: parseFloat((state.cart.total - (action.payload.price * action.payload.qty)).toFixed(2))}}
      };

    default:
      return state;
  
  }

}