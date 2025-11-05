import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

class MfeAngular extends HTMLElement {
  connectedCallback() {
    const element = document.createElement('app-root-catalog');
    this.appendChild(element);
    bootstrapApplication(AppComponent, appConfig).catch((err) =>
      console.error(err)
    );
  }
}

customElements.define('catalog-web-component', MfeAngular);
