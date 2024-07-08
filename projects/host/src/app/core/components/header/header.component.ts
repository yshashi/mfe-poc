import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SharedService } from 'shared';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
                    <li><a routerLink="/home" routerLinkActive="active" class="hover:text-gray-300 text-gray-400">Home</a></li>
                    <li><a routerLink="/products" routerLinkActive="active" class="hover:text-gray-300 text-gray-400">Products</a></li>
                    <li><a routerLink="/about" routerLinkActive="active" class="hover:text-gray-300 text-gray-400">About</a></li>
                    <li><a routerLink="/contact" routerLinkActive="active" class="hover:text-gray-300 text-gray-400">Contact</a></li>
                    <li><a routerLink="/remote" routerLinkActive="active" class="hover:text-gray-300 text-gray-400">Remote</a></li>
                </ul>
            </nav>
        </div>
    </header>
  `,
  styles: `
  .active{
    @apply text-white
  }
  `
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
