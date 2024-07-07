import { Component, DestroyRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedService } from 'shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cart';
  constructor(private shared: SharedService) {
    this.shared.on('cartItems')
    .pipe(takeUntilDestroyed())
    .subscribe((res) => {
      console.log(res);
    })
  }
}
