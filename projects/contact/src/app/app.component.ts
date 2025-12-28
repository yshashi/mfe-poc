import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppComponent implements OnInit {
  title = 'contact';

  async ngOnInit() {
    await loadRemoteModule('about', './TeamElement');
  }

  sayHi(event: Event) {
    const name = (event as CustomEvent).detail;
    alert(name);
  }
}


export interface CustomEvent extends Event {
  detail: any;
}
