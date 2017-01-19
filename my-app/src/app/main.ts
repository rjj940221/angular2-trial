import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//agular2 does not need to run in a browser
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);