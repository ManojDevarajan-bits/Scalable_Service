import { ApplicationConfig } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { mergeApplicationConfig } from '@angular/core';

export const clientConfig: ApplicationConfig = mergeApplicationConfig(
  appConfig,
  {
    providers: [provideClientHydration(withEventReplay())]
  }
);
