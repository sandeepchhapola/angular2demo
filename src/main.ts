import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/constants/environment';
import { Angular2AppComponent } from './app/components/appcomponent/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2AppComponent);

