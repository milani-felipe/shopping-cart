import { ProductModel } from '../models/Product';
import * as Actions from './actions';

describe('Store > Data > DataActions', () => {
  it('SHOULD create a LoadData action', () => {
    const action = new Actions.GetItems();
    expect(action.type).toEqual(Actions.ActionTypes.PRODUCTS_LOAD);
  });

  it('SHOULD create a SetData action containing a payload', () => {
    const payload = {
      id: 0,
      image: 'c',
      price: 0,
      title: 'd',
      qty: 1
      };
    const action = new Actions.AddToCart(payload);

    expect({ ...action }).toEqual({
      type: Actions.ActionTypes.CART_ADD,
      payload
    });
  });

  it('SHOULD create a SetData action containing a payload', () => {
    const payload = {
        id: 0,
        image: 'c',
        price: 0,
        title: 'd',
        qty: 1
      };
    const action = new Actions.RemoveFromCart(payload);

    expect({ ...action }).toEqual({
      type: Actions.ActionTypes.CART_REMOVE,
      payload
    });
  });

  it('SHOULD create a SetData action containing a payload', () => {
    const payload: ProductModel[] = [{
        category: 'a',
        description: 'b',
        id: 0,
        image: 'c',
        price: 0,
        rating: {
          rate: 0,
          count: 0
        },
        count: 0,
        rate: 0,
        title: 'd'
      }];
    const action = new Actions.LoadSuccess(payload);

    expect({ ...action }).toEqual({
      type: Actions.ActionTypes.PRODUCTS_LOAD_SUCCESS,
      payload: payload
    });
  });
});