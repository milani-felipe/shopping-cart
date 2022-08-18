
export interface ProductModel {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: RatingModel;
    count: number;
    rate: number;
    title: string;
}

export interface RatingModel {
    rate: number;
    count: number;
}

export interface CartProductModel {
    id: number;
    image: string;
    qty: number;
    title: string;
    price: number;
}