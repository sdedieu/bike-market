import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  NgModule,
  signal,
} from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root-catalog',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('catalog');
}
