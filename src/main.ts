import './polyfills.ts';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';


if (environment.production) {
  enableProdMode();
}

/**
 * JIT compile.
 */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MaterialAppModule} from './app/app.module';
platformBrowserDynamic().bootstrapModule(MaterialAppModule);


/**
 * AoT compile.
 * First run `./node_modules/.bin/ngc -p ./src/`
 */

// import {platformBrowser} from '@angular/platform-browser';
// import {MaterialAppModuleNgFactory} from './aot/app/app.module.ngfactory';
// platformBrowser().bootstrapModuleFactory(MaterialAppModuleNgFactory);
