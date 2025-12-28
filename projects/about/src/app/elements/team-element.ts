import { createApplication } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import { TeamComponent } from '../team.component';

(async () => {
  const app = await createApplication({
    providers: [],
  });

  const mfeTeam = createCustomElement(TeamComponent, {
    injector: app.injector,
  });

  customElements.define('mfe-team', mfeTeam);
})();
