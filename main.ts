import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Appmodule } from './app/app.module';
import { enableProdMode } from '@angular/core';

enableProdMode();

platformBrowserDynamic().bootstrapModule(Appmodule);