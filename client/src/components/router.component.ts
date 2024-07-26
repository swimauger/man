import { Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [];

@Component({
  selector: 'app-router',
  imports: [ RouterModule ],
  standalone: true,
  template: '<router-outlet></router-outlet>'
})
export class RouterComponent {}
