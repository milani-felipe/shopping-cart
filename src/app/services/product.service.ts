import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { ProductModel } from "../models/Product";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }

    getProducts(): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(`${environment.api}/products`)
    }
}