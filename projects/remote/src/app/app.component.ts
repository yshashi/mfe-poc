import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamComponent } from 'about/app/team.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TeamComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'remote';
}
