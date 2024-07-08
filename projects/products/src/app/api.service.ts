import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  #http = inject(HttpClient);
  getProducts() {
    return this.#http.get<Product[]>('https://fakestoreapi.com/products');
  }
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  quantity: number
}

export interface Rating {
  rate: number
  count: number
}
