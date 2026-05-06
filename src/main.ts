import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ComponentOverview } from './app/components/test/page1.component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
