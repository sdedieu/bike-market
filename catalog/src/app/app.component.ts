import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root-catalog',
  imports: [MatButtonModule, RouterOutlet, RouterLink],
  template: `
    <button mat-flat-button [routerLink]="['/catalog/child-a']" color="primary">
      Child A
    </button>
    <button mat-flat-button [routerLink]="['/catalog/child-b']" color="accent">
      Child B
    </button>

    <router-outlet />
  `,
  styles: [
    `
      button {
        margin: 8px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'catalog';
}
