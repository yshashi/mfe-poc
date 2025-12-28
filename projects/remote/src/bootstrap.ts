import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

// Load the remote team element
// const loadTeamElement = async () => {
//   //await import('about/team-element');
// };
const loadTeamElement = async () => {
  console.log('Loading team element');
  try {
    loadRemoteModule(
      'about', // Adjust port as needed
      './team-element'
    ).then((m) => m.teamElement);
  } catch (err) {
    console.error('Error loading team element:', err);
  }
};
bootstrapApplication(AppComponent, appConfig)
.then((appRef) => {
  console.log('Application started');
})
.catch((err) =>
  console.error(err)
);

loadTeamElement();
