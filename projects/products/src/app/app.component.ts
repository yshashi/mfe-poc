import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiService, Product } from './api.service';
import { SharedService } from 'shared';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'products';
  #apiService = inject(ApiService);
  products = toSignal(this.#apiService.getProducts());
  shared = inject(SharedService);

  addToCart(product: Product) {
    this.shared.emit({
      name: 'addToCart',
      value: product,
    });
  }

}
