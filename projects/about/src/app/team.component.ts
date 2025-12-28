import { Component, EventEmitter, Input, input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  template: ` <div class="bg-gray-100 p-6 rounded-lg shadow-md">
    <h2 class="text-3xl font-semibold text-gray-800 mb-4 text-center">
      Meet Our {{name}} Team
    </h2>
    <p class="text-lg text-gray-600 text-center mb-8">
      We are a team of passionate individuals who work tirelessly to bring you
      the best shopping experience. Meet the people behind ShopEase!
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      @for (member of members; track $index) {
        <div class="text-center">
        <img
          [src]="member.profileImage"
          alt="Team Member {{$index + 1}}"
          class="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
        />
        <h3 class="text-xl font-semibold text-gray-800">{{member.name}}</h3>
        <p class="text-gray-600">{{member.position}}</p>
        <button (click)="handleClick(member.name)" class="p-2 rounded bg-teal-500 text-white">Say Hi</button>
      </div>
      }
    </div>
  </div>`,
  encapsulation: ViewEncapsulation.None,
})
export class TeamComponent {
  title = 'team';
  @Input() name: string = '';
  @Output() onClick = new EventEmitter<string>();

  members = [
    {
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      position: 'CEO & Founder'
    },
    {
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      position: 'COO & Co-Founder'
    },
    {
      profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jessica Ronnie',
      position: 'Head of Marketing'
    }
  ]

  handleClick(name: string) {
    this.onClick.emit(name);
  }
}
