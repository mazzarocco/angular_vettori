import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Configurazione globale bootstrap: provider disponibili in tutta l'app.
export const appConfig: ApplicationConfig = {
  providers: [
    // Registra listener globali per intercettare errori runtime nel browser.
    provideBrowserGlobalErrorListeners(),
    // Abilita il router Angular usando la tabella route definita nel file dedicato.
    provideRouter(routes)
  ]
};
