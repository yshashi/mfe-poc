import { Component, DestroyRef, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedService } from 'shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Product } from '../../../products/src/app/api.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cart';
  cartItems = signal<Product[]>([]);
  constructor(private shared: SharedService) {
    this.shared
      .on('cartItems')
      .pipe(takeUntilDestroyed())
      .subscribe((res) => this.cartItems.set(res));
  }
}
