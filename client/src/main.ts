import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { RouterComponent, routes } from './components/router.component';

bootstrapApplication(RouterComponent, {
  providers: [ provideRouter(routes) ]
}).catch(console.error);
