import { CartProductModel, ProductModel } from "./Product";

export interface StateModel {
    shoppList: ProductModel[];
    cart: CartModel;
}


export interface CartModel {
    items: CartProductModel[];
    total: number;
}