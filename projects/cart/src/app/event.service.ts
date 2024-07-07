import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService implements OnDestroy {

  constructor() {
    this.initEventListeners();
  }

  private initEventListeners() {
    window.addEventListener('addToCart', this.handleAddToCart.bind(this));
  }

  private handleAddToCart(event: any) {
    console.log('Add to cart', event.detail);
  }

  ngOnDestroy(): void {
    window.removeEventListener('addToCart', this.handleAddToCart.bind(this));
  }
}
