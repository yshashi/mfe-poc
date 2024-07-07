import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from 'shared';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="bg-gray-800 text-white">
        <div class="container mx-auto px-4 py-3">
            <div class="flex justify-between items-center">
                <a routerLink="/" class="text-2xl font-bold">ShopEase</a>
                <div class="flex space-x-4">
                    <a (click)="navigateTo('/cart')" class="hover:text-gray-300"><i class="fas fa-shopping-cart"></i> Cart {{products.length}}</a>
                    <a href="#" class="hover:text-gray-300"><i class="fas fa-user"></i> Account</a>
                </div>
            </div>
            <nav class="mt-4">
                <ul class="flex space-x-6">
                    <li><a routerLink="/home" class="hover:text-gray-300">Home</a></li>
                    <li><a routerLink="/products" class="hover:text-gray-300">Products</a></li>
                    <li><a routerLink="/about" class="hover:text-gray-300">About</a></li>
                    <li><a routerLink="/contact" class="hover:text-gray-300">Contact</a></li>
                    <li><a routerLink="/remote" class="hover:text-gray-300">Remote</a></li>
                </ul>
            </nav>
        </div>
    </header>
  `,
})
export class HeaderComponent {

  products: any = [];

  constructor(private shared: SharedService, private router: Router) {
    this.shared.on('addToCart').subscribe((product) => {
      this.products = [...this.products, product];
    });
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
    this.shared.emit({
      name: 'cartItems',
      value: this.products
    })
  }
}
