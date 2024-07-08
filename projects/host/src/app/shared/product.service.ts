import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  #http = inject(HttpClient);
  getTopProducts() {
    return this.#http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      map((products) => products.filter((product) => product.rating.rate > 4)),
      map((filteredProducts) => filteredProducts.slice(0, 4)),
      map((product) =>
        product.map((product) => {
          return { ...product, quantity: 1 };
        })
      )
    );
  }
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
