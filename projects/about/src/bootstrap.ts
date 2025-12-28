import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// import { bootstrapApplication, createApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { NgZone } from '@angular/core';
// import { createCustomElement } from '@angular/elements';

// (async () => {
//   const app = await createApplication({
//     providers: [],
//   });

//   const mfe2Root = createCustomElement(AppComponent, {
//     injector: app.injector,
//   });

//   customElements.define('mfe2-root', mfe2Root);
// })();
