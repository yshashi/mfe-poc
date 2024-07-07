import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  addToCart() {
    const data = {
      id: 1,
      name: 'test'
    }
    const event = new CustomEvent('addToCart', { detail: data });
    window.dispatchEvent(event);
  }
}
