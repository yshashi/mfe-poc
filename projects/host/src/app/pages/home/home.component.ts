import { Component, inject } from '@angular/core';
import { SharedService } from 'shared';
import { Product, ProductService } from '../../shared/product.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  #productService = inject(ProductService);
  topProducts = toSignal(this.#productService.getTopProducts());
  constructor(private shared: SharedService) {}
  addToCart(product: Product) {
    this.shared.emit({
      name: 'addToCart',
      value: product,
    });
  }
}
