import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors, HttpInterceptorFn } from '@angular/common/http';
import { authInterceptor } from './shared/interceptors/auht-interceptor';
import { spinnerinterceptors } from './shared/interceptors/spinnerinterceptors';
import {BrowserAnimationsModule,provideAnimations,} from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch(),withInterceptors([authInterceptor, spinnerinterceptors])),
    importProvidersFrom(RouterModule ,NgxSpinnerService,BrowserAnimationsModule),
    provideRouter(routes,withViewTransitions(),withInMemoryScrolling({scrollPositionRestoration: 'top'})),
    provideClientHydration(),provideAnimations(),
  ]
};
