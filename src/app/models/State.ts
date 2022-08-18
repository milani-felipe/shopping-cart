import { ProductModel } from "./Product";

export interface StateModel {
    shoppList: ProductModel[];
    cart: CartModel;
}


export interface CartModel {
    items: ProductModel[];
    total: number;
}