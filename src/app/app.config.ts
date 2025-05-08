import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

// Country imports
import { countryReducer } from './store/country_store/country.reducer';
import { CountryEffect } from './store/country_store/country.effect';

// Port imports
import { portReducer } from './store/port_store/port.reducer';
import { PortEffect } from './store/port_store/port.effect';

import { shipReducer } from './store/ship_store/ship.reducer';
import { ShipEffect } from './store/ship_store/ship.effect';

import { voyageReducer } from './store/voyage_store/voyage.reducer';
import { VoyageEffect } from './store/voyage_store/voyage.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore({
      countries: countryReducer,
      ports: portReducer,
      ships: shipReducer,
      voyages: voyageReducer
    }), 
    provideEffects([
      CountryEffect,
      PortEffect,
      ShipEffect,
      VoyageEffect
    ]), 
    provideHttpClient()
  ],
};