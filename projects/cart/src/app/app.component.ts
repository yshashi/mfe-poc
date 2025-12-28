import { Component, DestroyRef, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedService } from 'shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Product } from '../../../products/src/app/api.service';
import {
  CustomEvent,
  CustomEventService,
} from '../../../shared/src/lib/custom-event.service';

@Component({
    selector: 'app-cart',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cart';
  cartItems = signal<Product[]>([]);
  constructor(
    private shared: SharedService,
    private readonly customEvent: CustomEventService<Product>
  ) {
    this.shared
      .on('cartItems')
      .pipe(takeUntilDestroyed())
      .subscribe((res) => this.cartItems.set(res));

    // this.customEvent
    //   .on('addToCart')
    //   .subscribe((res: CustomEvent) => console.log(res.detail));
  }
}
