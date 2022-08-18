
import { ActionReducerMap } from '@ngrx/store';
import { StateModel } from '../models/State';
import { ShopReducer } from './reducer';


export const rootReducer = {};

export interface AppState {
    state: StateModel;
};


export const reducers: ActionReducerMap<AppState, any> = {
    state: ShopReducer
};