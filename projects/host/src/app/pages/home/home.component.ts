import { Component, inject } from '@angular/core';
import { SharedService } from 'shared';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private shared: SharedService) {}
  addToCart() {
    this.shared.emit({
      name: 'addToCart',
      value: {
        name: 'Product Name',
        price: 19.99,
      },
    });
  }
}
