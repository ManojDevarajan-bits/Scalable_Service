import { bootstrapApplication } from '@angular/platform-browser';
import { clientConfig } from './app/app.config.client';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, clientConfig)
  .catch((err) => console.error(err));
