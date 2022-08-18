import * as fromReducer from './reducer';
import * as fromActions from './actions';

describe('Store > Data > DataReducer', () => {
  afterEach(() => {
  });

  it('SHOULD return the default state', () => {
    const { initialState } = fromReducer;
    const action = new fromActions.GetItems();
    const state = fromReducer.ShopReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('SHOULD add item to cart', () => {
    const { initialState } = fromReducer;
    const payload: any = {
      id: 0,
      image: 'c',
      price: 0,
      title: 'd',
      qty: 1
    };
    const action = new fromActions.AddToCart(payload);
    const state = fromReducer.ShopReducer(initialState, action);

    expect(state.cart.items[0]).toEqual(payload);
  });

  it('SHOULD remove item to cart', () => {
    const { initialState } = fromReducer;
    const payload: any = {
      id: 0,
      image: 'c',
      price: 0,
      title: 'd',
      qty: 1
    };
    const actionAdd = new fromActions.AddToCart(payload);
    const state1 = fromReducer.ShopReducer(initialState, actionAdd);
    
    const actionRemove = new fromActions.RemoveFromCart(payload);
    const state = fromReducer.ShopReducer(state1, actionRemove);

    expect(state.cart.items.length).toEqual(0);
  });
});