import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { env } from './environments/environment';
import { AppModule } from './app/';

if (env._env == "prod")
  enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule).catch((err: any) => console.log(err));
